"use client";
import { useIsMounted } from "@/hooks/use-is-mounted";
import Header from "@/layout/header";
import Sidebar from "@/layout/sidebar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isMounted = useIsMounted();

  if (!isMounted) {
    return null;
  }

  return (
    <section className="flex">
      <aside className="bottom-0 start-0 z-50 h-full w-[270px] border-e-2  bg-white 2xl:w-72 fixed hidden dark:bg-gray-50 xl:block ">
        <Sidebar />
      </aside>
      <div className="flex w-full flex-col xl:ms-[270px] xl:w-[calc(100%-270px)] 2xl:ms-72 2xl:w-[calc(100%-288px)]">
        <main className="flex w-full flex-col">
          <Header />

          <div className="flex flex-grow flex-col mt-2 px-4 pb-6 pt-2 md:px-5 lg:px-6 lg:pb-8 3xl:px-8 3xl:pt-4 4xl:px-10 4xl:pb-9">
            {children}
          </div>
        </main>
      </div>
    </section>
  );
}
