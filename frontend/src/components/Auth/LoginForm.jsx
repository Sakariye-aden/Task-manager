import React from 'react'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useNavigate } from 'react-router'


const LoginForm = () => {

   const navigate = useNavigate()

  return (
    <Card>
             <CardHeader className="text-center">
                <CardTitle className="text-2xl">Sign in</CardTitle>
                <CardDescription>Enter your credentials to access your account</CardDescription>
             </CardHeader>
             <CardContent>
            <form>
              <div className="flex flex-col gap-6">
                
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@gmail.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="***********"
                    required
                  />
                </div>
                 
                 <Button>Create Account</Button>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center space-x-2">
             <span>Don't have an account ?</span>
             <span onClick={()=> navigate('/register')} className='text-red-500 cursor-pointer'>sign up </span>
          </CardFooter>
        </Card>
  )
}

export default LoginForm