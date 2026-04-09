// components/layout/AppSidebar.tsx
// components/layout/AppSidebar.tsx
"use client";

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarRail,
    SidebarSeparator,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import {
    Home,
    LayoutDashboard,
    GraduationCap,
    Shield,
    AlertTriangle,
    BookOpen,
    Settings,
    LogOut,
    HelpCircle,
    Bell,
    User
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Main Navigation Items
const mainNavItems = [
    {
        title: "Home",
        href: "/",
        icon: Home
    },
    {
        title: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard
    },
    {
        title: "Learn",
        href: "/learn",
        icon: BookOpen
    },
    {
        title: "Quiz",
        href: "/quiz",
        icon: GraduationCap
    },
    {
        title: "Safety Tools",
        href: "/safety",
        icon: Shield
    },
    {
        title: "Report",
        href: "/report",
        icon: AlertTriangle
    }
];

// Settings Navigation Items
const settingsNavItems = [
    {
        title: "Account Settings",
        href: "/settings/account",
        icon: User
    },
    {
        title: "Notifications",
        href: "/settings/notifications",
        icon: Bell
    },
    {
        title: "Privacy & Security",
        href: "/settings/privacy",
        icon: Shield
    },
    {
        title: "Help & Support",
        href: "/settings/help",
        icon: HelpCircle
    },
    {
        title: "General Settings",
        href: "/settings/general",
        icon: Settings
    }
];

export function AppSidebar() {
    const pathname = usePathname();

    // Helper function to check if a link is active
    const isActive = (href: string) => {
        if (href === "/") {
            return pathname === href;
        }
        return pathname.startsWith(href);
    };

    return (
        <Sidebar>
            <SidebarHeader className="border-b px-4 py-6">
                <div className="flex items-center gap-2">
                    <Shield className="h-6 w-6 text-primary" />
                    <h2 className="text-xl font-bold">The Guardian Path</h2>
                </div>
                <p className="text-xs text-muted-foreground mt-1">Learn. Spot. Stay Safe.</p>
            </SidebarHeader>

            <SidebarContent>
                {/* Main Navigation Section */}
                <div className="px-2 py-2">
                    <h3 className="mb-2 px-2 text-xs font-semibold text-muted-foreground">
                        MAIN MENU
                    </h3>
                    <SidebarMenu>
                        {mainNavItems.map((item) => (
                            <SidebarMenuItem key={item.href}>
                                <SidebarMenuButton
                                    asChild
                                    isActive={isActive(item.href)}
                                    tooltip={item.title}
                                >
                                    <Link href={item.href} className="flex items-center gap-3">
                                        <item.icon className="h-5 w-5" />
                                        <span>{item.title}</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </div>

                <SidebarSeparator className="my-2" />

                {/* Settings Section */}
                <div className="px-2 py-2">
                    <h3 className="mb-2 px-2 text-xs font-semibold text-muted-foreground">
                        SETTINGS & SUPPORT
                    </h3>
                    <SidebarMenu>
                        {settingsNavItems.map((item) => (
                            <SidebarMenuItem key={item.href}>
                                <SidebarMenuButton
                                    asChild
                                    isActive={isActive(item.href)}
                                    tooltip={item.title}
                                >
                                    <Link href={item.href} className="flex items-center gap-3">
                                        <item.icon className="h-5 w-5" />
                                        <span>{item.title}</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </div>
            </SidebarContent>

            <SidebarFooter className="border-t p-4">
                <div className="space-y-4">
                    {/* User Profile Section */}
                    <div className="flex items-center gap-3">
                        <Avatar>
                            <AvatarImage src="/avatars/ramesh.jpg" />
                            <AvatarFallback>RK</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium truncate">Ramesh Kumar</p>
                            <p className="text-xs text-muted-foreground">Guardian Trainee</p>
                        </div>
                    </div>

                    {/* Progress Section */}
                    <div className="space-y-2">
                        <div className="flex justify-between text-xs">
                            <span>Level 2</span>
                            <span>60% Complete</span>
                        </div>
                        <Progress value={60} className="h-2" />
                        <p className="text-xs text-muted-foreground">
                            Progress to Guardian: 3 of 5 modules
                        </p>
                    </div>

                    {/* Sign Out Button */}
                    <Button variant="outline" size="sm" className="w-full">
                        <LogOut className="h-4 w-4 mr-2" />
                        Sign Out
                    </Button>
                </div>
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
}