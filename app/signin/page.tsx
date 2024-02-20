import {
  CredentialsSignInButton,
  GithubSignInButton,
  GoogleSignInButton,
} from "@/components/authButtons";
import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth";
import { redirect } from "next/navigation";
import { CredentialsForm } from "@/components/credentialsForm";
import Link from "next/link";
export default async function SignInPage() {
  const session = await getServerSession(authConfig);

  console.log("Session: ", session);

  if (session) return redirect("/signin");

  return (
    <div className="flex h-screen w-screen justify-center">
      <div>
        <div className="flex flex-col items-center mt-10 p-10 shadow-md bg-white">
          <h1 className="mt-4 mb-4 text-4xl font-bold">Sign In</h1>
          <GoogleSignInButton />
          <GithubSignInButton />
          <span className="text-2xl font-semibold text-black text-center mt-8">
            Or
          </span>
          {/* <CredentialsSignInButton /> */}
          <CredentialsForm />
          <div className="text-center">
            <p className="text-center text-sm text-gray-500 pt-8">
              Don't have an account?{" "}
              <Link
                className="font-semibold text-gray-500 transition-colors hover:text-black"
                href="/register"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
