import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
const HeaderRightComp = () => {
  return (
    <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 100,
        marginHorizontal:20
    }}>
      <Icon name="wallet" size={30} color="#000" />
      <Icon name="user-circle" size={30} color="#000" />
    </View>
  )
}

export default HeaderRightComp