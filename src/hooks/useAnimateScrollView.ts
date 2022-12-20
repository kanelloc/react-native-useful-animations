import { useRef } from 'react';
import { Animated } from 'react-native';

export const useAnimateScrollView = (imageHeight: number) => {
  const scroll = useRef(new Animated.Value(0)).current;

  const scale = scroll.interpolate({
    inputRange: [-imageHeight, 0, imageHeight],
    outputRange: [2, 1, 0.9],
    extrapolate: 'clamp',
  });

  const translateY = scroll.interpolate({
    inputRange: [-imageHeight, 0, imageHeight],
    outputRange: [-imageHeight * 0.5, 0, imageHeight * 0.5],
    extrapolate: 'clamp',
  });

  const onScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scroll } } }],
    { useNativeDriver: true }
  );

  return [scroll, onScroll, scale, translateY] as const;
};
