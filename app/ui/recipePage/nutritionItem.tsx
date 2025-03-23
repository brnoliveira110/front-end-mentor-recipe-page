import { twMerge } from "tailwind-merge";
import { Outfit } from "next/font/google";
import { Divider } from "../divider";

const outfitRegular = Outfit({ subsets: ["latin"], weight: "400" });
const outfitSemiBold = Outfit({ subsets: ["latin"], weight: "600" });

export const NutritionItem = ({
  label,
  value,
}: {
  label: string;
  value: string;
}) => (
  <div className="space-y-2">
    <div
      className={twMerge(
        "ml-4 text-stone-600 w-[211px] flex items-start content-start",
        outfitRegular.className
      )}
    >
      <span className="text-[16px] leading-[150%] min-w-40">{label}</span>
      <span className={twMerge("text-brown-800", outfitSemiBold.className)}>
        {value}
      </span>
    </div>
    <Divider />
  </div>
);
