import {
  Animated,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import { HEADER_HEIGHT_MAX } from '../utils/constants';

type Props = {
  HeaderComponent?: React.ReactNode;

  headerImg: ImageSourcePropType;
  imageOpacity: Animated.AnimatedInterpolation<string | number>;
  headerTranslateY: Animated.AnimatedInterpolation<string | number>;
  imageTranslateY: Animated.AnimatedInterpolation<string | number>;
  titleTranslateY: Animated.AnimatedInterpolation<string | number>;
};
export const AnimatedHeader = ({
  headerImg,
  HeaderComponent,
  imageOpacity,
  headerTranslateY,
  imageTranslateY,
  titleTranslateY,
}: Props) => {
  return (
    <Animated.View
      style={[styles.header, { transform: [{ translateY: headerTranslateY }] }]}
    >
      <Animated.Image
        source={headerImg}
        style={[
          styles.img,
          {
            opacity: imageOpacity,
            transform: [{ translateY: imageTranslateY }],
          },
        ]}
      />
      <Animated.View
        style={[
          styles.topBar,
          {
            transform: [{ translateY: titleTranslateY }],
          },
        ]}
      >
        {!!HeaderComponent ? (
          HeaderComponent
        ) : (
          <View style={styles.topBarContainer}>
            <Text style={{ fontSize: 20 }}>Animated Header</Text>
          </View>
        )}
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    overflow: 'hidden',
    zIndex: 2,
    height: HEADER_HEIGHT_MAX,
  },
  img: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    resizeMode: 'cover',
    height: HEADER_HEIGHT_MAX,
  },
  topBar: {
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  topBarContainer: {
    width: '100%',
    flexDirection: 'row',
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
