import { routes } from "@/config/routes";
import { FaUserMd } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";

//create diffrent sidebar menu items based on the user role
/*
Example for admin menu items with sub menu items
 {
    name: "Profile",
    href: "#",
    icon: <MdOutlinePayment />,
    dropdownItems: [
      {
        name: "Change Password",
        href: routes.admin.changePassword,
      },
    ],
  },

*/

export const adminMenuItems = [
  {
    name: "Admin Menu",
  },
  {
    name: "Dashboard",
    href: routes.admin.dashboard,
    icon: <MdOutlineDashboard />,
  },
  {
    name: "Users",
    href: routes.admin.dashboard,
    icon: <FaUserMd />,
    dropdownItems: [
      {
        name: "List",
        href: routes.admin.users,
      },
      {
        name: "List",
        href: routes.admin.users + "s",
      },
      {
        name: "List",
        href: routes.admin.users + "s",
      },
    ],
  },
];
