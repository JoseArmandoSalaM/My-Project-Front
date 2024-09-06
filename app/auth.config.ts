import type { NextAuthConfig } from 'next-auth';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
 
export const authConfig: NextAuthConfig = {
    pages: {
        signIn: '/auth',
        newUser: '/auth/new-account',
    },
    providers: [
        Credentials({
            name: "Credentials",
            credentials: {
              email: { label: "email", type: "email", placeholder: "test@test.com" },
              password: { label: "Password", type: "password" },
            },

            async authorize(credentials) {
                const res = await fetch(
                  `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`,
                  {
                    method: "POST",
                    body: JSON.stringify({
                      email: credentials?.email,
                      password: credentials?.password,
                    }),
                    headers: { "Content-Type": "application/json" },
                  }
                );
                const user = await res.json();
        
                if (user.error) throw user;

                return user;
            },
        }),
    ],
    callbacks: {
      async jwt({ token, user }) {
        return { ...token, ...user };
      },
      async session({ session, token }) {
        session.user = token as any;
        return session;
      },
    },
};


export const {signIn, signOut, auth, handlers} = NextAuth(authConfig);