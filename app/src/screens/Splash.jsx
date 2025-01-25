import {SafeAreaView, StatusBar, Text, Animated, View} from 'react-native';
import Title from '../common/Title';
import { useEffect } from 'react';

export default function SplashScreen() {

    const translateY = new Animated.Value(-20);
    const duration = 1000 

    useEffect(() => {
        Animated.loop(
        Animated.sequence([
            Animated.timing(translateY,
                {
                    toValue: 20,
                    duration: duration,
                    useNativeDriver: true
                }
                ),
        
       Animated.timing(translateY,
        {
            toValue: -20,
            duration: duration,
            useNativeDriver: true
        }
        )
    ])).start()
    }, [])

    return (
        <SafeAreaView style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'black'
        }}>
            <StatusBar barStyle={'light-content'}/>
            <Animated.View style={{transform: [{translateY: translateY}]}}>
                <Title text={'PattyChat'}/>
            </Animated.View>
        </SafeAreaView>
    )

}
