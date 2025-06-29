"use client"

import * as Clerk from '@clerk/elements/common'
import * as SignIn from '@clerk/elements/sign-in'
import { useUser } from '@clerk/nextjs';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const LOGO_BLUE = "#0099cc"; // Adjust this hex to match your logo's blue

const LoginPage = () => {

    const { isSignedIn, user, isLoaded } = useUser()
    const router = useRouter()

    useEffect(() =>{
        const role = user?.publicMetadata.role;
        if (role) {
            router.push(`/${role}`);
        }
    },[user,router])

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-[#e0f7fa] to-[#b2ebf2]">
            <div className="bg-white rounded-2xl shadow-2xl p-10 w-full max-w-md flex flex-col items-center">
                <div className="flex flex-col items-center mb-6">
                    <Image src="/lipo_logo.png" alt="LipoZentrum Logo" width={64} height={64} className="mb-2" />
                    <h1 className="text-3xl font-bold" style={{ color: LOGO_BLUE }}>LipoZentrum</h1>
                    <span className="text-[${LOGO_BLUE}] text-sm font-medium">Patient Management System</span>
                </div>
                <h2 className="text-xl font-semibold mb-6" style={{ color: LOGO_BLUE }}>Sign in to your account</h2>
                <SignIn.Root>
                    <SignIn.Step name="start" className="flex flex-col gap-4 w-full">
                        <Clerk.GlobalError />
                        <Clerk.Field name="identifier">
                            <Clerk.Label>
                                <span className="font-medium" style={{ color: LOGO_BLUE }}>Username</span>
                            </Clerk.Label>
                            <Clerk.Input
                                placeholder="Enter your username"
                                type="text"
                                required
                                className="w-full px-4 py-2 border border-[#0099cc]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0099cc]"
                            />
                            <Clerk.FieldError />
                        </Clerk.Field>
                        <Clerk.Field name="password">
                            <Clerk.Label>
                                <span className="font-medium" style={{ color: LOGO_BLUE }}>Password</span>
                            </Clerk.Label>
                            <Clerk.Input
                                placeholder="Enter your password"
                                type="password"
                                required
                                className="w-full px-4 py-2 border border-[#0099cc]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0099cc]"
                            />
                            <Clerk.FieldError />
                        </Clerk.Field>
                        <SignIn.Action submit className="w-full py-2 bg-[#0099cc] text-white font-bold rounded-md hover:bg-[#0099cc]/90 transition">
                            Sign In
                        </SignIn.Action>
                    </SignIn.Step>
                </SignIn.Root>

            </div>
        </div>
    )
}

export default LoginPage