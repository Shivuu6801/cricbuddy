import React, {useState, useRef} from 'react';
import { View, Text, Alert, StyleSheet, TouchableOpacity ,Image} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
 
export default function App() {
 
  const [phoneNumber, setPhoneNumber] = useState('');
 
  const phoneInput = useRef(null);
 
  const getPhoneNumber = () => {
    Alert.alert(phoneNumber);
  };
 
  return (
    <View style={styleSheet.MainContainer}>
 
      <Image style={styleSheet.image} source={require('./assets/images.jpg')} />
 
      <PhoneInput
        ref={phoneInput}
        defaultValue={phoneNumber}
        defaultCode="IN"
        layout="first"
        withShadow
        autoFocus
        containerStyle={styleSheet.phoneNumberView}
        textInputProps={{ maxLength: 10 }}
        textContainerStyle={{ paddingVertical: 0 }}
        onChangeFormattedText={text => {
          setPhoneNumber(text);
        }}
      />
 
      <TouchableOpacity  style={styleSheet.button} onPress={() => navigation.navigate('otp_screen')}>
        <Text style={styleSheet.buttonText}>Let's Play </Text>
      </TouchableOpacity >
      
      
      <Text stlye ={styleSheet.terms1}> By Signing in, you agree to  our Terms   </Text>
      <Text stlye ={styleSheet.terms2}> and Privacy Policy  </Text>
      
    </View>
  );
};
 
const styleSheet = StyleSheet.create({
 
  MainContainer: {
    alignItems: 'center',
  },
   image:{
    marginTop:100
   },
  heading:{
    fontSize: 24,
    textAlign: 'center',
    paddingBottom: 20,
    color: 'black'
  },
 
  phoneNumberView: {
    width: '80%',
    height: 50,
    backgroundColor: 'white'
  },
 
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    width: '80%',
    padding: 8,
    backgroundColor: '#ED7272',
    borderRadius:12
  },
 
  buttonText:{
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
  terms1:{
      
      textAlign:'center',
      fontWeight:'bold'
  },
  terms2:{
     textAlign:'center',
     marginLeft:500
  }
});