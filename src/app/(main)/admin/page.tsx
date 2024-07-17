import { metaObject } from "@/config/site.config";
import PageHeader from "../../../../utils/page-header";
import StatCards from "@/app/components/organism/StatCards";

export const metadata = {
  ...metaObject("Dashboard"),
};

const pageHeader = {
  title: "Admin Dashboard",
  breadcrumb: [
    {
      name: "Admin",
    },
    {
      name: "Dashboard",
    },
  ],
};

const AdminDashboard = () => {
  return (
    <main>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb} />

      <article className="@container">
        <section className="grid grid-cols-12 gap-6 3xl:gap-8 py-6 border-t">
          <StatCards className="col-span-full  md:grid-cols-3 xl:grid-cols-4" />
        </section>
      </article>
    </main>
  );
};

export default AdminDashboard;
