/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import FBCollage from 'react-native-fb-collage';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <FBCollage
          images={[
            'https://www.inovex.de/blog/wp-content/uploads/2018/03/react-native-800x450.png',
            'https://www.inovex.de/blog/wp-content/uploads/2018/03/react-native-800x450.png',
            'https://www.inovex.de/blog/wp-content/uploads/2018/03/react-native-800x450.png',
            'https://www.inovex.de/blog/wp-content/uploads/2018/03/react-native-800x450.png',
            'https://www.inovex.de/blog/wp-content/uploads/2018/03/react-native-800x450.png',
            'https://www.inovex.de/blog/wp-content/uploads/2018/03/react-native-800x450.png',
            'https://www.inovex.de/blog/wp-content/uploads/2018/03/react-native-800x450.png'
          ]}
          style={styles.view}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8
  },
  view: {
    backgroundColor: 'black'
  }
});
