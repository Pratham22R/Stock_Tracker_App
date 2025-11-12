import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex justify-center align-center items-center flex-col mt-10 pt-10">
      <h1>Welcome to the Stock Platform</h1>
      <p className="p-3">Your one-stop solution for stock market insights.</p>
      <Button variant="default" className="mt-4">Get Started</Button>
    </main> 
  );
}
