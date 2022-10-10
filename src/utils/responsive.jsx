// packages
import { Dimensions, PixelRatio } from "react-native";

// Retrieve initial screen's width
let screenWidth = Dimensions.get("window").width;

// Retrieve initial screen's height
let screenHeight = Dimensions.get("window").height;

const widthDP = (widthPercent) => {
  const elemWidth =
    typeof widthPercent === "number" ? widthPercent : parseFloat(widthPercent);

  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};

const heightDP = (heightPercent) => {
  const elemHeight =
    typeof heightPercent === "number"
      ? heightPercent
      : parseFloat(heightPercent);

  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

export { widthDP, heightDP };
