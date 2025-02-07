export default function StaticLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="bg-gray-50 min-h-screen">{children}</div>;
}
