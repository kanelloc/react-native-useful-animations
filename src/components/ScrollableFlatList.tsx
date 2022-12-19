import React, { ComponentType } from 'react';
import {
  StyleSheet,
  View,
  Animated,
  Text,
  FlatListProps,
  ViewProps,
  ImageSourcePropType,
} from 'react-native';
import { useScrollableHeader } from '../hooks/useScrollableHeader';
import { HEADER_HEIGHT_MAX } from '../utils/constants';

type Props = {
  HeaderComponent?: ComponentType<ViewProps>;
  headerImg?: ImageSourcePropType;
} & FlatListProps<any>;
export const ScrollableFlatList = (props: Props) => {
  const [
    onScroll,
    headerTranslateY,
    imageOpacity,
    imageTranslateY,
    titleTranslateY,
  ] = useScrollableHeader();

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.header,
          { transform: [{ translateY: headerTranslateY }] },
        ]}
      >
        <Animated.Image
          source={props.headerImg}
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
          {!!props.HeaderComponent ? (
            <props.HeaderComponent />
          ) : (
            <View style={styles.topBarContainer}>
              <Text>Left button</Text>
              <Text style={{ fontSize: 20 }}>Nice list</Text>
              <Text>Right button</Text>
            </View>
          )}
        </Animated.View>
      </Animated.View>
      <Animated.FlatList {...props} onScroll={onScroll} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
