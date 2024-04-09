import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {PropsWithChildren} from 'react';
type CustomButtonProps = PropsWithChildren<{
  title: string;
  onClick: () => void;
}>;

const CustomButton = ({title, onClick}: CustomButtonProps) => {
  return (
    <TouchableOpacity onPress={onClick} style={styles.buttonView}>
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  buttonView: {
    backgroundColor: '#1C233D',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 48,
    justifyContent:"center",
    alignItems:"center"
  },
  btnText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '400',
  },
});
export default CustomButton;
