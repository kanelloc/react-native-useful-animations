import { Animated, StyleSheet, View } from 'react-native';
import React from 'react';
import { IMG_HEADER_HEIGHT } from '../constants';
import AnimatedHeader from './AnimatedHeader';
import type { AnimatedScrollViewProps } from '../types';
import { useAnimateScrollView } from '../hooks/useAnimateScrollView';

export const AnimatedScrollView = ({
  HeaderComponent,
  headerImgHeight,
  imgSource,
  children,
  ...props
}: AnimatedScrollViewProps) => {
  const imageHeight = headerImgHeight || IMG_HEADER_HEIGHT;
  const [scroll, onScroll, scale, translateY] =
    useAnimateScrollView(imageHeight);

  return (
    <>
      <AnimatedHeader scroll={scroll} imageHeight={imageHeight}>
        {HeaderComponent}
      </AnimatedHeader>
      <Animated.ScrollView
        onScroll={onScroll}
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
