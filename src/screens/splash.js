import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import BgBackground from '../components/bgBackground'
import { useNavigation } from '@react-navigation/native'

const Splash = () => {
    const navigation = useNavigation()

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Onboarding")
        }, 3000);
    }, [])

    return (
        <BgBackground>
            <View style={styles.main}>
                <Image
                    source={require('../assets/images/branding.png')}
                    style={styles.icon}
                />
            </View>
        </BgBackground>
    )
}

export default Splash

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: '100%',
        height: 200,
        resizeMode: 'cover'
    }
})