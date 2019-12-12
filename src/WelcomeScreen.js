import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import ModusLogo from './assets/logo-modus.png';

const Welcome: () => React.FC = (props) => {
    return (

        <View style={styles.body}>
            <Text style={styles.headingText}>About</Text>
            <Text style={styles.paragraph}>
                This application is a proof of concept that demonstrates the integration of rich 3D content built in Unity inside a React Native application.
            </Text>
            <Text style={styles.paragraph}>
                The 3D avatar and other assets are produced in Unity. The buttons that control this avatar are React Native UI elements.
            </Text>
            <Text style={styles.paragraph}>
                Use the buttons to trigger different actions on the avatar.
            </Text>
            <TouchableOpacity style={styles.button} onPress={props.onGameStart}>
                <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
            <View style={styles.footer}>
                <Text style={styles.poweredByText}>Powered By</Text>
                <View style={styles.attributionContainer}>
                    <Image style={styles.logoImage} resizeMode="contain" source={require('./assets/logo-modus.png')} />
                    <Text style={styles.logoText}>modus-made.com</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        padding: 20,
        flex: 1
    },
    headingText: {
        fontSize: 34,
        fontWeight: 'bold',
        marginBottom: 20
    },
    paragraph: {
        fontSize: 16,
        marginBottom: 15
    },
    button: {
        marginTop: 20,
        height: 50,
        lineHeight: 50,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#277DE1'
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        textTransform: 'uppercase'
    },
    footer: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 0
    },
    attributionContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    poweredByText: {
        fontSize: 16
    },
    logoImage: {
        width: 50,
        height: 50,
        marginRight: 10
    },
    logoText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ccc'
    }
})

export default Welcome;