"use client";

import { useSession } from "next-auth/react";
import PageLoader from "./components/organism/loader/page-loader";
import { useRouter } from "next/navigation";
import { routes } from "@/config/routes";
import Sidebar from "@/layout/sidebar";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();
  if (status === "loading") return <PageLoader />;

  /* 
     Example route based on routes
 if (
    session?.user?.user?.roles
      ?.map((item: { name: string }) => item.name)
      .includes(Role.Counselor)
  ) {
  }

  */

  return router.push(routes.admin.dashboard);

  // return (
  //   <Sidebar className="fixed hidden dark:bg-gray-50 xl:block border-4 border-red-500" />
  // );
}
