import { twMerge } from "tailwind-merge";
import { Young_Serif } from "next/font/google";

const youngSerif = Young_Serif({ subsets: ["latin"], weight: "400" });

export const Title = ({ children }: { children: React.ReactNode }) => (
  <h3
    className={twMerge(
      "text-brown-800 text-[32px] leading-none tracking-normal",
      youngSerif.className
    )}
  >
    {children}
  </h3>
);
