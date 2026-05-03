'use client'
import { useSession } from "next-auth/react";
import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import { signIn } from "@/app/actions/sign-in";
import { signOut } from "@/app/actions/sign-out";

const AuthHeader = () => {
    const session = useSession();

    if (session.status === "loading") return null;

    let authContent: React.ReactNode;

    if (session.data?.user) {

        authContent = (
            <Popover>
                <PopoverTrigger asChild>
                    <Avatar>
                        <AvatarImage src={session.data.user.image || ""} alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </PopoverTrigger>
                <PopoverContent>
                    <h1>{session.data.user.name}</h1>
                    <form action={signOut}>
                        <Button type="submit">{""}
                            <LogOut />Sign out
                        </Button>
                    </form>
                </PopoverContent>
            </Popover>
        )
    } else {

        authContent = (
            <>
                <form action={signIn}>
                    <Button variant={"outline"}>Sign in</Button>
                </form>
                <form action={signIn}>
                    <Button>Sign up</Button>
                </form>

            </>
        )
    }

    return authContent
}
export default AuthHeader;

