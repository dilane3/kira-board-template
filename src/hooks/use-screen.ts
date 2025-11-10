import { useEffect, useState } from "react";

export const useScreen = () => {
	const [screen, setScreen] = useState<"xs" | "sm" | "md" | "lg" | "xl">("lg");
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 640) {
				setScreen("xs");
				setIsMobile(true);
			} else if (window.innerWidth < 768) {
				setScreen("sm");
				setIsMobile(true);
			} else if (window.innerWidth < 1024) {
				setScreen("md");
				setIsMobile(false);
			} else if (window.innerWidth < 1280) {
				setScreen("lg");
				setIsMobile(false);
			} else {
				setScreen("xl");
				setIsMobile(false);
			}
		};

		handleResize();

		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return { screen, isMobile };
};
