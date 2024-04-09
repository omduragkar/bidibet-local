import { View, Text, Button } from 'react-native'
import React, { PropsWithChildren } from 'react'
import CustomButton from '../../commons/CustomButton';
type OnboardingComponentProps = PropsWithChildren<{
    onPress: () => void;
    step: number;
    }>;

const InitialOnboarding = ({onPress, step}:OnboardingComponentProps) => {
  let header, textData, btnTitle, bgColor="white";
  console.log('InitialOnboarding rendered with step:', step);
  
  switch (step) {
    case 0:
      header = 'Hey Buddy! Lets Bid..';
      textData = 'Ready to place your bid then you need to swipe let to learn how it works.';
      btnTitle = 'Next';
      bgColor = "#4e49e6"
      break;
    case 1:
      header = 'Bid your favourite team';
      textData = 'Ready to place your bid then you need to swipe let to learn how it works.';
      btnTitle = 'Next';
      bgColor = "#4e49e6"
      break;
    case 2:
      header = 'Bid your favourite team';
      textData = 'Ready to place your bid then you need to swipe let to learn how it works.';
      btnTitle = "Let's Start";
      bgColor = "#4e49e6"
      break;
  }
  return (
    <View style={{
      flex:1,
      paddingHorizontal: 40,
      backgroundColor:bgColor
    }}>
      <View style={{
        paddingHorizontal: 20,
        height: "65%",
        width: "100%",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        backgroundColor: "#1C233D",
      }}>
        <Text style={{color:"#fff", fontSize:48, fontStyle:"italic", fontWeight: "700"}}>{header}</Text>
      </View>
      <Text style={{
        paddingVertical: 40,
        fontSize: 18,
        color:"white"
      }}>{textData}</Text>
      <View style={{
        width:"30%"
      }}>
        <CustomButton title={btnTitle || ''} onClick={onPress}/>
      </View>

    </View>
  )
}

export default InitialOnboarding