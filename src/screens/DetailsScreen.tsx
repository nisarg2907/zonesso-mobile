import { ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../types/navigation';

type Props = NativeStackScreenProps<HomeStackParamList, 'CarWashDetailsScreen'>;

export default function DetailsScreen({ route, navigation }: Props) {
  
  return (
    <ScrollView className="flex-1 mb-16 bg-white px-3">

    </ScrollView>
  );
}
