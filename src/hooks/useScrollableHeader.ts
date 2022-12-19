import { useRef } from 'react';
import { Animated } from 'react-native';
import { HEADER_HEIGHT_DISTANCE } from '../utils/constants';

export const useScrollableHeader = () => {
  let scrollOffsetY = useRef(new Animated.Value(0)).current;
  const onScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }],
    { useNativeDriver: false }
  );

  const headerTranslateY = scrollOffsetY.interpolate({
    inputRange: [0, HEADER_HEIGHT_DISTANCE],
    outputRange: [0, -HEADER_HEIGHT_DISTANCE],
    extrapolate: 'clamp',
  });

  const imageOpacity = scrollOffsetY.interpolate({
    inputRange: [0, HEADER_HEIGHT_DISTANCE * 0.7, HEADER_HEIGHT_DISTANCE],
    outputRange: [1, 1, 0],
    extrapolate: 'clamp',
  });

  const imageTranslateY = scrollOffsetY.interpolate({
    inputRange: [0, HEADER_HEIGHT_DISTANCE],
    outputRange: [0, HEADER_HEIGHT_DISTANCE - 80],
    extrapolate: 'clamp',
  });

  const titleScale = scrollOffsetY.interpolate({
    inputRange: [0, HEADER_HEIGHT_DISTANCE * 0.5, HEADER_HEIGHT_DISTANCE],
    outputRange: [1, 1, 0.9],
    extrapolate: 'clamp',
  });
  const titleTranslateY = scrollOffsetY.interpolate({
    inputRange: [0, HEADER_HEIGHT_DISTANCE * 0.5, HEADER_HEIGHT_DISTANCE],
    outputRange: [0, HEADER_HEIGHT_DISTANCE * 0.5, HEADER_HEIGHT_DISTANCE - 8],
    extrapolate: 'clamp',
  });

  return [
    onScroll,
    headerTranslateY,
    imageOpacity,
    imageTranslateY,
    titleTranslateY,
    titleScale,
  ] as const;
};
