import { ImageResizeMode, ViewStyle, TextStyle } from 'react-native';

export type FuncStyle = {
  (length: number): ViewStyle;
};

export type StaticStyle = {
  [x: string]: ViewStyle | TextStyle | FuncStyle;
};

type ImageRequireSource = number

type ImageURISource = string

export type ImageSource = ImageRequireSource | ImageURISource;

export class Props {

  images: ImageSource[] = [];

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
