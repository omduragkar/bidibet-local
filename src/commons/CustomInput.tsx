import { View, Text, TextInput } from 'react-native'
import React, { PropsWithChildren } from 'react'
type CustomInputProps = PropsWithChildren<{
    placeholder: string;
    value: string;
    setValue: (value: string) => void;
    type?: string;
}>
const CustomInput = ({
    placeholder,
    value,
    setValue,
    type="text"
}: CustomInputProps) => {
  return (
    <TextInput 
        style={{
          backgroundColor: '#fff',
          color: '#1C233D',
          padding: 10,
          borderRadius: 25,
          borderColor: "#1C233D",
          width:"100%",
          zIndex:20,
          marginVertical: 10,
          height:50,
          fontSize:18,
          paddingHorizontal:20

        }}
        placeholderTextColor= {'#3C5669'}
        placeholder={placeholder}
        onChangeText={setValue}
        inputMode={type}
        
        value={value}
        />
  )
}

export default CustomInput