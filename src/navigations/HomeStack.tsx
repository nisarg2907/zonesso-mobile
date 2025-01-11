import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, TouchableOpacity } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import SearchIcon from '../../assets/svg/SearchIcon.svg';
import LocationIcon from '../../assets/svg/LocationIcon.svg';
import DownArrowIcon from '../../assets/svg/DownArrowIcon.svg';

type HomeStackParamList = {
  HomeScreen: undefined;
};

const Stack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen as React.ComponentType<any>}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerShadowVisible: false,
          headerTitle: '',
          headerLeft: () => (
            <View className="flex-row px-2 -mb-4 items-end gap-1">
              <LocationIcon width={17.5} height={20.5} />
              <Text className="text-base font-nunito font-medium ml-1 text-black" style={{ lineHeight: 23 }}>Dubai</Text>
              <DownArrowIcon width={16} height={16} />
            </View>
          ),
          headerRight: () => (
            <TouchableOpacity className='px-2 -mb-4'>
              <SearchIcon width={24} height={24} />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}
