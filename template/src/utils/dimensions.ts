import { Dimensions, PixelRatio, Platform, NativeModules } from "react-native";
const screenWidth = Dimensions.get("window").width;
const Width = (widthPercent: any) => {
  // Convert string input to decimal number
  const elemWidth = parseFloat(widthPercent);
  let Pixel = PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
  return parseFloat(Pixel.toFixed(2));
};
const Height = (heightPercent: any) => {
  const screenHeight = Dimensions.get("window").height;
  // Convert string input to decimal number
  const elemHeight = parseFloat(heightPercent);
  let Pixel = PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
  return parseFloat(Pixel.toFixed(2));
};
const FontSize = (size: any) => {
  return (parseInt(size) * screenWidth * (1.6 - 0.001 * screenWidth)) / 400;
};
const ScreenWidth = Dimensions.get("window").width;
const ScreenHeight = Dimensions.get("window").height;
export {
  Width as wp,
  Height as hp,
  Width,
  Height,
  FontSize,
  ScreenHeight,
  ScreenWidth
};
