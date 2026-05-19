import { memo } from "react";
import { ImmersiveHero } from "./ImmersiveHero";
import { Language } from "../data";

export const Hero = memo(({ lang }: { lang: Language }) => {
  return <ImmersiveHero lang={lang} />;
});
