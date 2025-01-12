import React from 'react';
import './global.css';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeIcon from './assets/svg/HomeIcon.svg';
import ChatIcon from './assets/svg/ChatIcon.svg';
import ActivityIcon from './assets/svg/ActivityIcon.svg';
import PostIcon from './assets/svg/PostIcon.svg';
import UserIcon from './assets/svg/UserIcon.svg';
import { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

const Tab = createBottomTabNavigator();
SplashScreen.preventAutoHideAsync();

import NunitoBlack from './assets/fonts/nunito/Nunito-Black.ttf';
import NunitoBlackItalic from './assets/fonts/nunito/Nunito-BlackItalic.ttf';
import NunitoBold from './assets/fonts/nunito/Nunito-Bold.ttf';
import NunitoBoldItalic from './assets/fonts/nunito/Nunito-BoldItalic.ttf';
import NunitoExtraBold from './assets/fonts/nunito/Nunito-ExtraBold.ttf';
import NunitoExtraBoldItalic from './assets/fonts/nunito/Nunito-ExtraBoldItalic.ttf';
import NunitoExtraLight from './assets/fonts/nunito/Nunito-ExtraLight.ttf';
import NunitoExtraLightItalic from './assets/fonts/nunito/Nunito-ExtraLightItalic.ttf';
import NunitoItalic from './assets/fonts/nunito/Nunito-Italic.ttf';
import NunitoLight from './assets/fonts/nunito/Nunito-Light.ttf';
import NunitoLightItalic from './assets/fonts/nunito/Nunito-LightItalic.ttf';
import NunitoMedium from './assets/fonts/nunito/Nunito-Medium.ttf';
import NunitoMediumItalic from './assets/fonts/nunito/Nunito-MediumItalic.ttf';
import NunitoRegular from './assets/fonts/nunito/Nunito-Regular.ttf';
import NunitoSemiBold from './assets/fonts/nunito/Nunito-SemiBold.ttf';
import NunitoSemiBoldItalic from './assets/fonts/nunito/Nunito-SemiBoldItalic.ttf';
import HomeStack from './src/navigations/HomeStack';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      try {
        await Font.loadAsync({
          'Nunito-Black': NunitoBlack,
          'Nunito-BlackItalic': NunitoBlackItalic,
          'Nunito-Bold': NunitoBold,
          'Nunito-BoldItalic': NunitoBoldItalic,
          'Nunito-ExtraBold': NunitoExtraBold,
          'Nunito-ExtraBoldItalic': NunitoExtraBoldItalic,
          'Nunito-ExtraLight': NunitoExtraLight,
          'Nunito-ExtraLightItalic': NunitoExtraLightItalic,
          'Nunito-Italic': NunitoItalic,
          'Nunito-Light': NunitoLight,
          'Nunito-LightItalic': NunitoLightItalic,
          'Nunito-Medium': NunitoMedium,
          'Nunito-MediumItalic': NunitoMediumItalic,
          'Nunito-Regular': NunitoRegular,
          'Nunito-SemiBold': NunitoSemiBold,
          'Nunito-SemiBoldItalic': NunitoSemiBoldItalic,
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setFontsLoaded(true);
      }
    }

    loadFonts();
  }, []);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Home') {
              return <HomeIcon width={24} height={24} />;
            } else if (route.name === 'Activity') {
              return <ActivityIcon width={24} height={24} />;
            } else if (route.name === 'Post') {
              return <PostIcon width={48} height={48} />;
            } else if (route.name === 'Chat') {
              return <ChatIcon width={24} height={24} />;
            } else if (route.name === 'User') {
              return <UserIcon width={24} height={24} />;
            }
          },
          tabBarActiveTintColor: '#F36414',
          tabBarInactiveTintColor: '#000000',
          tabBarStyle: {
            display: 'flex',
            height: 74,
            backgroundColor: '#FFFFFF',
            borderTopWidth: 0,
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            borderTopLeftRadius: 28,
            borderTopRightRadius: 28,
            elevation: 8, 
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: -4,
            },
            shadowOpacity: 0.1,
            shadowRadius: 8,
            paddingHorizontal: 16,
          },
          tabBarItemStyle: {
            height: 74,
            paddingVertical: 12,
          },
          tabBarLabelStyle: {
            fontFamily: 'Nunito-Medium',
            fontSize: 12,
            marginTop: 4,
          },
          tabBarPressColor: 'transparent', 
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Activity" component={HomeStack} />
        <Tab.Screen
          name="Post"
          component={HomeStack}
          options={{
            tabBarItemStyle: {
              height: 74,
              paddingVertical: 12,
            },
            tabBarLabelStyle: {
              fontFamily: 'Nunito-Medium',
              fontSize: 12,
              marginTop: 8, // Adjusted to move the name a little down
            },
          }}
        />
        <Tab.Screen name="Chat" component={HomeStack} />
        <Tab.Screen name="User" component={HomeStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}