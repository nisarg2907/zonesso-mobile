import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SvgProps } from 'react-native-svg';
import ShareIcon from '../../assets/svg/cardetailscreen/ShareIcon.svg';
import HeartIcon from '../../assets/svg/cardetailscreen/HeartIcon.svg';
import CallSvg from '../../assets/svg/Call.svg'
import ChatSvg from '../../assets/svg/Chat.svg'
export enum BadgeType {
  None,
  Premium,
  Featured,
}

interface CarDetailCardProps {
  image: React.FC<SvgProps>;
  price: string;
  distance: string;
  title: string;
  description: string;
  location: string;
  postedDate: string;
  postedBy: string;
  logo: React.FC<SvgProps>;
  badgeType?: BadgeType;
  onChat?: () => void;
  onCall?: () => void;
  onServiceClick?:()=>void;
  onCompanyClick?:()=>void
}
interface CompanyServiceCardprops  {
  image: React.FC<SvgProps>;
  price: string;
  title: string;
  description: string;
  badgeType?: BadgeType;
  onImageClick?:()=>void
}

const CarDetailCard: React.FC<CarDetailCardProps> = ({
  image: Image,
  price,
  distance,
  title,
  description,
  location,
  postedDate,
  postedBy,
  logo: Logo,
  badgeType = BadgeType.None,
  onChat,
  onCall,
  onCompanyClick,
  onServiceClick
}) => {
  const getBadgeStyle = () => {
    switch (badgeType) {
      case BadgeType.Premium:
        return { backgroundColor: '#F36414', text: 'Premium' };
      case BadgeType.Featured:
        return { backgroundColor: '#23acec', text: 'Featured' };
      default:
        return null;
    }
  };

  const badgeStyle = getBadgeStyle();

  return (
    <View className=" relative w-[360px]  h-auto mt-2 bg-white rounded-lg border border-[#EAECF0] shadow-sm mb-4 self-center">
      <View className="relative w-full h-[223px]">
        <View className="w-full h-full">
          <TouchableOpacity onPress={onServiceClick}><Image /></TouchableOpacity>
          {badgeStyle && (
            <View className="absolute top-0 left-0 right-0 flex-row justify-between p-3">
              <View
                className={`rounded w-[94px] h-[23px] flex items-center justify-center`}
                style={{ backgroundColor: badgeStyle.backgroundColor }}
              >
                <Text className="text-white font-nunito text-[14px]">
                  {badgeStyle.text}
                </Text>
              </View>
              <View className="flex-row gap-4">
                <ShareIcon />
                <HeartIcon />
              </View>
            </View>
          )}
        </View>
      </View>

      <View className="p-4">
        <View className="flex-row justify-between items-center">
          <Text className="font-nunito text-base font-black">AED {price}</Text>
          <Text className="text-right text-[#475467] font-nunito text-xs font-semibold">
            {distance} away
          </Text>
        </View>

        <Text className="mt-2 text-[#1D2939] font-nunito text-base font-bold">
          {title}
        </Text>

        <Text className="mt-2 text-[#475467] font-nunito text-xs font-semibold">
          {description}
        </Text>

        <View className="flex-row items-center mt-4 gap-2">
          <TouchableOpacity onPress={onCompanyClick}>
            <Logo width={40} height={40} />
          </TouchableOpacity>
          <View className="flex-1">
            <View className="flex-row gap-2">
              <Text className="text-xs font-nunito font-semibold text-[#475467]">
                Location:
              </Text>
              <Text className="text-xs font-nunito font-semibold text-[#475467]">
                {location}
              </Text>
            </View>
            <View className="flex-row gap-2">
              <Text className="text-xs font-nunito font-semibold text-[#475467]">
                Posted on:
              </Text>
              <Text className="text-xs font-nunito font-semibold text-[#475467]">
                {postedDate}
              </Text>
            </View>
            <View className="flex-row gap-2">
              <Text className="text-xs font-nunito font-semibold text-[#475467]">
                Posted By:
              </Text>
              <Text className="text-xs font-nunito font-semibold text-[#475467]">
                {postedBy}
              </Text>
            </View>
          </View>
        </View>

        <View className="flex-row justify-between mt-4 gap-2">
          <TouchableOpacity
            onPress={onChat}
            className="flex-1 h-[32px] justify-center items-center border border-[#FDA29B] rounded"
          >
          <ChatSvg/>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onCall}
            className="flex-1 h-[32px] justify-center items-center bg-[#F04438] rounded"
          >
           <CallSvg/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export const CompanyServiceCard: React.FC<CompanyServiceCardprops> = ({
  image: Image,
  price,
  title,
  description,
  badgeType = BadgeType.None,
  onImageClick,
}) => {
  const getBadgeStyle = () => {
    switch (badgeType) {
      case BadgeType.Premium:
        return { backgroundColor: '#F36414', text: 'Premium' };
      case BadgeType.Featured:
        return { backgroundColor: '#23acec', text: 'Featured' };
      default:
        return null;
    }
  };

  const badgeStyle = getBadgeStyle();

  return (
    <View className=" relative w-[360px]  h-auto mt-2 bg-white rounded-lg border border-[#EAECF0] shadow-sm mb-4 self-center">
      <View className="relative w-full h-[223px]">
        <View className="w-full h-full">
          <TouchableOpacity onPress={onImageClick} ><Image /></TouchableOpacity>
          {badgeStyle && (
            <View className="absolute top-0 left-0 right-0 flex-row justify-between p-3">
              <View
                className={`rounded w-[94px] h-[23px] flex items-center justify-center`}
                style={{ backgroundColor: badgeStyle.backgroundColor }}
              >
                <Text className="text-white font-nunito text-[14px]">
                  {badgeStyle.text}
                </Text>
              </View>
              <View className="flex-row gap-4">
                <ShareIcon />
                <HeartIcon />
              </View>
            </View>
          )}
        </View>
      </View>

      <View className="p-4">
        <View className="flex-row justify-between items-center">
          <Text className="font-nunito text-base font-bold">{title}</Text>
          <Text className="font-nunito text-base font-black text-[#F04438]">AED {price}</Text>
        </View>

        <Text className="mt-2 text-[#475467] font-nunito text-xs font-semibold">
          {description}
        </Text>
      </View>
    </View>
  );
};

export default CarDetailCard;
