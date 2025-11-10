import { Outlet, LayoutComponent } from "rasengan";
import Sidebar from "@/components/common/layout/sidebar";
import { useTheme } from "@rasenganjs/theme";
import useNavigationStore from "@/store/navigation";
import { cn } from "@/lib/utils";
import { useScreen } from "@/hooks/use-screen";

const RootLayout: LayoutComponent = () => {
	const { isDark } = useTheme();
	const {
		sidebar: { opened },
	} = useNavigationStore();
	const { isMobile } = useScreen();

	return (
		<div className={isDark ? "dark" : ""}>
			<div className='w-screen h-screen flex bg-muted dark:bg-muted font-host-grotesk'>
				<div
					className={cn(
						"relative w-[256px] h-screen transition-all",
						!opened || isMobile ? "-translate-x-full" : ""
					)}
				>
					<Sidebar />
				</div>

				<div
					className={cn(
						"h-screen lg:p-4 transition-all",
						!opened || isMobile ? "w-full" : "w-[calc(100%-256px)] pl-0"
					)}
				>
					<main className='w-full h-full rounded-lg bg-background border border-border overflow-auto'>
						<Outlet />
					</main>
				</div>
			</div>
		</div>
	);
};

export default RootLayout;
