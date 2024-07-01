import CategorySidebar from "@/src/component/Sidebar/CategorySidebar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-row gap-4 mt-4">
      <CategorySidebar />
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}
