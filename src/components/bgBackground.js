import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BgBackground = (props) => {
    const { children } = props

    return (
        <ImageBackground
            source={require('../assets/images/bg.png')}
            style={styles.main}
        >
            {children}
        </ImageBackground>
    )
}

export default BgBackground

const styles = StyleSheet.create({
    main: {
        flex: 1
    }
})