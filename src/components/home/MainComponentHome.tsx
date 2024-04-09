import {View, Text, ScrollView, Platform, SafeAreaView} from 'react-native';
import React from 'react';
import CustomInput from '../../commons/CustomInput';
import GameComponent from './GameComponent';

const MainComponentHome = () => {
  return (
    <SafeAreaView
      style={{
        marginHorizontal: 20,
        marginTop: Platform.OS === 'ios' ? 100 : 50,
        flex: 1,
        height: '100%',
      }}>
      <View>
        <Text
          style={{
            fontSize: 21,
            marginTop: 50,
            fontStyle: 'italic',
          }}>
          Hey{' '}
          <Text
            style={{
              fontSize: 22,
              fontWeight: 'bold',
              fontStyle: 'italic',
            }}>
            Om!
          </Text>
        </Text>
        <Text
          style={{
            fontSize: 16,
            marginTop: 20,
            fontStyle: 'italic',
          }}>
          Start your earnings by betting on the following sports{' '}
        </Text>
      </View>
      <CustomInput value={''} setValue={val => {}} placeholder="Text" />
      <GameComponent />
    </SafeAreaView>
  );
};

export default MainComponentHome;
