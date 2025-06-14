"use client"

import { DottedSeparator } from "@/components/dotted-separator"
import { Button } from "@/components/ui/button"
import { 
    Card, 
    CardContent, 
    CardHeader, 
    CardTitle
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export const SignInCard = () => {
    return (
        <Card className="w-full h-full md:w[487px] border-none shadow-none">
            <CardHeader className="flex items-center justify-center text-center p-7">
                <CardTitle className="text-2xl">
                    Welcome back!
                </CardTitle>
            </CardHeader>
            <div className="px-7">
                <DottedSeparator />
            </div>

            <CardContent className="p-7">
                <form className="space-y-4">
                    <Input
                    required
                    type="email"
                    value={""}
                    onChange={() => {}}
                    placeholder="Enter Email address"
                    disabled={false}
                    
                    />
                    <Input
                    required
                    type="password"
                    value={""}
                    onChange={() => {}}
                    placeholder="Enter Password"
                    disabled={false}
                    min = {8}
                    max = {256}
                    />
                    <Button disabled={false} size="lg" className="w-full">
                        Login
                    </Button>
                </form>
            </CardContent>
            <div className="px-7">
                <DottedSeparator />
            </div>
            <CardContent className="p-7 flex flex-col gap-y-4">
                <Button
                variant="secondary"
                size="lg"
                className="w-full">
                    Login with Google
                </Button>
            </CardContent>
        </ Card >
    )
}