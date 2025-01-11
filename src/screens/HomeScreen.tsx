import React from 'react';
import { View, Text, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import Boats from '../../assets/svg/homescreen/Boats.svg';
import CarImage from '../../assets/svg/homescreen/CarImage.svg';
import CarRecoveryImage from '../../assets/svg/homescreen/CarRecoveryImage.svg';
import CarServiceImage from '../../assets/svg/homescreen/CarServiceImage.svg';
import CarWashImage from '../../assets/svg/homescreen/CarWashImage.svg';
import MotorCycleIcon from '../../assets/svg/homescreen/MotorCycleIcon.svg';
import NumberPlatesImage from '../../assets/svg/homescreen/NumberPlatesImage.svg';
import PartAndAccessoriesImage from '../../assets/svg/homescreen/PartAndAccessoriesImage.svg';
import ShowRoomImage from '../../assets/svg/homescreen/ShowRoomImage.svg';
import Advert from '../../assets/svg/homescreen/Advert.svg';
import ToyotaImage from '../../assets/svg/homescreen/Toyota.svg';

const HomeScreen = () => {
  const cardData = [
    { title: 'Motors', Icon: CarImage },
    { title: 'Motorbikes', Icon: MotorCycleIcon },
    { title: 'Showrooms', Icon: ShowRoomImage },
    { title: 'Parts & Accessories', Icon: PartAndAccessoriesImage },
    { title: 'Number Plates', Icon: NumberPlatesImage },
    { title: 'Car Service', Icon: CarServiceImage },
    { title: 'Car Wash', Icon: CarWashImage },
    { title: 'Car Recovery', Icon: CarRecoveryImage },
    { title: 'Boats', Icon: Boats },
  ];

  const showroomData = [
    { id: '1', name: 'Toyota Motors', distance: '1.2 km away', image: ToyotaImage },
    { id: '2', name: 'Toyota Motors', distance: '1.2 km away', image: ToyotaImage },
    { id: '3', name: 'Toyota Motors', distance: '1.2 km away', image: ToyotaImage },
  ];

  return (
    <ScrollView className="flex-1 px-4 mb-20 bg-white">
      {/* Cards Section */}
      <View className="flex-row flex-wrap justify-between mb-2">
        {cardData.map((card, index) => (
          <TouchableOpacity
            key={index}
            className="w-[30%] aspect-square bg-white shadow-md rounded-lg flex justify-center items-center mb-4"
            style={{ elevation: 3 }}
          >
            <card.Icon width={80} height={80} />
            <Text className="text-sm font-nunito font-medium text-black text-center">
              {card.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Advert Section */}
      <View className="mt-1">
        <Advert />
      </View>

      {/* Top Showrooms Section */}
      <View className="mt-4">
        {/* Title and View All Button */}
        <View className="flex-row justify-between items-center mb-2">
          <Text className="text-lg font-bold">Top Showrooms</Text>
          <TouchableOpacity>
            <Text className="text-sm text-red-500">View all</Text>
          </TouchableOpacity>
        </View>

        {/* Horizontal FlatList */}
        <FlatList
          horizontal
          data={showroomData}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 8 }}
          renderItem={({ item }) => (
            <TouchableOpacity
              className="bg-white shadow-md rounded-lg overflow-hidden w-[150px]"
              style={{ elevation: 3 }}
            >
              <ToyotaImage />
              <View className="p-2">
                <Text className="text-sm font-bold">{item.name}</Text>
                <Text className="text-xs text-gray-500">{item.distance}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      
      {/* Top Showrooms Section */}
      <View className="mt-4">
        {/* Title and View All Button */}
        <View className="flex-row justify-between items-center mb-2">
          <Text className="text-lg font-bold">Top Sales</Text>
          <TouchableOpacity>
            <Text className="text-sm text-red-500">View all</Text>
          </TouchableOpacity>
        </View>

        {/* Horizontal FlatList */}
        <FlatList
          horizontal
          data={showroomData}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 8 }}
          renderItem={({ item }) => (
            <TouchableOpacity
              className="bg-white shadow-md rounded-lg overflow-hidden w-[150px]"
              style={{ elevation: 3 }}
            >
              <ToyotaImage />
              <View className="p-2">
                <Text className="text-sm font-bold">{item.name}</Text>
                <Text className="text-xs text-gray-500">{item.distance}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      
      {/* Top Showrooms Section */}
      <View className="mt-4">
        {/* Title and View All Button */}
        <View className="flex-row justify-between items-center mb-2">
          <Text className="text-lg font-bold">Top Number Plates</Text>
          <TouchableOpacity>
            <Text className="text-sm text-red-500">View all</Text>
          </TouchableOpacity>
        </View>

        {/* Horizontal FlatList */}
        <FlatList
          horizontal
          data={showroomData}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 8 }}
          renderItem={({ item }) => (
            <TouchableOpacity
              className="bg-white shadow-md rounded-lg overflow-hidden w-[150px]"
              style={{ elevation: 3 }}
            >
              <ToyotaImage />
              <View className="p-2">
                <Text className="text-sm font-bold">{item.name}</Text>
                <Text className="text-xs text-gray-500">{item.distance}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>

         {/* Top Showrooms Section */}
         <View className="mt-4">
        {/* Title and View All Button */}
        <View className="flex-row justify-between items-center mb-2">
          <Text className="text-lg font-bold">Previous Searches</Text>
          <TouchableOpacity>
            <Text className="text-sm text-red-500">View all</Text>
          </TouchableOpacity>
        </View>

        {/* Horizontal FlatList */}
        <FlatList
          horizontal
          data={showroomData}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 8 }}
          renderItem={({ item }) => (
            <TouchableOpacity
              className="bg-white shadow-md rounded-lg overflow-hidden w-[150px]"
              style={{ elevation: 3 }}
            >
              <ToyotaImage />
              <View className="p-2">
                <Text className="text-sm font-bold">{item.name}</Text>
                <Text className="text-xs text-gray-500">{item.distance}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
