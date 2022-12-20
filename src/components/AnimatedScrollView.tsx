import { Animated, StyleSheet, View } from 'react-native';
import React, { useRef } from 'react';
import { IMG_HEADER_HEIGHT } from '../constants';
import AnimatedHeader from './AnimatedHeader';
import type { AnimatedScrollViewProps } from '../types';

export const AnimatedScrollView = ({
  HeaderComponent,
  headerImgHeight,
  imgSource,
  children,
  ...props
}: AnimatedScrollViewProps) => {
  const imageHeight = headerImgHeight || IMG_HEADER_HEIGHT;
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
  return (
    <>
      <AnimatedHeader scroll={scroll} imageHeight={imageHeight}>
        {HeaderComponent}
      </AnimatedHeader>
      <Animated.ScrollView
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scroll } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
        {...props}
      >
        <View
          style={[
            styles.imgContainer,
            {
              marginTop: -imageHeight * 4,
              paddingTop: imageHeight * 4,
            },
          ]}
        >
          <Animated.Image
            source={imgSource}
            style={[
              { height: imageHeight },
              { transform: [{ scale }, { translateY }] },
            ]}
          />
        </View>
        {children}
      </Animated.ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  imgContainer: {
    alignItems: 'center',
    overflow: 'hidden',
  },
});
