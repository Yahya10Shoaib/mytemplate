import { Platform } from "react-native";
import { isTablet } from "react-native-device-info";

export const getDateText = (currentPeriodType) => {
  switch (currentPeriodType) {
    case 'day':
      return 'D';
    case 'week':
      return 'W';
    case 'month':
      return 'M';
    case 'year':
      return 'Y';
    case 'custom':
      return 'C';
    default:
      return 'D';
  }
};

export const capitalizeWord = (string) => {
  var result = [];
  string &&
    string
      .split(' ')
      .map((word, i) =>
        result.push(
          word?.charAt(0).toUpperCase() + word?.slice(1).toLowerCase()
        )
      );
  //console.log('final word', result.join(','));
  return result.join(' ');
};

export const formatNumberComma = (inputNumber) => {
  let formattedNumber = Number(inputNumber)
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, '$&,');
  //console.log("formatted number", formattedNumber);
  let splitArray = formattedNumber.split('.');
  //console.log("split", splitArray);
  if (splitArray.length > 1) {
    formattedNumber = splitArray[0];
  }
  return formattedNumber;
};

export const isTab = ()=> isTablet() || Platform.isPad

export function removeDuplicatesFromArray(arr) {
  return Array.from(new Set(arr));
}