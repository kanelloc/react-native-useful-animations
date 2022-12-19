import React from 'react';
import {
  ImageSourcePropType,
  ScrollViewProps,
  Animated,
  View,
} from 'react-native';
import { AnimatedHeader } from './AnimatedHeader';
import { useScrollableHeader } from '../hooks/useScrollableHeader';
import { HEADER_HEIGHT_MAX } from '../utils/constants';

type Props = {
  HeaderComponent?: React.ReactNode;
  headerImg: ImageSourcePropType;
} & ScrollViewProps;
export const ScrollableScrollView = (props: Props) => {
  const [
    onScroll,
    headerTranslateY,
    imageOpacity,
    imageTranslateY,
    titleTranslateY,
  ] = useScrollableHeader();
  return (
    <View style={{ flex: 1 }}>
      <Animated.ScrollView
        {...props}
        onScroll={onScroll}
        scrollEventThrottle={16}
        contentContainerStyle={{ paddingTop: HEADER_HEIGHT_MAX }}
      >
        {props.children}
      </Animated.ScrollView>
      <AnimatedHeader
        HeaderComponent={props.HeaderComponent}
        headerImg={props.headerImg}
        imageOpacity={imageOpacity}
        headerTranslateY={headerTranslateY}
        imageTranslateY={imageTranslateY}
        titleTranslateY={titleTranslateY}
      />
    </View>
  );
};
