import React from 'react';
import { StatusBar, StyleSheet, Animated } from 'react-native';
import { useAnimateNavbar } from '../hooks/useAnimateNavbar';
import type { AnimatedHeaderProps } from '../types';

const AnimatedHeader = ({
  scroll,
  children,
  imageHeight,
}: AnimatedHeaderProps) => {
  const [headerOpacity, overflowHeaderOpacity] = useAnimateNavbar(
    scroll,
    imageHeight
  );

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
    position: 'absolute',
    elevation: 2,
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
