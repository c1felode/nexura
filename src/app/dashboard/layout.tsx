import { Header, SideBar } from "@/components";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
    <Header className="py-4"/>

    <div className="flex max-h-screen h-screen">
        <div className="relative z-10 w-[25%] h-full overflow-y-auto shrink-0">
            <SideBar />
        </div>
        <div className="relative z-0 w-[75%] h-full overflow-hidden">
            {children}
        </div>
    </div>
    </>
  );
}