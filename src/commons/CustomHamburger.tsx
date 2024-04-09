import { View, StyleSheet, TouchableOpacity } from 'react-native'
import React, { PropsWithChildren } from 'react'
type CustomHamburgerProps = PropsWithChildren<{
    pressable: () => void;
}>
const CustomHamburger = ({pressable}:CustomHamburgerProps) => {
  return (
    
    <TouchableOpacity style={styles.container} onPress={pressable}>
        <View style={styles.line1}></View>
        <View style={styles.line2}></View>
        <View style={styles.line3}></View>
    </TouchableOpacity>
  )
}
const styles  = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        width: 50,
        height: 20,
        justifyContent: 'space-between',
        flexDirection: 'column',
        marginHorizontal:20
    },
    line1: {
        backgroundColor: 'black',
        width: 30,
        height: 3
    },
    line2: {
        backgroundColor: 'black',
        width: 20,
        height: 3
    },
    line3: {
        backgroundColor: 'black',
        width: 10,
        height: 3
    }
})

export default CustomHamburger