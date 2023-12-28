
export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden bor border-solid border-2">
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12 border-solid border-2">{children}</div>
    </div>
  );
}