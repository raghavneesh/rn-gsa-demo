/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import UnityView, { MessageHandler, UnityModule } from '@asmadsen/react-native-unity-view';

const App: () => React$Node = () => {
  const sendMessage = (message) => {
    console.log('Sending message', message);
    UnityModule.postMessageToUnityManager({
      name: 'Game',
      data: message || '',
      callBack: (data) => {
        console.log('Tip', JSON.stringify(data))
      }
    });
  }

  onUnityMessage = (hander) => {

    console.log('On unity message called', hander);

  }

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <UnityView
        style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }}
        onUnityMessage={onUnityMessage}
      >
      </UnityView>

      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end' }}>
          <View style={{ marginRight: 10 }} >
            <Button title="Give Badge" onPress={() => sendMessage('AWARD')}></Button>
          </View>
          <View>
            <Button title="Change Outfit" onPress={() => sendMessage('OUTFIT')}></Button>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end', marginTop: 20, marginBottom: 20 }}>
          <Button title="Celebrate" onPress={() => sendMessage('CELEBRATE')}></Button>
        </View>
      </View>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // position: 'absolute', top: 0, bottom: 0, left: 0, right: 0,
    // justifyContent: 'flex-end',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

export default App;
