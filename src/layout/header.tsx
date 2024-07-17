"use client";

import Link from "next/link";

import { useIsMounted } from "@/hooks/use-is-mounted";
import { useWindowScroll } from "@/hooks/use-window-scroll";
import ProfileMenu from "./profile-menu";

import cn from "../../utils/class-names";
import Logo from "../app/components/ui/logo";
import { Button } from "../app/components/ui/button";
import { Drawer } from "../app/components/ui/drawer";

import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Modal } from "rizzui";
import { useTheme } from "next-themes";
import { useColorPresetName } from "@/hooks/use-theme-color";
import { updateThemeColor } from "utils/update-theme-color";
import { presetDark, presetLight } from "@/config/color-presets";
// import { Button, Drawer, Text } from "rizzui";

function HeaderMenuRight() {
  return (
    <div className=" ms-auto grid shrink-0 grid-cols-1 justify-end items-center gap-2 text-gray-700 xs:gap-3 xl:gap-4">
      <ProfileMenu />
    </div>
  );
}

export default function Header() {
  const isMounted = useIsMounted();
  const windowScroll = useWindowScroll();
  return (
    <header
      className={cn(
        "sticky top-0 z-50 flex flex-col  justify-center  items-center bg-gray-0/80 px-4 py-2 backdrop-blur-xl dark:bg-gray-50/50 md:px-5 lg:px-6 2xl:py-5 3xl:px-8 4xl:px-10",
        ((isMounted && windowScroll.y) as number) > 2 ? "card-shadow" : ""
      )}
    >
      <article className="w-full flex justify-between ">
        <MobileMenuLeft />
        <HeaderMenuRight />
      </article>
    </header>
  );
}

const MobileMenuLeft = () => {
  return (
    <>
      <section className="flex items-center md:hidden gap-4 py-2 xl:hidden">
        <Button
          as="button"
          type="button"
          className="bg-transparent p-0 rounded-lg text-black"
          onClick={() => {}}
        >
          <Menu size={34} />
        </Button>
        <Link href={"/"} aria-label="Site Logo">
          <Logo className="w-full me-4 h-7 shrink-0 lg:me-5 " />
        </Link>
      </section>
      {/* 
      <Drawer
        isOpen={drawerSate.isOpen}
        onClose={() =>
          setDrawerState((prevState) => ({
            ...prevState,
            isOpen: false,
          }))
        }
      >
        <div className="py-4 px-5">Default Drawer</div>
      </Drawer> */}
      {/* 
      <Modal
        isOpen={drawerSate.isOpen}
        onClose={() =>
          setDrawerState((prevState) => ({
            ...prevState,
            isOpen: false,
          }))
        }
        customSize="1080px"
      ></Modal> */}
    </>
  );
};
