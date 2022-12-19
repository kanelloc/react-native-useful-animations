import React from 'react';
import {
  StyleSheet,
  View,
  Animated,
  FlatListProps,
  ImageSourcePropType,
} from 'react-native';
import { useScrollableHeader } from '../hooks/useScrollableHeader';
import { AnimatedHeader } from './AnimatedHeader';

type Props = {
  HeaderComponent?: React.ReactNode;
  headerImg: ImageSourcePropType;
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
      <AnimatedHeader
        HeaderComponent={props.HeaderComponent}
        headerImg={props.headerImg}
        imageOpacity={imageOpacity}
        headerTranslateY={headerTranslateY}
        imageTranslateY={imageTranslateY}
        titleTranslateY={titleTranslateY}
      />
      <Animated.FlatList {...props} onScroll={onScroll} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
