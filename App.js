import React, {useEffect, Component} from 'react';
import {WebView} from 'react-native-webview';
import {SafeAreaView} from 'react-native';
//import SplashScreen from 'react-native-splash-screen';

class App extends Component {

  // componentDidMount() {
  //   // do stuff while splash screen is shown
  //     // After having done stuff (such as async tasks) hide the splash screen
  //     SplashScreen.hide();
  // }
  
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <WebView source={{uri: 'http://studento.in/schoolmanagement/signin/index'}} />
      </SafeAreaView>
    );
  }
}

export default App;
