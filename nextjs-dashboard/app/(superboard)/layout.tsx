
export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className="flex flex-col h-screen w-screen md:flex-row md:overflow-hidden bor border-solid border-2">
      <div className="w-full flex-none md:w-64 border-solid border-2">
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12 border-solid border-2">{children}</div>
    </div>
  );
}