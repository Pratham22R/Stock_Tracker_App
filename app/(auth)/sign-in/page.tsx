'use client'
import Footer from '@/components/forms/Footer';
import InputField from '@/components/forms/inputField';
import { Button } from '@/components/ui/button';
import { register } from 'module';
import React from 'react'
import { useForm } from 'react-hook-form'

const SignIn = () => {
  const {
    register,handleSubmit,formState:{errors,isSubmitting},control
}= useForm<SignInFormData>({
    defaultValues:{
        email: '',
        password: '',
    },
    mode: 'onBlur',
});
  
const onSubmit = async (data: SignInFormData) =>{
    try {
        console.log(data)
    } catch (e) {
        console.log(e)
    }
  }
  return (
    <div>
      <h1 className="form-title">Log In Your Account</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
         <InputField 
                name ="Email"
                label="Email"
                placeholder="Enter your email"
                register={register}
                error={errors.email}
                validation={{ required: 'Email is required' , pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } }}
            />
            <InputField 
                name ="password"
                label="Password"
                placeholder="Enter a strong password"
                register={register}
                type='password'
                error={errors.password}
                validation={{ required: 'Password is required' , minLength: { value: 8, message: 'Password must be at least 8 characters' } }}
            />
            <Button type='submit' className='w-full yellow-btn mt-5' disabled={isSubmitting}>
                {isSubmitting ? 'Signing In...' : 'Sign In'}
            </Button>
            <Footer text="Don't have an account?" linkText="Create an account" href="/sign-up" />
      </form>
    </div>
  )
}

export default SignIn