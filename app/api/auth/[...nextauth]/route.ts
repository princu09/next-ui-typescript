import axios from "axios";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const options: any = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        try {
          // Add logic here to look up the user from the credentials supplied
          const response = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
            {
              email: credentials?.email,
              password: credentials?.password,
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          const res = response.data;

          if (res) {
            return Promise.resolve(res); // Resolve with user data
          } else {
            return Promise.resolve(null); // Reject if user not found
          }
        } catch (error) {
          // Handle errors gracefully
          return Promise.resolve(null);
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
    signOut: "/auth/signout",
  },
  callbacks: {
    async jwt(token: any, user: any) {
      if (user) {
        token.token = user.token;
        token.userRole = user.userRole;
      }
      return token;
    },
    async session(session: any, token: any) {
      session.user = {
        token: token.token,
        userRole: token.userRole,
      };
      return session;
    },
  },
};

export default NextAuth(options);
