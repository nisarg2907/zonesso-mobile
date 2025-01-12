import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CompanyImage from "../../assets/images/CompanyPicture.png";
import CompanyLogo from "../../assets/svg/carwashcompanyscreen/CompanyLogo.svg";
import BackVector from "../../assets/svg/carwashcompanyscreen/backVector.svg";
import PhoneIcon from "../../assets/svg/carwashcompanyscreen/phoneIcon.svg";
import ChatIcon from "../../assets/svg/carwashcompanyscreen/chatIcon.svg";
import MapPin from "../../assets/svg/carwashcompanyscreen/map-pin.svg";
import Clock from "../../assets/svg/carwashcompanyscreen/clock.svg";
import Send from "../../assets/svg/carwashcompanyscreen/Send.svg";
import cardImageOne from "../../assets/svg/citycarwashscreen/ImageOne.svg";
import { BadgeType, CompanyServiceCard } from "../components/Card";
import { HomeStackParamList } from "../types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
type Props = NativeStackScreenProps<
  HomeStackParamList,
  "CarWashCompanyScreen"
>;
const ServiceAboutTabs = () => {
    return (
      <View className="flex-row h-12 mx-4 bg-gray-50/80 rounded-xl p-1">
        <View className="flex-1 flex-row">
          <TouchableOpacity 
            className="flex-1 bg-gradient-to-r from-[#FF8660] to-[#FF6188] rounded-lg justify-center"
            style={{
              backgroundColor: '#FF8660', 
            }}
          >
            <Text className="text-white text-center font-medium text-base">
              Services
            </Text>
          </TouchableOpacity>
        </View>
        
        <View className="flex-1 flex-row">
          <TouchableOpacity className="flex-1 rounded-lg justify-center">
            <Text className="text-gray-600 text-center font-medium text-base">
              About
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
const CarWashCompanyScreen = ({route,navigation}:Props) => {
  return (
    <SafeAreaView className="flex-1 mb-[74px] bg-white">
      <ScrollView>
        <View>
          {/* Background Image */}
          <Image source={CompanyImage} className="w-full h-[280px]" />

          {/* Back Button */}
          <TouchableOpacity  onPress={() => navigation.goBack()} className="absolute top-8 left-[24px] bg-gray-50 rounded-xl p-3">
            <BackVector />
          </TouchableOpacity>

          {/* Company Card */}
          <View className="mx-4 -mt-20 bg-white rounded-2xl p-4 shadow-lg">
            <View className="flex-row items-center space-x-3 gap-4 mb-4">
              <CompanyLogo />
              <View className="flex-1">
                <Text className="text-lg font-nunito font-bold">
                  Perfect Spot Auto Spa
                </Text>

                <View className="flex flex-row items-center -ml-1 gap-1">
                  <Send />
                  <Text className="text-gray-500 text-sm">1.8 km away</Text>
                </View>
                <View className="flex flex-row items-center gap-1">
                  <MapPin />
                  <Text className="text-gray-500 text-sm">
                    Dubai, united Arab Emirates
                  </Text>
                </View>
                <View className="flex flex-row items-center gap-1">
                  <Clock className="mt-1" />
                  <Text className="text-gray-500 text-sm">
                    Timings: 9:00 am - 8:00 pm
                  </Text>
                </View>
              </View>
            </View>

            {/* Action Buttons */}
            <View className="flex-row space-x-3 gap-2">
              <TouchableOpacity className="flex-1 flex-row items-center justify-center bg-gray-100 py-3 rounded-xl">
                <ChatIcon width={20} height={20} className="mr-2" />
                <Text className="ml-2">Chat</Text>
              </TouchableOpacity>

              <TouchableOpacity className="flex-1 flex-row items-center justify-center bg-red-500 py-3 rounded-xl">
                <PhoneIcon width={20} height={20} className="mr-2" />
                <Text className="text-white ml-2">Call</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Services Section */}
          <View className=" mt-6">
            <ServiceAboutTabs />
            {/* Service Card */}
            <CompanyServiceCard
              image={cardImageOne}
              badgeType={BadgeType.Featured}
              price="150"
              title="Exterior Wash"
              description="Comprehensive exterior wash including waxing and polishing."
              onImageClick={()=>navigation.navigate("CarServiceScreen")}
          />
            <CompanyServiceCard
              image={cardImageOne}
              badgeType={BadgeType.Premium}
              price="150"
              title="Full Interior Detailing"
              description="Complete interior cleaning with vacuuming, shampooing, and leather conditioning."
              onImageClick={()=>navigation.navigate("CarServiceScreen")}
          />
          </View>
          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CarWashCompanyScreen;
