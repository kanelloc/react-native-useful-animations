import React from 'react';
import { StatusBar, StyleSheet, Animated } from 'react-native';
import { HEADER_HEIGHT } from '../constants';

type Props = {
  scroll: Animated.Value;
  children: any;
  imageHeight: number;
};
const AnimatedHeader = ({ scroll, children, imageHeight }: Props) => {
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

  return (
    <>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor="transparent"
        translucent
      />
      <Animated.View
        style={[
          styles.container,
          {
            opacity: headerOpacity,
            borderBottomWidth: StyleSheet.hairlineWidth,
            borderBottomColor: '#a4a4a4',
          },
        ]}
      >
        {children}
      </Animated.View>
      <Animated.View
        style={[
          styles.container,
          { opacity: overflowHeaderOpacity, backgroundColor: 'transparent' },
        ]}
      >
        {children}
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50 - 16,
    zIndex: 10,
    elevation: 1,
    position: 'absolute',
    top: 0,
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    paddingVertical: 16,
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000000',
  },
});

export default AnimatedHeader;
