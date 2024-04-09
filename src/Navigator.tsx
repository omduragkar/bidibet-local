import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import InitialOnboarding from './components/initialOnboarding/InitialOnboarding';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {CommonActions} from '@react-navigation/native';
import AuthLogin from './components/auth/AuthLogin';
import CustomHamburger from './commons/CustomHamburger';
import HeaderRightComp from './components/home/header/HeaderRightComp';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainComponentHome from './components/home/MainComponentHome';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import {useAppDispatch, useAppSelector} from './store/storeHooks';
import {setIsInitialUser, setUserData} from './store/slice/user.slice';
import {firebase} from '@react-native-firebase/firestore';
import {decodeToken, encodeToken} from './utils/jwtToken';
import { userAddition } from './utils/firebaseUtils';

const Stack = createNativeStackNavigator();
const Navigator = () => {
  const dispatch = useAppDispatch();
  const [step, setStep] = useState(0);
  const [loginData, setLoginData] = useState({
    mobileNumber: '',
    otp: '',
    name: '',
  });
  const navigation = useNavigation();
  const getIntialData = React.useCallback(async () => {
    const step = await AsyncStorage.getItem('onboardingStep');
    const token = await AsyncStorage.getItem('token');
    console.log('Step: ', step);

    if (step) {
      dispatch(setIsInitialUser(false));
      setStep(Number(3));
    } else {
      dispatch(setIsInitialUser(true));
      setStep(0);
    }
    if (token) {
      const userId = await decodeToken(token);
      const user = await firebase
        .firestore()
        .collection('users')
        .doc(userId)
        .get();
      console.log('User: ', user.data());
      if (user.exists) {
        let oldUser = user?.data();
        dispatch(setUserData({
          mobileNumber: oldUser?.mobileNumber,
          displayName: oldUser?.displayName,
          userId: oldUser?.userId,
          token: token,
        }));
        setStep(7)
      }
    } else {
      console.log('No token found');
    }
  }, []);
  useEffect(() => {
    getIntialData();
  }, []);
  const handlePress = async () => {
    if (step < 2) {
      setStep(step + 1);
      await AsyncStorage.setItem('onboardingStep', String(step + 1));
    } else {
      // Navigate to login screen and reset the navigation stack
      await AsyncStorage.setItem('onboardingStep', String(step + 1));
      setStep(step + 1);
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'Login'}],
        }),
      );
    }
  };
  const pressButtonAuth = async (key: 'mobileNumber' | 'otp' | 'name') => {
    console.log({
      step
    })
    if (step >= 6) {
      console.log({
        loginData,
      })
      let data = await userAddition(loginData);
      data.token = await encodeToken(data?.id);
      console.log({
        data,
        id: data?.id,
        token: data.token
      })
      await AsyncStorage.setItem('onboardingStep', String(step + 1));
      await AsyncStorage.setItem('token', data.token);
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'MainScreen'}],
        }),
      );
    } else {
      if(!loginData[key]){
        throw new Error(`Please enter the ${key} to proceed`);
      }else{
        setLoginData({
          ...loginData,
        });
        setStep(step + 1);
      }
    }
  };
  return (
    <Stack.Navigator>
      {step < 3 && (
        <Stack.Screen
          name="Onboarding"
          options={{
            headerRight: () => (
              <View style={{marginRight: 10}}>
                <Text
                  style={{color: 'white'}}
                  onPress={() => {
                    navigation.dispatch(
                      CommonActions.reset({
                        index: 0,
                        routes: [{name: 'Login'}],
                      }),
                    );
                  }}>
                  Skip
                </Text>
              </View>
            ),
            headerTitle: '',
            headerTransparent: true,
          }}>
          {() => <InitialOnboarding step={0} onPress={handlePress} />}
        </Stack.Screen>
      )}
      {/* {step >= 3 && step < 7 && (
      )} */}
        { step <= 6 && (<Stack.Screen name="Login" options={{headerShown: false}}>
          {() => (
            <AuthLogin
              stepNumber={step}
              loginData={loginData}
              pressButtonAuth={pressButtonAuth}
              setData={setLoginData}
            />
          )}
        </Stack.Screen>)}
      <Stack.Screen
        name="MainScreen"
        options={{
          headerShown: false,
        }}
        component={MyDrawer}
      />
    </Stack.Navigator>
  );
};

const Drawer = createDrawerNavigator();
function MyDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={({navigation, route}) => ({
        headerShown: true,
        headerTransparent: true,
        headerLeft: () => (
          <CustomHamburger
            pressable={() => {
              navigation?.openDrawer();
            }}
          />
        ),
        headerTitle: '',
        headerRight: () => <HeaderRightComp />,
      })}>
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="Edit Profile" component={MainComponentHome} />
      <Drawer.Screen name="Player's Activity" component={MainComponentHome} />
      <Drawer.Screen name="My Bets" component={MainComponentHome} />
      <Drawer.Screen name="My Wallet" component={MainComponentHome} />
      <Drawer.Screen name="Settings" component={MainComponentHome} />
      <Drawer.Screen name="Help centre" component={MainComponentHome} />
    </Drawer.Navigator>
  );
}
export default Navigator;

const HomeStackfeeds = createNativeStackNavigator();
function HomeStack() {
  return (
    <HomeStackfeeds.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStackfeeds.Screen name="HomeFeed" component={BottomTabNavigator} />
    </HomeStackfeeds.Navigator>
  );
}

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <BottomTab.Screen
        name="Home"
        component={MainComponentHome}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="News"
        component={MainComponentHome}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon name="profile" size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="My Bets"
        component={MainComponentHome}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon name="like2" size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={MainComponentHome}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon name="user" size={size} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
