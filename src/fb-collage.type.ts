import { ImageURISource, ImageResizeMode, ViewStyle, TextStyle } from 'react-native';

export type FuncStyle = {
  (length: number): ViewStyle;
};

export type StaticStyle = {
  [x: string]: ViewStyle | TextStyle | FuncStyle;
};

export class Props {

  images: ImageURISource[] = [];

  resizeMode: ImageResizeMode = 'cover';

  height: number = 200;

  width: number = 357;

  borderRadius: number = 12;

  spacing?: number;

  style?: ViewStyle;

  overlayStyle?: ViewStyle;

  textStyle?: TextStyle;

  imageOnPress?: { (index: number, images: any[]): void };
}
