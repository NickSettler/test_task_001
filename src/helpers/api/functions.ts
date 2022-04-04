import { Compass16WindRose, CompassSideAbbr } from "./types";

export const compassSide = (sideAbbr: CompassSideAbbr | string) => {
  switch (sideAbbr) {
    case "N":
      return "North";
    case "E":
      return "East";
    case "S":
      return "South";
    case "W":
      return "West";
    default:
      return "";
  }
};

export const windDirection = (direction: Compass16WindRose): string => {
  const compassSides = direction.split("");
  const sides = compassSides.map(compassSide);
  return sides.join("-");
};
