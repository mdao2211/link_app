"use client"
import Image from "next/image";
import githubLogo from "@/public/github.png";
export default async function homePage() {
 return(
    <>
    {/* HEADER  */}
    <div className="sticky inset-x-0 top-0 z-30 w-full transition-all">
    <div className="buttonHidden">
    <button className="fixed right-3 top-3 z-40 rounded-full p-2 transition-colors duration-200 hover:bg-gray-200 focus:outline-none active:bg-gray-300 lg:hidden"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-5 w-5 text-gray-600"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg></button>
    </div>
    <div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20">
        <div className="flex h-14 items-center justify-between">
            <div className=" flex items-center space-x-4 headerContent__left">
            <Image
                src={githubLogo}
                alt="LINK Logo"
                width={50}
                height={50}
            />
            </div>

            <div className="headerContent__right">
            <a className="animate-fade-in rounded-full px-4 py-1.5 text-sm font-medium text-gray-500 transition-colors ease-out hover:text-black" href="signin">Log in</a>
            <a className="animate-fade-in rounded-full border border-black bg-black px-4 py-1.5 text-sm text-white transition-all hover:bg-white hover:text-black" href="register">Sign Up</a>
            </div>
        </div>
    </div>
    </div>
    {/* MAIN  */}
    <div className="mx-auto mb-10 mt-12 max-w-md px-2.5 text-center sm:max-w-lg sm:px-0">
        <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.15] text-black sm:text-6xl sm:leading-[1.15]">
            Short Links With
            <br />
            <span className="bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent">Superpowers</span>
        </h1>
        <h2 className="mt-5 text-gray-600 sm:text-xl">
            LINK is the open-source link management infrastructure for modern marketing teams.
        </h2>
        <div className="main__buttons mx-auto mt-5 flex max-w-fit space-x-4">
            <a className="rounded-full border border-black bg-black px-5 py-2 text-sm text-white shadow-lg transition-all hover:bg-white hover:text-black" href="signin">Start for Free</a>
            <a className="rounded-full border border-gray-300 bg-white px-5 py-2 shadow-lg transition-all hover:border-gray-800" href="#">Get a Demo</a>
        </div>
    </div>
    </>
 );
}