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
  itemGap?: number;
  gapBetweenTitleAndList?: number;
  itemWidth?: number;
  itemHeight?: number;
  onViewAll?: () => void;
}

const RenderListItem: React.FC<{ item: Item; itemWidth?: number; itemHeight?: number }> = ({ item, itemWidth = 152, itemHeight = 120 }) => {
  return (
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
        <item.image width={itemWidth} height={itemHeight} />
        <View className="flex flex-col p-2 gap-1">
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
  );
};

const RenderList: React.FC<RenderListProps> = ({ data, title, itemGap=4, gapBetweenTitleAndList = 12, itemWidth, itemHeight, onViewAll }) => {
  return (
    <View className="mb-4">
      <View className="flex-row justify-between items-center" style={{ marginBottom: gapBetweenTitleAndList }}>
        <Text className="text-[18px] font-bold text-black">{title}</Text>
        <TouchableOpacity onPress={onViewAll}>
          <Text className="text-sm text-[#FF4444]">View all</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal
        data={data}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: itemGap }} 
        renderItem={({ item }) => <RenderListItem item={item} itemWidth={itemWidth} itemHeight={itemHeight} />}
      />
    </View>
  );
};

export default RenderList;
