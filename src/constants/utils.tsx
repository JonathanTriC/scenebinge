import {Dimensions} from 'react-native';

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;
export const screenHeight = Dimensions.get('screen').height;
export const screenWidth = Dimensions.get('screen').width;

export const minutesToHHMM = (minutes: number) => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  const formattedHours = hours.toString();
  const formattedMinutes =
    remainingMinutes < 10
      ? '0' + remainingMinutes
      : remainingMinutes.toString();

  return `${formattedHours}h ${formattedMinutes}m`;
};
