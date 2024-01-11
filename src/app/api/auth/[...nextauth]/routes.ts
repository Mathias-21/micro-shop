import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const nextAuthOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId:
        '498165033964-rl9naqafqe0d7o6ltsvjqacobo2kgbqt.apps.googleusercontent.com',
      clientSecret: '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',
    }),
  ],
};

const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST };
