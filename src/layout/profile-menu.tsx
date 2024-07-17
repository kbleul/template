"use client";

import { Avatar } from "../../src/app/components/ui/avatar";
import { Button } from "../../src/app/components/ui/button";
import { Popover } from "../../src/app/components/ui/popover";
import { Title, Text } from "../../src/app/components/ui/text";
import { routes } from "@/config/routes";
import { cn } from "@/lib/utils";
import { signOut, useSession } from "next-auth/react";

import { Dropdown } from "rizzui";

export default function ProfileMenu() {
  const { data: session } = useSession();
  return (
    <Dropdown placement="bottom-end" className="">
      <Dropdown.Trigger className="flex justify-end ml-2 items-center">
        <Avatar
          name={
            session?.user.user.first_name + " " + session?.user.user.last_name
          }
          initials={
            session?.user.user.first_name[0].toUpperCase() +
            " " +
            session?.user.user.last_name[0].toUpperCase()
          }
          // src="https://randomuser.me/api/portraits/women/40.jpg"
          className="cursor-pointer w-[10rem]"
          size="lg"
        />

        {/* <Text>
          {session?.user.user.first_name.toUpperCase() +
            " " +
            session?.user.user.last_name.toUpperCase()}
        </Text> */}

        <div className="ml-2 text-left  flex-col gap-1 hidden xl:block">
          <Text className="text-gray-900 font-medium leading-tight">
            {session?.user.user.first_name.toUpperCase() +
              " " +
              session?.user.user.last_name.toUpperCase()}
          </Text>
          <Text>{session?.user.user?.phone}</Text>
        </div>
      </Dropdown.Trigger>
      <Dropdown.Menu className="w-56 divide-y text-gray-600 bg-white">
        <Dropdown.Item className="hover:bg-transparent">
          <Avatar
            name={
              session?.user.user.first_name + " " + session?.user.user.last_name
            }
            initials={
              session?.user.user.first_name[0] +
              " " +
              session?.user.user.last_name[0]
            }
          />
          <span className="ml-2 text-left">
            <Text className="text-gray-900 font-medium leading-tight">
              {session?.user.user.first_name +
                " " +
                session?.user.user.last_name}
            </Text>
            <Text>{session?.user.user?.email}</Text>
          </span>
        </Dropdown.Item>
        <div className="mt-3 mb-2 pt-2">
          <Dropdown.Item className="hover:bg-gray-900 hover:text-gray-50">
            Account Settings
          </Dropdown.Item>
          <Dropdown.Item className="hover:bg-gray-900 hover:text-gray-50">
            Support
          </Dropdown.Item>
          <Dropdown.Item className="hover:bg-gray-900 hover:text-gray-50">
            License
          </Dropdown.Item>
        </div>
        <div
          className="mt-2 pt-2 "
          style={{
            borderTop: "1px solid #c4c4c0",
          }}
        >
          <Dropdown.Item className="hover:bg-gray-900 hover:text-gray-50">
            <Button
              className="h-auto w-full justify-start p-0 font-medium text-gray-700 outline-none focus-within:text-gray-600 hover:text-gray-900 focus-visible:ring-0"
              variant="text"
              onClick={() => signOut({ callbackUrl: "http://localhost:5000/" })}
            >
              Sign Out
            </Button>
          </Dropdown.Item>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
}
