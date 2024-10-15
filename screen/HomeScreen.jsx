import { Image, StyleSheet, ImageBackground, TouchableOpacity, Text, View } from 'react-native';
import React from 'react';
import { colors } from '../araclar/colors';
import { fonts } from '../araclar/fonts';
import { useNavigation } from '@react-navigation/native';



const HomeScreen = () => {

  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('LOGIN');
  };

  const handleSignup = () => {
    navigation.navigate('SIGNUP');
  };
  return (
    <ImageBackground
    source={require('../assets/background.jpeg')}
    style={styles.background}
  >
    <View style={styles.container} >
      <Image source={require('../assets/logo.png')} style={styles.logo}/>
      <Text style={styles.title}>PADİANA'YA HOŞGELDİNİZ</Text>
      <Text style={styles.subTitle}>
      Sevgiyle Patilere Dokun: Bir Hayata Umut Ol.
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.loginButtonWrapper,
            { backgroundColor: colors.primary },
          ]}
          onPress={handleLogin}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.loginButtonWrapper]}
          onPress={handleSignup}
        >
          <Text style={styles.signupButtonText}>Sign-up</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ImageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex:1,
  },
  logo: {
    height: 60,
    width: 280,
    marginVertical: 40,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: 'white',
  },
  title: {
    fontSize: 40,
    fontFamily: fonts.SemiBold,
    paddingHorizontal: 20,
    textAlign: 'center',
    color: colors.black,
    marginTop: 40,
  },
  subTitle: {
    fontSize: 18,
    paddingHorizontal: 20,
    textAlign: 'center',
    color: colors.black,
    fontFamily: fonts.SemiBold,
    marginVertical: 20,
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: colors.primary,
    width: '80%',
    height: 60,
    borderRadius: 100,
  },
  loginButtonWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    borderRadius: 98,
  },
  loginButtonText: {
    color: colors.white,
    fontSize: 18,
    fontFamily: fonts.SemiBold,
  },
  signupButtonText: {
    fontSize: 18,
    fontFamily: fonts.SemiBold,
  },
});

