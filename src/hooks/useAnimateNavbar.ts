import type { Animated } from 'react-native';
import { HEADER_HEIGHT } from '../constants';

export const useAnimateNavbar = (
  scroll: Animated.Value,
  imageHeight: number
) => {
  const HEADER_HEIGHT_DIFFERENCE = imageHeight - HEADER_HEIGHT;
  const headerOpacity = scroll.interpolate({
    inputRange: [0, HEADER_HEIGHT_DIFFERENCE * 0.75, HEADER_HEIGHT_DIFFERENCE],
    outputRange: [0, 0, 1],
    extrapolate: 'clamp',
  });
  const overflowHeaderOpacity = scroll.interpolate({
    inputRange: [0, HEADER_HEIGHT_DIFFERENCE * 0.75, HEADER_HEIGHT_DIFFERENCE],
    outputRange: [1, 1, 0],
    extrapolate: 'clamp',
  });

  return [headerOpacity, overflowHeaderOpacity];
};
