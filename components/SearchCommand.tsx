"use client";

import { useEffect, useMemo, useState } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandInput,
  CommandList,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { Loader2, TrendingUp } from "lucide-react";
import Link from "next/link";
import { searchStocks } from "@/lib/actions/finnhub.actions";
import { useDebounce } from "@/hooks/useDebounce";
import WatchlistButton from "./WatchlistButton";

export default function SearchCommand({
  renderAs = "button",
  label = "Add stock",
  initialStocks,
}: SearchCommandProps) {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  // ensure stocks is always an array
  const [stocks, setStocks] = useState<StockWithWatchlistStatus[]>(
    initialStocks ?? []
  );

  const isSearchMode = !!searchTerm.trim();
  // when not searching show top 10 of stocks state
  const baseDisplay = isSearchMode ? stocks : stocks?.slice(0, 10) ?? [];

  // Deduplicate by symbol|exchange|type (keep first occurrence)
  const displayStocks = useMemo(() => {
    const seen = new Set<string>();
    const out: StockWithWatchlistStatus[] = [];
    for (const s of baseDisplay) {
      const key = `${(s.symbol ?? "").toUpperCase()}|${(
        s.exchange ?? ""
      ).toUpperCase()}|${(s.type ?? "").toUpperCase()}`;
      if (!seen.has(key)) {
        seen.add(key);
        out.push(s);
      }
    }
    return out;
  }, [baseDisplay]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const handleSearch = async () => {
    if (!isSearchMode) return setStocks(initialStocks ?? []);

    setLoading(true);
    try {
      const results = await searchStocks(searchTerm.trim());
      setStocks(results ?? []);
    } catch {
      setStocks([]);
    } finally {
      setLoading(false);
    }
  };

  const debouncedSearch = useDebounce(handleSearch, 300);

  useEffect(() => {
    debouncedSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]); // debouncedSearch intentionally not in deps to preserve expected behavior

  const handleSelectStock = () => {
    setOpen(false);
    setSearchTerm("");
    setStocks(initialStocks ?? []);
  };

  // Handle watchlist changes status change: update current stocks state (not initialStocks)
  const handleWatchlistChange = async (symbol: string, isAdded: boolean) => {
    setStocks((prev) =>
      (prev ?? []).map((stock) =>
        stock.symbol === symbol ? { ...stock, isInWatchlist: isAdded } : stock
      )
    );
  };

  return (
    <>
      {renderAs === "text" ? (
        <span onClick={() => setOpen(true)} className="search-text">
          {label}
        </span>
      ) : (
        <Button onClick={() => setOpen(true)} className="search-btn">
          {label}
        </Button>
      )}
      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        className="search-dialog"
      >
        <div className="search-field">
          <CommandInput
            value={searchTerm}
            onValueChange={setSearchTerm}
            placeholder="Search stocks..."
            className="search-input"
          />
          {loading && <Loader2 className="search-loader" />}
        </div>
        <CommandList className="search-list">
          {loading ? (
            <CommandEmpty className="search-list-empty">
              Loading stocks...
            </CommandEmpty>
          ) : displayStocks?.length === 0 ? (
            <div className="search-list-indicator">
              {isSearchMode ? "No results found" : "No stocks available"}
            </div>
          ) : (
            <ul>
              <div className="search-count">
                {isSearchMode ? "Search results" : "Popular stocks"} (
                {displayStocks?.length ?? 0})
              </div>
              {displayStocks?.map((stock, i) => {
                // stable unique key: symbol-exchange-type, fallback to include index
                const keyBase = `${stock.symbol ?? "UNK"}-${
                  stock.exchange ?? "UNK"
                }-${stock.type ?? "UNK"}`;
                const key =
                  displayStocks.filter(
                    (s) =>
                      (s.symbol ?? "").toUpperCase() ===
                        (stock.symbol ?? "").toUpperCase() &&
                      (s.exchange ?? "").toUpperCase() ===
                        (stock.exchange ?? "").toUpperCase() &&
                      (s.type ?? "").toUpperCase() ===
                        (stock.type ?? "").toUpperCase()
                  ).length > 1
                    ? `${keyBase}-${i}`
                    : keyBase;

                return (
                  <li key={key} className="search-item">
                    <Link
                      href={`/stocks/${stock.symbol}`}
                      onClick={handleSelectStock}
                      className="search-item-link"
                    >
                      <TrendingUp className="h-4 w-4 text-gray-500" />
                      <div className="flex-1">
                        <div className="search-item-name">{stock.name}</div>
                        <div className="text-sm text-gray-500">
                          {stock.symbol} | {stock.exchange} | {stock.type}
                        </div>
                      </div>
                      <WatchlistButton
                        symbol={stock.symbol}
                        company={stock.name}
                        isInWatchlist={stock.isInWatchlist}
                        onWatchlistChange={handleWatchlistChange}
                        type="icon"
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </CommandList>
      </CommandDialog>
    </>
  );
}
