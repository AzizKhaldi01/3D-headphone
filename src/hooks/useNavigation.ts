import { useRouter, usePathname } from "next/navigation";
import { scrollToSection } from "../lib/utils";

export const useNavigation = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (item: string) => {
    const lowercaseItem = item.toLowerCase();
    if (pathname !== "/") {
      router.push("/");
      setTimeout(() => scrollToSection(lowercaseItem), 100);
    } else {
      scrollToSection(lowercaseItem);
    }
  };

  return { handleNavigation };
};
