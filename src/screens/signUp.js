import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useState } from 'react';
import { ActivityIndicator, ImageBackground, Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { auth, db } from '../../firebaseConfig';
import AuthInput from '../components/authInput';
import { doc, setDoc } from "firebase/firestore";
import { AppContext } from "../context/appContext";
import { useNavigation } from "@react-navigation/native";

const SignUp = () => {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [ContactNumber, setContactNumber] = useState('');
  const [Password, setPassword] = useState('');
  const [ResetPassword, setResetPassword] = useState('');
  const [isLoading, setisLoading] = useState(false)
  const { type, setuser } = useContext(AppContext)

  const navigation = useNavigation()


  const handleSignUp = () => {
    if (Name && Email && Password && ContactNumber && ResetPassword) {
      if (Password != ResetPassword) {
        alert('Passwords do not match')
        return
      }
      setisLoading(true)
      createUserWithEmailAndPassword(auth, Email, Password)
        .then(async (userCredential) => {
          // Signed up 
          const user = userCredential.user;
          await setDoc(doc(db, "users", user?.uid), {
            name: Name,
            email: Email,
            phone: ContactNumber,
            uid: user?.uid,
            type: type
          });

          alert("User Created")
          setisLoading(false)
          setuser({
            name: Name,
            email: Email,
            phone: ContactNumber,
            uid: user?.uid,
            type: type
          })
          navigation.navigate("Appstack")
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          alert(errorMessage)
          setisLoading(false)
          // ..
        });
    } else {
      alert('All The fields are required')
    }


  }

  return (
    <View style={styles.main}>


      <ImageBackground source={require('../assets/images/logo.png')}
        style={styles.logo}>
        <Text style={styles.text1}> Sing Up </Text>
      </ImageBackground>



      <AuthInput
        placeholder="Name"
        value={Name}
        onChange={setName}
      />

      <AuthInput
        placeholder="Email"
        value={Email}
        onChange={setEmail}
      />

      <AuthInput
        placeholder="Contact Number"
        value={ContactNumber}
        onChange={setContactNumber}
      />

      <AuthInput
        placeholder="Password"
        value={Password}
        onChange={setPassword}
      />

      <AuthInput
        placeholder="Confirm Password"
        value={ResetPassword}
        onChange={setResetPassword}
      />
      <Pressable style={styles.pressable} onPress={() => handleSignUp()}>
        {
          isLoading ?
            <ActivityIndicator color={"#FFFFFF"} />
            :
            <Text style={styles.text}>{'Sing-Up'}</Text>
        }
      </Pressable>

      <View style={styles.row}>

      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: '5%',
    paddingTop: Platform.OS === 'ios' ? hp(7) : hp(2),
  },

  logo: {
    width: '100%',
    height: hp(20),
    resizeMode: 'contain',
    marginVertical: hp(1),
    justifyContent: 'center',


  },
  text:

  {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },


  row: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
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

  text1: {
    fontSize: hp(3.5)
  }
});
