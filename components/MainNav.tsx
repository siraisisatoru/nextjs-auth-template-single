import { auth } from "@/auth";
import React from "react";
import SignOutButton from "./UI/SignOutButton";
import SignInButton from "./UI/SignInButton";

const MainNav = async () => {
    const session = await auth();

    return (
        <div className="flex items-center justify-center h-20 bg-slate-500">
            {session?.user ? (
                <>
                    <SignOutButton />
                </>
            ) : (
                <>
                    <SignInButton />
                </>
            )}
        </div>
    );
};

export default MainNav;
