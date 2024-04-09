import {View, Text} from 'react-native';
import React, {PropsWithChildren, useState} from 'react';
import CustomInput from '../../commons/CustomInput';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { Button, Snackbar } from 'react-native-paper';
import { getUserWithPhoneNumber } from '../../utils/firebaseUtils';
type AuthLoginProps = PropsWithChildren<{
  stepNumber: number;
  loginData: {
    step: number;
    mobileNumber: string;
    otp: string;
    name: string;
  };
  pressButtonAuth: (key: "mobileNumber" | "otp" | "name") => void;
  setData: (data: any) => void;
}>;
const AuthLogin = ({stepNumber, pressButtonAuth, loginData, setData}: AuthLoginProps) => {
  let header, textData, inputType, note, btnText, inputLabel, inputValue: string = "OTP";
  const [visible, setVisible] = useState(false);
  switch (stepNumber) {
    case 3:
      header = 'Just Verify & Play';
      textData = 'We will send you a one time password';
      inputType = 'numeric';
      inputLabel = 'Mobile Number';
      note = 'You will receive an OTP for Verification';
      btnText = 'Register';
      inputValue = "mobileNumber";

      break;
    case 4:
      header = 'Enter OTP';
      textData = 'Enter the OTP sent to your phone number';
      inputType = 'numeric';
      inputLabel = 'OTP';
      note = 'Enter the 6 digit OTP you received in your phone';
      btnText = 'Submit';
      inputValue = "otp";
      break;
    case 5:
      header = 'Enter your name';
      textData = 'Enter your name to continue';
      inputType = 'text';
      inputLabel = 'Full Name';
      note = 'NOTE: Full name is required to create your team name.';
      btnText = 'Save Name';
      inputValue = "name";
      break;
    case 6:
      header = 'Congratulations';
      textData = 'You have succesfully completed the onboarding';
      inputType = null;
      inputLabel = null;
      inputValue = "";
      btnText = 'Continue';
      note = null;
      break;
  }
  return (
    <View style={{
      justifyContent:"center",
      alignItems:"center",
      flex: 1,
      paddingHorizontal: 20,
    }}>
      <Text
        style={{
          color: '#3C5669',
          fontSize: 24,
          fontStyle: 'italic',
          fontWeight: '700',
        }}>
        {header}
      </Text>
      <Text
        style={{
          paddingVertical: 20,
          fontSize: 14,
          color: '#3C5669',
        }}>
        {textData}
      </Text>
      {inputType && <View style={{
        width: '100%',
        paddingHorizontal: 40,
      }}>
        <CustomInput
          placeholder={inputLabel || ''}
          value={loginData[inputValue] || ""}
          type={inputType || 'text'}
          setValue={(value) => {
            setData({
              ...loginData,
              [inputValue]: value
            });
          }}
        />
      </View>}
      <Text
        style={{
          paddingVertical: 20,
          fontSize: 10,
          color: '#3C5669',
        }}>
        {textData}
      </Text>
      {stepNumber == 0 && (
      <View style={{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"flex-start",
        paddingHorizontal: 40,
        marginBottom:20,
        width: "100%",
      }}>
        <BouncyCheckbox size={14}/>
        <Text>I certify that I'm above 18 years old</Text>
      </View>)}
      <View
        style={{
          width: '90%',
        }}>
          <Button mode='contained-tonal' onPress={async ()=>{
            if(inputValue && loginData[inputValue]){
              if(inputValue == "mobileNumber"){
                if(loginData[inputValue].length < 10){
                  setVisible(true);
                }else{
                  let data = await getUserWithPhoneNumber(loginData[inputValue]);
                  if(data){
                    setVisible(true);
                  }else{
                    pressButtonAuth(inputValue);
                  }
                }
              }
              pressButtonAuth(inputValue);
            }else if(inputValue){
              setVisible(true);
            }else{
              pressButtonAuth(inputValue);
            }
          }}>
            {btnText || ''}
            </Button>
        {/* <CustomButton title={btnText || ''} onClick={()=>pressButtonAuth(inputValue)} /> */}
      </View>
      <Snackbar
        visible={visible}
        onDismiss={()=>setVisible(false)}
        action={{
          label: 'Close',
          onPress: () => {
            setVisible(false);
          },
        }}>
        {`Please enter ${inputLabel}`}
      </Snackbar>
    </View>
  );
};

export default AuthLogin;
