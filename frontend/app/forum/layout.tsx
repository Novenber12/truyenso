import ForumLayoutComponent from "@/modules/forum/client/common/layouts/ForumLayout";

export default function ForumLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ForumLayoutComponent>
      {children}
    </ForumLayoutComponent>
  );
}
