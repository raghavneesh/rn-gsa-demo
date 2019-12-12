import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Animated,
    Button
} from 'react-native';
import UnityView, { MessageHandler, UnityModule } from '@asmadsen/react-native-unity-view';


const GameScreen: () => React.FC = (props) => {
    const [fadeAnim] = useState(new Animated.Value(0));

    React.useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 6000,
            }
        ).start();
    }, [])

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

        <Animated.View style={{ flex: 1, opacity: fadeAnim }}>

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
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    body: {
        padding: 20
    }
})

export default GameScreen;