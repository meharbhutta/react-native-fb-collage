import * as React from 'react';
import { ImageBackground, Text, TouchableOpacity, View, ViewStyle, TextStyle } from 'react-native';
import { Props, ImageSource, FuncStyle, StaticStyle } from './fb-collage.type';
import staticStyles from './fb-collage.style';

export default class FBCollage extends React.Component<Props> {
  private styles: StaticStyle;

  static defaultProps = new Props();

  constructor(props: Props) {
    super(props);
    this.styles = staticStyles(props.width, props.height, props.borderRadius, props.spacing);
  }

  __renderImage = (image: ImageSource, index: number, style?: ViewStyle, text?: string, blurRadius?: number) => {
    const {
      images,
      imageOnPress,
      resizeMode,
      textStyle: textStyleOverride,
      overlayStyle: overlayStyleOverride
    } = this.props;

    const source = typeof image === 'string' ? { uri: image } : image;

    return (
      <TouchableOpacity
        style={{
          ...(this.styles.BUTTON as ViewStyle),
          ...style
        }}
        onPress={() => imageOnPress && imageOnPress(index, images)}
        activeOpacity={0.8}
        key={`image${index}`}
      >
        <ImageBackground
          style={this.styles.FLEX as ViewStyle}
          source={source}
          resizeMode={resizeMode}
          blurRadius={blurRadius}
        >
          {text && (
            <View
              style={{
                ...(this.styles.OVERLAY as ViewStyle),
                ...overlayStyleOverride
              }}
            >
              <Text
                style={{
                  ...(this.styles.TEXT as TextStyle),
                  ...textStyleOverride
                }}
              >
                {'+' + text}
              </Text>
            </View>
          )}
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  __renderImages = (images: ImageSource[]) => {
    const length = images.length,
      check = length > 4,
      childs = check ? images.slice(0, 4) : images,
      text = check ? (length - 4).toString() : undefined;

    return (
      <View style={(this.styles.CONTAINER as FuncStyle)(length)}>
        {childs.map((image, index) => {
          if (index === 3)
            return this.__renderImage(images[3], 4, (this.styles.IMAGE as FuncStyle)(length), text, text ? 4 : 0);
          else return this.__renderImage(image, index + 1, (this.styles.IMAGE as FuncStyle)(length));
        })}
      </View>
    );
  };

  __renderContent = (images: ImageSource[]) => {
    return (
      <>
        <View style={this.styles.FLEX as ViewStyle}>
          {this.__renderImage(images[0], 0, this.styles.FLEX as ViewStyle)}
        </View>
        {images.length > 1 && this.__renderImages(images.slice(1))}
      </>
    );
  };

  render() {
    const { images, style: styleOverride } = this.props;

    return (
      <View
        style={{
          ...(this.styles.VIEW as ViewStyle),
          ...styleOverride
        }}
      >
        {this.__renderContent(images)}
      </View>
    );
  }
}
