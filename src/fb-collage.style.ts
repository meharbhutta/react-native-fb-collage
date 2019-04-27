import { ViewStyle, TextStyle } from 'react-native';
import { StaticStyle } from './fb-collage.type';

export default (width: number, height: number, borderRadius: number, spacing?: number): StaticStyle => {
  const space = spacing || width / 29.75,
    imageWidth = ((width / 2) / 2) - (2 * space),
    imageHeight = (height / 2) - (1.5 * space);

  return {
    VIEW: {
      width: width,
      height: height,
      paddingRight: space,
      paddingEnd: space,
      paddingTop: space,
      flexDirection: 'row',
      alignSelf: 'center'
    } as ViewStyle,
    FLEX: {
      flex: 1
    } as ViewStyle,
    IMAGE: (length: number) =>
      (length < 2
        ? {
            flex: 1
          }
        : {
            flex: length > 3 ? 0 : 1,
            width: imageWidth,
            height: imageHeight
          }) as ViewStyle,
    CONTAINER: (length: number) =>
      (length < 2
        ? {
            flex: 1
          }
        : {
            flexDirection: 'column',
            flexWrap: 'wrap'
          }) as ViewStyle,
    BUTTON: {
      flex: 1,
      borderRadius: borderRadius,
      marginBottom: space,
      marginLeft: space,
      marginStart: space,
      overflow: 'hidden'
    } as ViewStyle,
    OVERLAY: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#0000009d'
    } as ViewStyle,
    TEXT: {
      fontSize: 24,
      lineHeight: 28,
      fontWeight: '600',
      color: 'white'
    } as TextStyle
  };
};
