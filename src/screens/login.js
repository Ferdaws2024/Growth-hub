import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import React, { useContext, useState } from 'react';
import { ActivityIndicator, Image, Platform, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { auth, db } from '../../firebaseConfig';
import AuthInput from '../components/authInput';
import { AppContext } from '../context/appContext';

const Login = () => {
    const { type, setuser } = useContext(AppContext)
    const navigation = useNavigation()
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [isLoading, setisLoading] = useState(false)

    const handleLogin = () => {
        if (Email && Password) {
            setisLoading(true)
            signInWithEmailAndPassword(auth, Email, Password)
                .then(async (userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    const docRef = doc(db, "users", user.uid);
                    const docSnap = await getDoc(docRef);
                    setisLoading(false)

                    if (docSnap.exists()) {
                        setuser(docSnap.data())
                        navigation.navigate("Appstack")
                    }
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(errorMessage)
                    setisLoading(false)
                });
        } else {
            alert("Both fields are required!")
        }
    }

    return (
        <View style={styles.main}>

            <TouchableOpacity onPress={() => navigation.goBack(0)}>
                <AntDesign name="left" size={hp(3)} color="#85B6FF" />
            </TouchableOpacity>

            <Image
                source={require('../assets/images/logo.png')}
                style={styles.logo}
            />
            <AuthInput
                placeholder="Email"
                value={Email}
                onChange={setEmail}

            />
            <AuthInput
                placeholder="Password"
                value={Password}
                onChange={setPassword}

            />
            <Pressable style={styles.pressable} onPress={() => handleLogin()} >
                {
                    isLoading ?
                        <ActivityIndicator color={'#FFFFFF'} />
                        :
                        <Text style={styles.text}>{'login'}</Text>
                }
            </Pressable>
            <View style={styles.row}>
                <Text style={styles.text1}>Not registered yet?</Text>
                <Text style={styles.text2} onPress={() => navigation.navigate('Sign-Up')}>Sign-up</Text>

            </View>


        </View>

    )
}

export default Login

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        paddingHorizontal: '5%',
        paddingTop: Platform.OS == 'ios' ? hp(7) : hp(2)
    },
    logo: {
        width: '100%',
        height: hp(20),
        resizeMode: 'contain',
        marginVertical: hp(2)
    },
    pressable: {
        height: 45,
        backgroundColor: '#1F78FF',
        width: 140,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 30
    },

    text:
    {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,

    },
    row:
    {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },

    text1:
    {
        fontSize: 12,

    },

    text2: {
        color: '#273395',
        fontSize: 12,
        marginLeft: 5,
    }
})