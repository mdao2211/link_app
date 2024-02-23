/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/react-in-jsx-scope */
'use client'
import Image from 'next/image'
import githubLogo from '@/public/github.png'
import Link from 'next/link'
import {
  GithubSignInButton,
  GoogleSignInButton
} from '@/components/authButtons'

const register = () => {
  return (
      <div className="flex h-screen w-screen justify-center">
        <div className="col-span-1 flex items-center justify-center md:col-span-2">
          <div className="w-full max-w-md overflow-hidden border-y border-gray-200 sm:rounded-2xl sm:border sm:shadow-xl">
            <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">
              <Image
                src={githubLogo}    
                alt="LINK Logo"
                width={100}
                height={100}
              />
              <h3 className="text-xl font-semibold">Create your LINK account</h3>
              <p className="text-sm text-gray-500">Get started for free. No credit card required</p>
            </div>
            <div className="flex flex-col space-y-3 bg-white px-4 py-4 sm:px-16">
              <GoogleSignInButton />
              <GithubSignInButton />
            </div>
            <div className="text-center">
              <p className="text-center text-sm bg-white py-4">
                Already have an account?{' '}
                <Link
                  className="font-semibold text-gray-500 transition-colors hover:text-black"
                  href="/signin"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
  )
}
export default register
