import React from 'react';
import { StatusBar, StyleSheet, Animated } from 'react-native';
import { HEADER_HEIGHT_MAX } from '../../example/src/utils/constants';

const Header = (props: { scroll: Animated.Value; children: any }) => {
  const { scroll, children } = props;
  const opacity = scroll.interpolate({
    inputRange: [0, HEADER_HEIGHT_MAX * 0.75, HEADER_HEIGHT_MAX],
    outputRange: [0, 0, 1],
    extrapolate: 'clamp',
  });
  const opacity2 = scroll.interpolate({
    inputRange: [0, HEADER_HEIGHT_MAX * 0.75, HEADER_HEIGHT_MAX],
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
            opacity,
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
          { opacity: opacity2, backgroundColor: 'transparent' },
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
    zIndex: 100,
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

export default Header;
