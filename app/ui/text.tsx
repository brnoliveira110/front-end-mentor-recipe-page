import { twMerge } from "tailwind-merge";
import { Outfit } from "next/font/google";

const outfitRegular = Outfit({ subsets: ["latin"], weight: "400" });

export const Text = ({ children }: { children: React.ReactNode }) => (
  <p
    className={twMerge(
      "text-[16px] leading-[150%] text-stone-600",
      outfitRegular.className
    )}
  >
    {children}
  </p>
);
