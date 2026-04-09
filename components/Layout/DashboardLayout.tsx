// components/layout/DashboardLayout.tsx
// components/layout/DashboardLayout.tsx
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AppSidebar } from "./AppSidebar";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <TooltipProvider>  {/* Add this wrapper */}
            <SidebarProvider>
                <div className="flex min-h-screen w-full">
                    <AppSidebar />
                    <main className="flex-1 overflow-x-hidden">
                        <div className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
                            <div className="flex h-16 items-center gap-4 px-6">
                                <SidebarTrigger />
                                <h1 className="text-lg font-semibold">The Guardian Path</h1>
                            </div>
                        </div>
                        <div className="p-6">{children}</div>
                    </main>
                </div>
            </SidebarProvider>
        </TooltipProvider>
    );
}