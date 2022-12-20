import type { ScrollViewProps } from 'react-native';
import { ImageSourcePropType } from 'react-native';

export interface AnimatedScrollViewProps extends ScrollViewProps {
  /**
   * A header component to show a navbar when scrolling to the top
   */
  HeaderComponent?: JSX.Element;

  /**
   * Height of the scrollable image
   */
  headerImgHeight?: number;

  /**
   * @see https://reactnative.dev/docs/image#source
   */
  imgSource?: ImageSourcePropType;
}
