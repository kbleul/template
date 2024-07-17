"use client";
import ControlledTable from "../../../components/organism/controlled-table";
import WidgetCard from "../../../components/organism/widget-card";
import { metaObject } from "@/config/site.config";
import PageHeader from "utils/page-header";
import * as ksdks from "./users-column-example";
import { HeaderCell } from "@/app/components/ui/table";
import { Text } from "../../../components/ui/text";
// import { getColumns } from "./users-column-example";

const pageHeader = {
  title: "Users",
  breadcrumb: [
    {
      name: "Users",
    },
    {
      name: "List",
    },
  ],
};

const dummyData = [
  {
    id: "001",
    name: "Kibrom Leul",
    city: "Addis Ababa",
    dob: "1990-01-01",
    type: "Admin",
  },
  {
    id: "002",
    name: "Mulu Tesfaye",
    city: "Mekelle",
    dob: "1988-05-12",
    type: "User",
  },
  {
    id: "003",
    name: "Bereket Haile",
    city: "Adama",
    dob: "1992-07-23",
    type: "Admin",
  },
  {
    id: "004",
    name: "Saron Alemayehu",
    city: "Gondar",
    dob: "1995-11-14",
    type: "User",
  },
  {
    id: "005",
    name: "Abebe Tadesse",
    city: "Hawassa",
    dob: "1989-03-08",
    type: "Admin",
  },
  {
    id: "006",
    name: "Hana Abate",
    city: "Dire Dawa",
    dob: "1993-09-11",
    type: "Admin",
  },
  {
    id: "001",
    name: "Kibrom Leul",
    city: "Addis Ababa",
    dob: "1990-01-01",
    type: "Admin",
  },
  {
    id: "002",
    name: "Mulu Tesfaye",
    city: "Mekelle",
    dob: "1988-05-12",
    type: "User",
  },
  {
    id: "003",
    name: "Bereket Haile",
    city: "Adama",
    dob: "1992-07-23",
    type: "Admin",
  },
  {
    id: "004",
    name: "Saron Alemayehu",
    city: "Gondar",
    dob: "1995-11-14",
    type: "User",
  },
  {
    id: "005",
    name: "Abebe Tadesse",
    city: "Hawassa",
    dob: "1989-03-08",
    type: "Admin",
  },
  {
    id: "006",
    name: "Hana Abate",
    city: "Dire Dawa",
    dob: "1993-09-11",
    type: "Admin",
  },
];

const Users = () => {
  console.log(ksdks.getColumns);
  return (
    <main>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb} />
      <WidgetCard
        title={"Users List"}
        className={"flex flex-col"}
        headerClassName="widget-card-header flex-col sm:flex-row [&>.ps-2]:ps-0 [&>.ps-2]:w-full sm:[&>.ps-2]:w-auto [&>.ps-2]:mt-3 sm:[&>.ps-2]:mt-0"
      >
        <div className={"table-wrapper flex-grow mt-4"}>
          <ControlledTable
            variant={"modern"}
            isLoading={false}
            showLoadingText={true}
            data={dummyData}
            scroll={{ x: 900 }}
            columns={[
              {
                title: <HeaderCell title="Title" />,
                dataIndex: "name",
                key: "name",
                width: 50,
                render: (value: string) => (
                  <Text className="font-medium text-gray-700">{value}</Text>
                ),
              },
              {
                title: <HeaderCell title="City" />,
                dataIndex: "city",
                key: "city",
                width: 50,
                render: (value: string) => (
                  <Text className="font-medium text-gray-700">{value}</Text>
                ),
              },
              {
                title: <HeaderCell title="DOB" />,
                dataIndex: "dob",
                key: "dob",
                width: 50,
                render: (value: string) => (
                  <Text className="font-medium text-gray-700">{value}</Text>
                ),
              },
              {
                title: <HeaderCell title="Type" />,
                dataIndex: "type",
                key: "type",
                width: 50,
                render: (value: string) => (
                  <Text className="font-medium text-gray-700">{value}</Text>
                ),
              },
            ]}
            className={
              "overflow-hidden rounded-md border border-gray-200 text-sm shadow-sm [&_.rc-table-placeholder_.rc-table-expanded-row-fixed>div]:h-60 [&_.rc-table-placeholder_.rc-table-expanded-row-fixed>div]:justify-center [&_.rc-table-row:last-child_td.rc-table-cell]:border-b-0 [&_thead.rc-table-thead]:border-t-0"
            }
          />
        </div>
      </WidgetCard>
    </main>
  );
};

export default Users;
