import Sidebar from "@/components/admin/dashbord/sidebar";
import Navbar from "@/components/admin/dashbord/nav";
import Cards from "@/components/admin/dashbord/cards";
import Header from "@/components/admin/dashbord/header";
// import Srr from "@/components/admin/dashbord/sidebrr";

import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Dashbord() {
  return (
    <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
      {/* <Navbar /> */}

      <Header />

      <Sidebar />
      {/* <Srr /> */}

      {/* <Cards /> */}
    </div>
  );
}
