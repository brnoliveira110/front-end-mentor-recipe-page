import Image from "next/image";
import { Young_Serif, Outfit } from "next/font/google";
import HeroMobile from "@/public/images/hero-mobile.png";
import { twMerge } from "tailwind-merge";
import { Title } from "./ui/title";
import { Text } from "./ui/text";
import { Label } from "./ui/label";
import { Divider } from "./ui/divider";
import { NutritionItem } from "./ui/recipePage/nutritionItem";
import { recipeValues } from "./data/recipeValues";
import { recipeItems } from "./data/recipeItems";
import { recipeDescription } from "./data/recipeDescription";

const youngSerif = Young_Serif({ subsets: ["latin"], weight: "400" });
const outfitSemiBold = Outfit({ subsets: ["latin"], weight: "600" });

export default function Home() {
  return (
    <>
      <Image
        src={HeroMobile}
        alt="Prato de refeição"
        width={375}
        height={171}
        className="w-full"
      />

      <section className="space-y-8 my-10 mx-8">
        <div className="space-y-6">
          <h1
            className={twMerge(
              "text-[36px] leading-none tracking-normal text-stone-900",
              youngSerif.className
            )}
          >
            Simple Omelette Recipe
          </h1>
          <Text>
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </Text>
        </div>

        <div className="bg-rose-50 p-6 rounded-[12px] space-y-4">
          <h3
            className={twMerge(
              "text-rose-800 text-[20px] leading-none tracking-normal",
              outfitSemiBold.className
            )}
          >
            Preparation time
          </h3>
          <ul className="list-disc px-6 text-rose-800 space-y-2">
            {recipeValues.map(({ label, value }) => (
              <li key={label}>
                <Text>
                  <Label>{label}:</Label> {value}
                </Text>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <Title>Ingredients</Title>
          <ul className="list-disc space-y-2 px-6 text-rose-800">
            {recipeItems.map((item) => (
              <li key={item}>
                <Text>{item}</Text>
              </li>
            ))}
          </ul>
        </div>

        <Divider />

        <div className="space-y-6">
          <Title>Instructions</Title>
          <ul className="list-decimal px-6 space-y-2 text-rose-800">
            {recipeDescription.map(({ title, desc }, index) => (
              <li key={index}>
                <Text>
                  <Label>{title}:</Label> {desc}
                </Text>
              </li>
            ))}
          </ul>
        </div>

        <Divider />

        <div className="space-y-6">
          <Title>Nutrition</Title>
          <Text>
            The table below shows nutritional values per serving without the
            additional fillings.
          </Text>
          <div className="space-y-2">
            <NutritionItem label="Calories" value="277kcal" />
            <NutritionItem label="Carbs" value="0g" />
            <NutritionItem label="Protein" value="20g" />
            <NutritionItem label="Fat" value="22g" />
          </div>
        </div>
      </section>
    </>
  );
}
