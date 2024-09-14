import { signIn } from "@/auth";
import React from "react";

const SignInButton = () => {
    return (
        <form
            action={async () => {
                "use server";
                await signIn("github");
            }}
            className="flex justify-center ">
            <button
                type="submit"
                className="bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition ease-in-out duration-150">
                Sign In
            </button>
        </form>
    );
};

export default SignInButton;
