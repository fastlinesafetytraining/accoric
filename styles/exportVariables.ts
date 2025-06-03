"use client";
import getCssVariable from "@/libs/utils/getCssVariable";

// The Following Variables are used to get the computed styles of the root element
export const globalPrimaryColor = getCssVariable("--global-primary-color") as string;

export const globalSecondaryColor = getCssVariable("--global-secondary-color") as string;

export const globalAccentColor = getCssVariable("--global-accent-color") as string;

export const globalTertiaryColor = getCssVariable("--global-tertiary-color") as string;

export const globalLightGray = getCssVariable("--global-light-gray") as string;

export const globalOrange = getCssVariable("--global-orange") as string;

export const globalBlackToWhiteColor = getCssVariable("--global-black-to-white-color") as string;

export const globalWhiteToBlackColor = getCssVariable("--global-white-to-black-color") as string;

