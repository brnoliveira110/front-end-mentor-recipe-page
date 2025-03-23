import { twMerge } from "tailwind-merge";
import { Outfit } from "next/font/google";

const outfitSemiBold = Outfit({ subsets: ["latin"], weight: "600" });

export const Label = ({ children }: { children: React.ReactNode }) => (
  <span
    className={twMerge("text-[16px] leading-[150%]", outfitSemiBold.className)}
  >
    {children}
  </span>
);
