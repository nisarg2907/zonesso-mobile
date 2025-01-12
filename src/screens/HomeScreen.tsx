import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { HomeStackParamList } from "../types/navigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Boats from "../../assets/svg/homescreen/Boats.svg";
import CarImage from "../../assets/svg/homescreen/CarImage.svg";
import CarRecoveryImage from "../../assets/svg/homescreen/CarRecoveryImage.svg";
import CarServiceImage from "../../assets/svg/homescreen/CarServiceImage.svg";
import CarWashImage from "../../assets/svg/homescreen/CarWashImage.svg";
import MotorCycleIcon from "../../assets/svg/homescreen/MotorCycleIcon.svg";
import NumberPlatesImage from "../../assets/svg/homescreen/NumberPlatesImage.svg";
import PartAndAccessoriesImage from "../../assets/svg/homescreen/PartAndAccessoriesImage.svg";
import ShowRoomImage from "../../assets/svg/homescreen/ShowRoomImage.svg";
import Advert from "../../assets/svg/homescreen/Advert.svg";
import ToyotaImage from "../../assets/svg/homescreen/Toyota.svg";
import ToyotaLogoImage from "../../assets/svg/homescreen/ToyotaLogo.svg";
import RenderList from "../components/RenderList";

type NavigationProp = NativeStackNavigationProp<HomeStackParamList, "HomeScreen">;

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  const cardData = [
    { title: "Motors", Icon: CarImage },
    { title: "Motorbikes", Icon: MotorCycleIcon },
    { title: "Showrooms", Icon: ShowRoomImage },
    { title: "Parts & Accessories", Icon: PartAndAccessoriesImage },
    { title: "Number Plates", Icon: NumberPlatesImage },
    { title: "Car Service", Icon: CarServiceImage },
    { title: "Car Wash", Icon: CarWashImage },
    { title: "Car Recovery", Icon: CarRecoveryImage },
    { title: "Boats", Icon: Boats },
  ];

  const showroomData = [
    {
      id: "1",
      name: "Toyota Motors",
      distance: "1.2 km",
      image: ToyotaImage,
      logo: ToyotaLogoImage,
    },
    {
      id: "2",
      name: "Toyota Motors",
      distance: "1.2 km",
      image: ToyotaImage,
      logo: ToyotaLogoImage,
    },
    {
      id: "3",
      name: "Toyota Motors",
      distance: "1.2 km",
      image: ToyotaImage,
      logo: ToyotaLogoImage,
    },
  ];

  const topSalesData = [
    {
      id: "1",
      name: "Toyota Motors",
      distance: "1.2 km",
      image: ToyotaImage,
      logo: ToyotaLogoImage,
    },
    {
      id: "2",
      name: "Toyota Motors",
      distance: "1.2 km",
      image: ToyotaImage,
      logo: ToyotaLogoImage,
    },
    {
      id: "3",
      name: "Toyota Motors",
      distance: "1.2 km",
      image: ToyotaImage,
      logo: ToyotaLogoImage,
    },
  ];

  const numberPlatesData = [
    { id: "1", name: "Toyota Motors", distance: "1.2 km", image: ToyotaImage },
    { id: "2", name: "Toyota Motors", distance: "1.2 km", image: ToyotaImage },
    { id: "3", name: "Toyota Motors", distance: "1.2 km", image: ToyotaImage },
  ];

  const previousSearchesData = [
    { id: "1", name: "Toyota Motors", distance: "1.2 km", image: ToyotaImage },
    { id: "2", name: "Toyota Motors", distance: "1.2 km", image: ToyotaImage },
    { id: "3", name: "Toyota Motors", distance: "1.2 km", image: ToyotaImage },
  ];

  return (
    <ScrollView className="flex-1 mb-[74px] bg-white px-3">
      {/* Cards Section */}
      <View className="flex-row flex-wrap justify-between mt-2">
        {cardData.map((card, index) => (
          <TouchableOpacity
            key={index}
            style={{
              width: 116,
              height: 88,
              flexShrink: 0,
              borderRadius: 8,
              borderWidth: 1,
              borderColor: "#DCDCDC",
              backgroundColor: "#FFF",
              shadowColor: "#000",
              shadowOffset: {
                width: 6,
                height: 6,
              },
              shadowOpacity: 0.25,
              shadowRadius: 10,
              elevation: 5,
              marginBottom: 8,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              if (card.title === "Car Wash") {
                navigation.navigate("CarWashDetailsScreen");
              }
            }}
          >
            <View className="items-center">
              <card.Icon width={80} height={80} />
              {card.title !== "Motors" && (
                <Text className="text-xs text-center absolute bottom-1">
                  {card.title}
                </Text>
              )}
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Advert Section */}
      <View className="mt-2 mb-4">
        <Advert />
      </View>

      {/* Top Showrooms Section */}
      <RenderList
        data={showroomData.map((item) => ({
          ...item,
          image: ({ width, height }) => (
            <item.image width={width} height={height} />
          ),
          logo: ({ width, height }) => (
            <item.logo width={width} height={height} />
          ),
        }))}
        title="Top Showrooms"
        itemGap={12}
      />

      {/* Top Sales Section */}
      <RenderList
        data={topSalesData.map((item) => ({
          ...item,
          image: ({ width, height }) => (
            <item.image width={width} height={height} />
          ),
          logo: ({ width, height }) => (
            <item.logo width={width} height={height} />
          ),
        }))}
        title="Top Sales"
        itemGap={12}
      />

      {/* Top Number Plates Section */}
      <RenderList
        data={numberPlatesData.map((item) => ({
          ...item,
          image: ({ width, height }) => (
            <item.image width={width} height={height} />
          ),
        }))}
        title="Top Number Plates"
        itemGap={12}
      />

      {/* Previous Searches Section */}
      <RenderList
        data={previousSearchesData.map((item) => ({
          ...item,
          image: ({ width, height }) => (
            <item.image width={width} height={height} />
          ),
        }))}
        title="Previous Searches"
        itemGap={12}
      />
    </ScrollView>
  );
};

export default HomeScreen;
