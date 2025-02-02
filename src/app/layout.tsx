import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "./api/auth/[...nextauth]/auth-provider";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/auth-options";
import { ThemeProvider } from "../../utils/theme-provider";
import dynamic from "next/dynamic";
import { Toaster } from "sonner";
import GlobalModal from "./components/organism/modal-views/container";
import GlobalDrawer from "./components/organism/drawer-views/container";

const inter = Inter({ subsets: ["latin"] });

const NextProgress = dynamic(
  () => import("../app/components/organism/next-progress"),
  {
    ssr: false,
  }
);

import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);

  return (
    <html
      lang="en"
      dir="ltr"
      // required this one for next-themes, remove it if you are not using next-theme
      suppressHydrationWarning
    >
      <body className={inter.className} suppressHydrationWarning>
        <AuthProvider session={session}>
          <ThemeProvider>
            <NextProgress />
            {children}
            <Toaster richColors />
            <GlobalDrawer />
            <GlobalModal />
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
