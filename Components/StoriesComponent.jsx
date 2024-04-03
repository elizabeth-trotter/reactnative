import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import React from 'react'
import codestack_logo from '../assets/codestack_logo.png'

const StoriesComponent = () => {
  return (
    <ScrollView horizontal style={Styles.ScrollStyle}>
      <Image source={codestack_logo} style={Styles.ImageStyle}/>
      <Image source={codestack_logo} style={Styles.ImageStyle}/>
      <Image source={codestack_logo} style={Styles.ImageStyle}/>
      <Image source={codestack_logo} style={Styles.ImageStyle}/>
      <Image source={codestack_logo} style={Styles.ImageStyle}/>
      <Image source={codestack_logo} style={Styles.ImageStyle}/>
      <Image source={codestack_logo} style={Styles.ImageStyle}/>
      <Image source={codestack_logo} style={Styles.ImageStyle}/>
    </ScrollView>
  )
}

const Styles = StyleSheet.create({
  ImageStyle: {
    height: 80,
    width: 80,
    borderRadius: 50,
    marginRight: 20,
  },
  ScrollStyle: {
    paddingTop: 10,
    paddingBottom: 5,
  }
})

export default StoriesComponent