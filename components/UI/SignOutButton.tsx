import { signOut } from "@/auth";
import React from "react";

const SignOutButton = () => {
    return (
        <form
            action={async () => {
                "use server";
                await signOut();
            }}
            className="flex justify-center"
        >
            <button
                type="submit"
                className="bg-red-600 text-white font-bold py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition ease-in-out duration-150"
            >
                Sign Out
            </button>
        </form>
    );
};

export default SignOutButton;
