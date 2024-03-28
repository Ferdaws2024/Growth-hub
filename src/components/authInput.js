import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const AuthInput = (props) => {
  return (
    <TextInput
    placeholder={props.placeholder}
    value={props.value}
    onChangeText={(text) => props.onChange(text)}
    placeholderTextColor={'gray'}
     style={styles.main}>

  
   </TextInput>

   
  )}


export default AuthInput

const styles = StyleSheet.create({
    main:{

        width:'100%',
        height:40,
        borderBottomWidth:1,
        fontSize:14,
        color:'black',
        marginVertical:20
        

    }

})