/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  StatusBar
} from 'react-native';

import Welcome from './src/WelcomeScreen';
import GameScreen from './src/GameScreen';

const App: () => React$Node = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const onGameStart = () => {
    setIsGameStarted(true);
  }


  return (
    <>
      <StatusBar barStyle="dark-content" />

      <ScrollView
        contentContainerStyle={{ flexGrow: 1, flex: 1 }}
        contentInsetAdjustmentBehavior="automatic"
      >
        {
          (isGameStarted) ?
            (<GameScreen />) : (
              <Welcome onGameStart={onGameStart} />
            )
        }
      </ScrollView>

    </>
  );

};

const styles = StyleSheet.create({

});

export default App;
