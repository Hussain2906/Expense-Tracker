import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SignupScreen = ({navigation}) => {
  return (
    <View>
      <Button title='Press' onPress={()=>navigation.navigate('MainStack')}/>
    </View>
  )
}

export default SignupScreen

const styles = StyleSheet.create({})