import type { ComponentType, ReactNode, SVGProps } from "react";

export interface NavLinkType {
  name: string;
  link: string;
}

export interface WordType {
  text: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
}

export interface CounterItemType {
  value: number;
  suffix: string;
  label: string;
}

export interface LogoIconType {
  imgPath: string;
}

export type ProjectType = {
    id: number;
    title: string;
    summary: string;
    highlights: string[];
    skills: string[];
    image: string;
    liveUrl: string;
};

export interface AbilityType {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  desc: string;
}

export interface ExperienceCardType {
  logoPath: string;
  title: string;
  date: string;
  achievements: string[];
};

export interface ExpLogoType {
  name: string;
  imgPath: string;
}

export interface TestimonialType {
    name: string;
    location: string;
    review: string;
    imgPath: string;
    source: {
      url: string;
      Icon: ReactNode;
      desc: string;
    }
    hasStars: boolean;
}

export interface SocialImgType {
  name: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  url: string;
}