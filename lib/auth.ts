/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { type NextAuthOptions, getServerSession } from 'next-auth'
import { useSession } from 'next-auth/react'
import { redirect, useRouter } from 'next/navigation'
import EmailProvider from "next-auth/providers/email";

import CredentialsProvider from 'next-auth/providers/credentials'
import GithubProvider from 'next-auth/providers/github'
// import prisma from "./prisma";

export const authConfig: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Sign in',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'example@example.com'
        },
        password: { label: 'Password', type: 'password' }
      },
      async authorize (credentials) {
        if (!credentials?.email || !credentials.password) { return null }

        // const dbUser = await prisma.user.findFirst({
        //   where: { email: credentials.email },
        // });

        // Verify Password here
        // We are going to use a simple === operator
        // In production DB, passwords should be encrypted using something like bcrypt...
        // if (dbUser && dbUser.password === credentials.password) {
        //   const { password, createdAt, id, ...dbUserWithoutPassword } = dbUser;
        //   return dbUserWithoutPassword as User;
        // }

        return null
      }
    }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID as string,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    // }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!
    }),
    // EmailProvider({
    //     server: {
    //         host: process.env.EMAIL_SERVER_HOST,
    //         port: process.env.EMAIL_SERVER_PORT,
    //         auth: {
    //           user: process.env.EMAIL_SERVER_USER,
    //           pass: process.env.EMAIL_SERVER_PASSWORD
    //         }
    //       },
    //       from: process.env.EMAIL_FROM
    // })
  ]
}

export async function loginIsRequiredServer () {
  const session = await getServerSession(authConfig)
  if (!session) return redirect('/')
}

export function loginIsRequiredClient () {
  if (typeof window !== 'undefined') {
    const session = useSession()
    const router = useRouter()
    if (!session) router.push('/')
  }
}
