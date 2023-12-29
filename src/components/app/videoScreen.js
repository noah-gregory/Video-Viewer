import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { WebView } from 'react-native-webview';


export default class VideoScreen extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <WebView
        style={styles.container}
        source={{ uri: this.props.route.params.ip }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});