"use client";

import Link from "next/link";
import {
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  ReactPortal,
} from "react";
import { usePathname } from "next/navigation";
import { Title } from "../app/components/ui/text";

import cn from "../../utils/class-names";
import { PiCaretDownBold } from "react-icons/pi";

import { signOut, useSession } from "next-auth/react";

import { UrlObject } from "url";

import SimpleBar from "simplebar-react";
import { Collapse } from "../app/components/ui/collapse";
import { adminMenuItems } from "./menu-items";
import Logo from "../app/components/ui/logo";

export default function Sidebar({ className }: { className?: string }) {
  const { data: session } = useSession();
  const pathname = usePathname();

  const determineMenuItems = () => {
    const roles = [{ name: "Admin" }];
    if (!roles || roles.length === 0) {
      signOut();
      return [];
    }

    const roleMenuItems: any = {
      Admin: adminMenuItems,
    };

    const sidenav = roles.reduce((acc: any[], role) => {
      const roleItems: any = roleMenuItems[role.name];
      if (roleItems) {
        acc.push(...roleItems);
      }
      return acc;
    }, []);
    return sidenav;
  };

  return (
    <article
      className={cn(
        " pt-4 fixed bottom-0 start-0 z-50 h-full w-[270px] border-e-2  bg-white  dark:bg-gray-100/50 2xl:w-72 py-10 ",
        className
      )}
    >
      <div
        className="z-40 bg-gray-0/10 px-6 pb-5 pt-5 dark:bg-gray-100/5 2xl:px-8 2xl:pt-6 mt-10"
        style={{
          marginTop: "1.5rem",
        }}
      >
        <Link href={"/"} aria-label="Site Logo">
          <Logo className="" />
        </Link>
      </div>

      {session && (
        <SimpleBar className="h-[calc(100%-80px)] mt-4 px-2">
          <div className="mt-4 pb-3 ">
            {determineMenuItems()?.map((item, index) => {
              const isActive = pathname === (item?.href as string);

              const pathnameExistInDropdowns: any =
                item?.dropdownItems &&
                item?.dropdownItems?.filter(
                  (dropdownItem: { href: string }) =>
                    dropdownItem.href === pathname
                );
              const isDropdownOpen = Boolean(pathnameExistInDropdowns?.length);

              return (
                <div
                  key={item.name + "-" + index}
                  className={
                    isDropdownOpen
                      ? "border border-[#EFEFEF] mx-2 2xl:mx-5 rounded-xl"
                      : "mx-2 2xl:mx-5"
                  }
                >
                  {item?.href ? (
                    <>
                      {item?.dropdownItems ? (
                        <Collapse
                          defaultOpen={isDropdownOpen}
                          header={({ open, toggle }) => (
                            <div
                              onClick={toggle}
                              className={cn(
                                "group relative mx-3 flex cursor-pointer items-center justify-between rounded-md px-3 py-2 font-medium lg:my-1 2xl:mx-5 2xl:my-2",
                                isDropdownOpen
                                  ? "before:top-2/5 text-primary before:absolute before:-start-3 before:block before:h-4/5 before:w-1 before:rounded-ee-md before:rounded-se-md before:bg-primary 2xl:before:-start-5"
                                  : "text-gray-700 transition-colors duration-200 hover:bg-gray-100 dark:text-gray-700/90 dark:hover:text-gray-700"
                              )}
                            >
                              <span className="flex items-center">
                                {item?.icon && (
                                  <span
                                    className={cn(
                                      "me-2 inline-flex h-5 w-5 items-center justify-center rounded-md [&>svg]:h-[19px] [&>svg]:w-[19px]",
                                      isDropdownOpen
                                        ? "text-primary"
                                        : "text-gray-800 dark:text-gray-500 dark:group-hover:text-gray-700"
                                    )}
                                  >
                                    {item?.icon}
                                  </span>
                                )}
                                {item.name}
                              </span>

                              <PiCaretDownBold
                                strokeWidth={3}
                                className={cn(
                                  "h-3.5 w-3.5 text-gray-500 transition-transform duration-200 ",
                                  open && "rotate-180"
                                )}
                              />
                            </div>
                          )}
                        >
                          <div
                            className="flex flex-col w-full "
                            style={{
                              gap: "4px",
                            }}
                          >
                            {item?.dropdownItems?.map(
                              (
                                dropdownItem: {
                                  href: string | UrlObject;
                                  name:
                                    | string
                                    | number
                                    | boolean
                                    | ReactElement<
                                        any,
                                        string | JSXElementConstructor<any>
                                      >
                                    | Iterable<ReactNode>
                                    | ReactPortal
                                    | null
                                    | undefined;
                                },
                                index: any
                              ) => {
                                const isChildActive =
                                  pathname === (dropdownItem?.href as string);

                                return (
                                  <Link
                                    href={dropdownItem?.href}
                                    key={dropdownItem?.name + index}
                                    className={cn(
                                      "mx-3.5 flex items-center gap-3 rounded-md px-3.5 py-2 font-medium capitalize last-of-type:mb-1 lg:last-of-type:mb-2 2xl:mx-5",
                                      isChildActive
                                        ? "text-white bg-gradient-to-r from-[#008579] to-[#00BA63]"
                                        : `text-gray-500 transition-colors duration-200  hover:text-gray-900 ${
                                            !isDropdownOpen && "border-b"
                                          } `
                                    )}
                                  >
                                    <p
                                      className={cn(
                                        "me-[18px] ms-1 inline-flex h-1 w-1 pl-6 mx-4 rounded-full bg-current transition-all duration-200",
                                        isChildActive
                                          ? "bg-primary ring-[1px] ring-primary"
                                          : "opacity-40"
                                      )}
                                      style={{
                                        marginLeft: "20px",
                                        backgroundColor: isChildActive
                                          ? "white"
                                          : "black",
                                      }}
                                    />{" "}
                                    <p
                                      className=""
                                      style={{ marginLeft: "4px" }}
                                    >
                                      {dropdownItem?.name}
                                    </p>
                                  </Link>
                                );
                              }
                            )}
                          </div>
                        </Collapse>
                      ) : (
                        <Link
                          href={item?.href}
                          className={cn(
                            "group relative mx-3 my-0.5 flex items-center rounded-md px-3 py-2 font-medium capitalize lg:my-1 2xl:mx-5 2xl:my-2",
                            isActive
                              ? "before:top-2/5 text-white bg-gradient-to-r from-[#008579] to-[#00BA63] before:absolute before:-start-3 before:block before:h-4/5 before:w-1 before:rounded-ee-md before:rounded-se-md before:bg-primary 2xl:before:-start-5"
                              : "text-gray-700 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-700/90"
                          )}
                        >
                          {item?.icon && (
                            <span
                              className={cn(
                                "me-2 inline-flex h-5 w-5 items-center justify-center rounded-md [&>svg]:h-[19px] [&>svg]:w-[19px]",
                                isActive
                                  ? "text-white "
                                  : "text-gray-800 dark:text-gray-500 dark:group-hover:text-gray-700"
                              )}
                            >
                              {item?.icon}
                            </span>
                          )}
                          {item.name}
                        </Link>
                      )}
                    </>
                  ) : (
                    <Title
                      as="h6"
                      className={cn(
                        "mb-2 truncate px-6 text-[11px] font-medium uppercase tracking-widest text-gray-500 dark:text-gray-500 2xl:px-8",
                        index !== 0 && "mt-6 3xl:mt-7"
                      )}
                    >
                      {item.name}
                    </Title>
                  )}
                </div>
              );
            })}
          </div>
        </SimpleBar>
      )}
    </article>
  );
}
