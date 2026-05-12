import AdminSidebar from '@/components/admin/Sidebar';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-bg-primary text-white">
      <AdminSidebar />
      <main className="pl-[280px]">
        {children}
      </main>
    </div>
  );
}
