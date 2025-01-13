import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import { HomeStackParamList } from "../types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import LottieView from 'lottie-react-native';
import animation from '../ui/Animation.json';

type Props = NativeStackScreenProps<HomeStackParamList, "AnimationScreen">;

const AnimationScreen = ({ route, navigation }: Props) => {
  return (
    <SafeAreaView className="flex-1 items-center mb-[74px] bg-white">
      <View className='mt-24'>
      </View>
      <LottieView
        source={animation}
        autoPlay
        loop={true}
        style={{ width: 360, height: 360 }}
      />
      <View className="relative items-center mt-1 w-3/4">
        <Text className="text-[28px] font-nunito font-bold text-black w-full text-center">Congratulations!</Text>
        <Text className="text-[20px] font-nunito text-black mt-1 w-full text-center">Your ad post is live now</Text>
        <TouchableOpacity 
          className="bg-[#FF5733] rounded-md mt-6 w-full"
          onPress={() => navigation.navigate('HomeScreen')}
        >
          <Text className="text-white text-center py-3 px-4 text-[16px]">View Ad Post</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AnimationScreen;