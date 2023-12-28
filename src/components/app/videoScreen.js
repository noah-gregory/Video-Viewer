import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { WebView } from 'react-native-webview';


export default class VideoScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      ip: '',
    };

    this.EZRASSOR = new EZRASSOR(this.state.ip);
  }

  render() {
    return (
      <WebView
        style={styles.container}
        source={{ uri: ip }}
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