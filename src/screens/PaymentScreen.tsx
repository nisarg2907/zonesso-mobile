import { SafeAreaView, ScrollView, Text, View, Image, TouchableOpacity } from "react-native";
import MapPin from "../../assets/svg/carwashcompanyscreen/map-pin.svg";
import CarLogo from "../../assets/svg/cardetailscreen/CarDetailIconTwo.svg";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeStackParamList } from "../types/navigation";
type Props = NativeStackScreenProps<
  HomeStackParamList,
  "PaymentScreen"
>;
const PaymentScreen = ({route,navigation}:Props) => {
  return (
    <SafeAreaView className="flex-1 mb-[74px] bg-white">
      <ScrollView>
        {/* Location Details */}
        <View className="px-4 mt-4 pt-4">
          <Text className="text-gray-600 mb-2">Location Details</Text>
          <View className="flex-row items-center p-3 bg-gray-50  rounded-lg">
            <MapPin />
            <Text className="ml-2 text-gray-700">The Indian Building, Al Barsha, Dubai UAE</Text>
          </View>
        </View>

        {/* Services Added */}
        <View className="px-4 pt-6 mt-4">
          <Text className="text-gray-600 mb-3">Services added</Text>
          <View className="flex-row items-center">
            <View className="w-16 h-16  rounded-lg overflow-hidden">
              <CarLogo/>
            </View>
            <View className="ml-3">
              <Text className="font-medium">Car Wash</Text>
              <Text className="text-gray-600">Classic Clean AED 150</Text>
            </View>
          </View>
        </View>

        {/* Vehicle Details */}
        <View className="px-4 pt-6 mt-4">
          <Text className="text-gray-600 mb-3">Vehicle Details</Text>
          <View className="p-3 bg-gray-50 rounded-lg">
            <Text className="text-gray-800">Lamborghini Aventador</Text>
            <Text className="text-gray-500 text-sm">AE 123456</Text>
          </View>
        </View>

        {/* Time and Date */}
        <View className="px-4 pt-6 mt-4">
          <Text className="text-gray-600 mb-3">Time and Date</Text>
          <View className="p-3 bg-gray-50 rounded-lg">
            <Text className="text-gray-800">3 March 2024 - 4:00 PM</Text>
          </View>
        </View>

        {/* Payment Summary */}
        <View className="px-4 pt-6 mt-8">
          <Text className="text-gray-600 font-nunito font-bold text-lg mb-3">Payment Summary</Text>
          <View className="space-y-3 ">
            <View className="flex-row justify-between mt-2">
              <Text className="text-gray-600">Car Recovery</Text>
              <Text className="text-gray-800">150 AED</Text>
            </View>
            <View className="flex-row justify-between mt-2">
              <Text className="text-gray-600">Vat (12%)</Text>
              <Text className="text-gray-800">18 AED</Text>
            </View>
            <View className="flex-row justify-between mt-2">
              <Text className="text-gray-600">Delivery charges</Text>
              <Text className="text-gray-800">0 AED</Text>
            </View>
            <View className="flex-row  mt-4 justify-between pt-2 ">
              <Text className="font-medium">Total payable amount:</Text>
              <Text className="font-medium">168 AED</Text>
            </View>
          </View>
        </View>

        {/* Confirm Button */}
        <View className="px-4 py-6 mt-2">
          <TouchableOpacity 
            className="bg-[#F36414] rounded-lg"
            onPress={()=>navigation.navigate('AnimationScreen')}
          >
            <Text className="text-white text-center py-4 font-medium">Confirm</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PaymentScreen;