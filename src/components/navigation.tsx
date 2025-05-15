'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
	{
		name: "Dashboard",
		href: "/cppa/dashboard",
		icon: "📊",
	},
	{
		name: "Market Signals",
		href: "/cppa/market-signals",
		icon: "📶",
	},
	{
		name: "Competitor Analysis",
		href: "/cppa/competitor-analysis",
		icon: "🔍",
	},
	{
		name: "Positioning",
		href: "/cppa/positioning",
		icon: "🎯",
	},
	{
		name: "Campaign Management",
		href: "/cppa/campaigns",
		icon: "📈",
	},
	{
		name: "Settings",
		href: "/cppa/settings",
		icon: "⚙️",
	},
];

export function Navigation() {
	const pathname = usePathname();

	return (
		<div className="group w-14 hover:w-64 md:w-64 bg-background h-full border-r transition-all duration-300 overflow-hidden">
			<nav className="py-6 px-2 md:px-4 h-full overflow-y-auto">
				<div className="flex flex-col gap-1">
					{navItems.map((item, index) => {
						const isActive =
							pathname === item.href ||
							pathname?.startsWith(`${item.href}/`);

						return (
							<Link
								key={index}
								href={item.href}
								className={cn(
									"flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all",
									isActive
										? "bg-primary/10 text-primary"
										: "hover:bg-accent hover:text-accent-foreground"
								)}
							>
								<span className="text-lg">{item.icon}</span>
								<span className="truncate opacity-100 group-hover:opacity-100 md:opacity-100">
									{item.name}
								</span>
							</Link>
						);
					})}
				</div>
			</nav>
		</div>
	);
}