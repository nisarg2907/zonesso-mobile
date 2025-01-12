import { ScrollView, View, Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeStackParamList } from "../types/navigation";
import ToyotaLogoImage from "../../assets/svg/homescreen/ToyotaLogo.svg";
import CarDetailCard, { BadgeType } from "../components/Card";
import cardImageOne from "../../assets/svg/citycarwashscreen/ImageOne.svg";
type Props = NativeStackScreenProps<
  HomeStackParamList,
  "CityWashDetailsScreen"
>;

export default function CityDetailsScreen({ route,navigation }: Props) {
   
  return (
    <ScrollView className="flex-1 mb-[74px] bg-white">
      {/* Title */}
      <View className="px-4">
        <Text className="text-[#475467] mt-2 font-nunito text-base font-bold leading-[38px] w-full">
          Showing{" "}
          <Text className="text-[rgba(240,97,0,0.80)] font-nunito text-base font-extrabold">
            200
          </Text>{" "}
          results in Dubai
        </Text>
      </View>

      {/* Card List */}

        <CarDetailCard
          image={cardImageOne}
          price="150"
          distance="1.2 km"
          title="Car Detailing"
          description="Special Discounted Offer For Ceramic Coating At & Interior Detailing With Steam At Home."
          location="Deira, Dubai, United Arab Emirates"
          postedDate="14/3/24"
          postedBy="A Car Wash & Detailing"
          logo={ToyotaLogoImage}
          onChat={() => console.log("Chat clicked")}
          onCall={() => console.log("Call clicked")}
          badgeType={BadgeType.Premium}
          onCompanyClick={()=>navigation.navigate("CarWashCompanyScreen")}
          onServiceClick={()=>navigation.navigate('CarServiceScreen')}
        />
        <CarDetailCard
          image={cardImageOne}
          price="150"
          distance="1.2 km"
          title="Car Detailing"
          description="Special Discounted Offer For Ceramic Coating At & Interior Detailing With Steam At Home."
          location="Deira, Dubai, United Arab Emirates"
          postedDate="14/3/24"
          postedBy="A Car Wash & Detailing"
          logo={ToyotaLogoImage}
          onChat={() => console.log("Chat clicked")}
          onCall={() => console.log("Call clicked")}
          badgeType={BadgeType.Featured}
        />

    </ScrollView>
  );
}
