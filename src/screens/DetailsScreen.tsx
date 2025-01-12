import { ScrollView, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../types/navigation';
import CarDetailOne from '../../assets/svg/cardetailscreen/CarDetailIconOne.svg'
import CarDetailTwo from '../../assets/svg/cardetailscreen/CarDetailIconTwo.svg'
import CarWashSharjah from '../../assets/svg/cardetailscreen/CarWashSarjah.svg'
import DubaiLogo from '../../assets/svg/cardetailscreen/logoCarDetailI.svg'
import RenderList from '../components/RenderList';
import ToyotaLogoImage from "../../assets/svg/homescreen/ToyotaLogo.svg";
type Props = NativeStackScreenProps<HomeStackParamList, 'CarWashDetailsScreen'>;

export default function DetailsScreen({ route, navigation }: Props) {
  const DubaiData = [
    {
      id: "1",
      name: "A Car Wash & D....",
      distance: "1.2 km",
      image: CarDetailOne,
      logo: DubaiLogo,
    },
    {
      id: "2",
      name: "A Car Wash & D....",
      distance: "1.2 km",
      image: CarDetailTwo,
      logo: DubaiLogo,
    },
    {
      id: "3",
      name: "A Car Wash & D....",
      distance: "1.2 km",
      image: CarDetailOne,
      logo: DubaiLogo,
    },
  ];

  const SharjahData = [
    {
      id: "1",
      name: "B Car Wash & D....",
      distance: "2.5 km",
      image: CarWashSharjah,
    },
    {
      id: "2",
      name: "B Car Wash & D....",
      distance: "2.5 km",
      image: CarWashSharjah,
    },
    {
      id: "3",
      name: "B Car Wash & D....",
      distance: "2.5 km",
      image: CarWashSharjah,
    },
  ];

  const AbuDhabiData = [
    {
      id: "1",
      name: "Toyota Motors",
      distance: "3.0 km",
      image: CarDetailOne,
      logo: ToyotaLogoImage,
    },
    {
      id: "2",
      name: "Toyota Motors",
      distance: "3.0 km",
      image: CarDetailTwo,
      logo: ToyotaLogoImage,
    },
    {
      id: "3",
      name: "Toyota Motors",
      distance: "3.0 km",
      image: CarDetailOne,
      logo: ToyotaLogoImage,
    },
  ];

  return (
    <ScrollView className="flex-1 mb-[74px] bg-white px-4">
       
       <View className='mt-4'>
       <RenderList
        data={DubaiData.map((item) => ({
          ...item,
          image: ({ width, height }) => (
            <item.image width={width} height={height} />
          ),
          logo: ({ width, height }) => (
            <item.logo width={width} height={height} />
          ),
        }))}
        title="Dubai"
        gapBetweenTitleAndList={22}
        itemGap={14}
        itemHeight={120}
        itemWidth={153}
      />
        </View>
            
       <View className='mt-4'>
       <RenderList
        data={SharjahData.map((item) => ({
          ...item,
          image: ({ width, height }) => (
            <item.image width={width} height={height} />
          ),
        }))}
        title="Sharjah"
        gapBetweenTitleAndList={22}
        itemGap={14}
        itemHeight={120}
        itemWidth={153}
      />
        </View>
            
       <View className='mt-4'>
       <RenderList
        data={AbuDhabiData.map((item) => ({
          ...item,
          image: ({ width, height }) => (
            <item.image width={width} height={height} />
          ),
          logo: ({ width, height }) => (
            <item.logo width={width} height={height} />
          ),
        }))}
        title="Abu Dhabi"
        gapBetweenTitleAndList={22}
        itemGap={14}
        itemHeight={120}
        itemWidth={153}
      />
        </View>
    </ScrollView>
  );
}
