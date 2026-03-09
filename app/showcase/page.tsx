import type { Metadata } from "next";
import ShowcaseHero from "@/components/showcase/ShowcaseHero";
import BentoGrid from "@/components/showcase/BentoGrid";
import CTA from "@/components/shared/CTA";
import "@/styles/showcase.css";

export const metadata: Metadata = {
  title: "The Work | Perry Jiggy",
  description:
    "Browse the full portfolio of Perry Jiggy — portraits, editorial, fashion, and atmosphere.",
};

export default function ShowcasePage() {
  return (
    <>
      <ShowcaseHero />
      <BentoGrid />
      <CTA />
    </>
  );
}
