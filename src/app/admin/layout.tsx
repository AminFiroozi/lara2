"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
	LayoutDashboard,
	Package,
	Shapes,
	LogOut,
	ChevronLeft,
} from "lucide-react";
import {
	SidebarProvider,
	Sidebar,
	SidebarHeader,
	SidebarContent,
	SidebarFooter,
	SidebarMenu,
	SidebarMenuItem,
	SidebarMenuButton,
	SidebarInset,
} from "@/components/ui/sidebar";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const ADMIN_LINKS = [
	{ href: "/admin", label: "داشبورد", icon: LayoutDashboard },
	{ href: "/admin/products", label: "محصولات", icon: Package },
	{ href: "/admin/categories", label: "دسته‌بندی‌ها", icon: Shapes },
];

export default function AdminLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathname = usePathname();

	if (pathname === "/admin/login") {
		return <>{children}</>;
	}

	return (
		<SidebarProvider>
			<div className="flex w-full min-h-screen">
				<Sidebar side="right">
					<SidebarHeader>
						<Logo />
					</SidebarHeader>
					<SidebarContent>
						<SidebarMenu>
							{ADMIN_LINKS.map((link) => (
								<SidebarMenuItem key={link.href}>
									<SidebarMenuButton
										asChild
										isActive={pathname === link.href}
										tooltip={{
											children: link.label,
											side: "left",
										}}
									>
										<Link href={link.href}>
											<link.icon />
											<span>{link.label}</span>
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarContent>
					<SidebarFooter className="gap-0">
						<Separator className="mb-2" />
						<SidebarMenuItem>
							<SidebarMenuButton asChild>
								<Link href="/">
									<ChevronLeft />
									<span>بازگشت به سایت</span>
								</Link>
							</SidebarMenuButton>
						</SidebarMenuItem>
						<SidebarMenuItem>
							<SidebarMenuButton asChild>
								<Link href="/admin/login">
									<LogOut />
									<span>خروج</span>
								</Link>
							</SidebarMenuButton>
						</SidebarMenuItem>
					</SidebarFooter>
				</Sidebar>
				<SidebarInset className="w-full">
					<main className="p-4 sm:p-6 lg:p-8 w-full">{children}</main>
				</SidebarInset>
			</div>
		</SidebarProvider>
	);
}
