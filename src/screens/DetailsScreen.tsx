import { View, Text, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

export default function DetailsScreen({ route, navigation }: Props) {
  const { itemId } = route.params;
  
  return (
    <View className="flex-1 items-center justify-center">
      <Text>Details Screen</Text>
      <Text>Item ID: {itemId}</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
