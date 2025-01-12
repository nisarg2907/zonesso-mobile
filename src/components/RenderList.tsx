import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

interface Item {
  id: string;
  name: string;
  distance: string;
  image: React.FC<{ width: number; height: number }>;
  logo?: React.FC<{ width: number; height: number }>;
}

interface RenderListProps {
  data: Item[];
  title: string;
}

const RenderList: React.FC<RenderListProps> = ({ data, title }) => {
  return (
    <View className="mb-4">
      <View className="flex-row justify-between items-center mb-2">
        <Text className="text-[18px] font-bold text-black">{title}</Text>
        <TouchableOpacity>
          <Text className="text-sm text-[#FF4444]">View all</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal
        data={data}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 8 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            className="w-[150px] bg-white rounded-lg overflow-hidden shadow-md mb-0.5"
            style={{
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.1,
              shadowRadius: 4,
              elevation: 3,
            }}
          >
            <View>
              <item.image width={152} height={120} />
              <View
                className="flex flex-col p-2 gap-1"
              >
                <View className="flex-row items-center">
                  {item.logo && <item.logo width={32} height={32} />}
                  <View>
                    <Text className="text-sm ml-2 font-medium text-black">
                      {item.name}
                    </Text>
                    <Text className="text-xs text-gray-500 ml-2">
                      {item.distance}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default RenderList;
