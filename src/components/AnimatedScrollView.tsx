import {
  Animated,
  ImageSourcePropType,
  ScrollViewProps,
  StyleSheet,
  View,
} from 'react-native';
import React, { useRef } from 'react';
import { HEADER_HEIGHT_MAX } from '../utils/constants';
import Header from './Header';

type Props = {
  HeaderComponent?: JSX.Element;
  imgSource?: ImageSourcePropType;
} & ScrollViewProps;
export const AnimatedScrollView = ({
  HeaderComponent,
  imgSource,
  children,
  ...props
}: Props) => {
  const scroll = useRef(new Animated.Value(0)).current;
  const scale = scroll.interpolate({
    inputRange: [-HEADER_HEIGHT_MAX, 0, HEADER_HEIGHT_MAX],
    outputRange: [2, 1, 0.8],
    extrapolate: 'clamp',
  });
  const translateY = scroll.interpolate({
    inputRange: [-HEADER_HEIGHT_MAX, 0, HEADER_HEIGHT_MAX],
    outputRange: [-HEADER_HEIGHT_MAX * 0.5, 0, HEADER_HEIGHT_MAX * 0.7],
    extrapolate: 'clamp',
  });
  return (
    <>
      <Header scroll={scroll}>{HeaderComponent}</Header>
      <Animated.ScrollView
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scroll } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
        {...props}
      >
        <View style={styles.imgContainer}>
          <Animated.Image
            source={imgSource}
            style={[styles.img, { transform: [{ scale }, { translateY }] }]}
          />
        </View>
        {children}
      </Animated.ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  imgContainer: {
    marginTop: -HEADER_HEIGHT_MAX * 3,
    paddingTop: HEADER_HEIGHT_MAX * 3,
    alignItems: 'center',
    overflow: 'hidden',
  },
  img: {
    height: HEADER_HEIGHT_MAX,
  },
});
