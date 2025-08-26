import AdminLayoutComponent from "@/modules/forum/admin/common/layouts/AdminLayout";
import React from "react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return <AdminLayoutComponent>{children}</AdminLayoutComponent>;
};

export default AdminLayout;
