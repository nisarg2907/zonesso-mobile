// import { NativeStackScreenProps } from "@react-navigation/native-stack";
// import { View,Image, Text,ScrollView, TouchableOpacity } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { HomeStackParamList } from "../types/navigation";
// import CarWash from '../../assets/images/CarWashBooking.png'
// import BackVector from "../../assets/svg/carwashcompanyscreen/backVector.svg";
// type Props = NativeStackScreenProps<
//   HomeStackParamList,
//   "CarWashCompanyScreen"
// >;
// const CarServiceScreen = ({route,navigation}:Props) => {
//   return (
//     <SafeAreaView className="flex-1 mb-[74px] bg-gray-50">
//         <ScrollView>
//       <View >
//       <Image source={CarWash} className="w-full h-[280px]" />
//       <View className="p-4 bg-white">
//         <View className="flex-row justify-between items-center">
//           <Text className="font-nunito text-2xl font-bold">Car Wash</Text>
//         </View>
//         <Text className="mt-2 font-nunito">
//           Our car wash service offers a comprehensive cleaning solution for your vehicle. 
//         </Text>
//       </View>

// {/* Back Button */}
// <TouchableOpacity className="absolute top-8 left-[24px] bg-gray-50 rounded-xl p-3">
//   <BackVector />
// </TouchableOpacity>

     
//       </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default CarServiceScreen;
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Image, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { HomeStackParamList } from "../types/navigation";
import CarWash from '../../assets/images/CarWashBooking.png';
import BackVector from "../../assets/svg/carwashcompanyscreen/backVector.svg";

type Props = NativeStackScreenProps<
  HomeStackParamList,
  "CarWashCompanyScreen"
>;

const CarServiceScreen = ({ route, navigation }: Props) => {
  const services = [
    {
      id: 1,
      name: 'Classic Clean',
      price: 150,
      duration: '35-50 minutes',
      features: [
        'Eco-chic water wash',
        'Premium scratch free micro-fibre towels',
        'Luxury wax hand wash'
      ],
      tags: ['Exterior', 'Water']
    },
    {
      id: 2,
      name: 'Classic Clean + Interior',
      price: 250,
      duration: '60-70 minutes',
      tags: ['Exterior', 'Interior', 'Water']
    }
  ];

  const vehicles = [
    {
      id: 1,
      name: 'Lamborghini Aventador',
      plate: 'AE 123456',
      selected: true
    },
    {
      id: 2,
      name: 'Nissan Patrol',
      plate: 'PLATE 12345',
      selected: false
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity 
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <BackVector />
          </TouchableOpacity>
          <Image source={CarWash} style={styles.headerImage} />
        </View>

        {/* Title Section */}
        <View style={styles.titleSection}>
          <Text style={styles.title}>Car Wash</Text>
          <Text style={styles.subtitle}>
            Special Discounted Offer For Car Wash & Car Wash Premium with Steam At Home.
          </Text>
        </View>

        {/* Date Time Picker */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Select Date & Time</Text>
          <TouchableOpacity style={styles.dateTimePicker}>
            <Text>3 March 2024 - 4:00 PM</Text>
          </TouchableOpacity>
        </View>

        {/* Location Selection */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Please choose preferred location</Text>
          {['Perfect Spot Auto Spa', 'Home Service'].map((location, index) => (
            <TouchableOpacity 
              key={index}
              style={[
                styles.selectionBox,
                index === 0 && styles.selectedBox
              ]}
            >
              <Text style={styles.locationName}>{location}</Text>
              <Text style={styles.locationAddress}>
                {index === 0 ? 'Deira, Dubai, United Arab Emirates' : 'Saved Address: Nasa Bldg, Deira, Dubai, UAE'}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Vehicle Selection */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Please choose your vehicle</Text>
          {vehicles.map((vehicle, index) => (
            <TouchableOpacity 
              key={index}
              style={[
                styles.selectionBox,
                vehicle.selected && styles.selectedBox
              ]}
            >
              <Text style={styles.vehicleName}>{vehicle.name}</Text>
              <Text style={styles.plateNumber}>{vehicle.plate}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity style={styles.addVehicleButton}>
            <Text style={styles.addVehicleText}>+ Add new vehicle</Text>
          </TouchableOpacity>
        </View>

        {/* Service Selection */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Select type of Car wash</Text>
          {services.map((service, index) => (
            <TouchableOpacity 
              key={index}
              style={[
                styles.serviceBox,
                index === 0 && styles.selectedBox
              ]}
            >
              <View style={styles.serviceHeader}>
                <Text style={styles.serviceName}>{service.name}</Text>
                <Text style={styles.servicePrice}>AED {service.price}</Text>
              </View>
              <View style={styles.serviceTags}>
                {service.tags.map((tag, tagIndex) => (
                  <View key={tagIndex} style={styles.tag}>
                    <Text style={styles.tagText}>{tag}</Text>
                  </View>
                ))}
              </View>
              {service.features && (
                <View style={styles.features}>
                  {service.features.map((feature, featureIndex) => (
                    <Text key={featureIndex} style={styles.feature}>
                      ✓ {feature}
                    </Text>
                  ))}
                </View>
              )}
              <Text style={styles.duration}>{service.duration}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Confirm Button */}
        <TouchableOpacity onPress={()=>navigation.navigate("PaymentScreen")} style={styles.confirmButton}>
          <Text style={styles.confirmButtonText}>
            Confirm Classic Clean
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  marginBottom: 74,
  },
  header: {
    position: 'relative',
    height: 200,
  },
  headerImage: {
    width: '100%',
    height: '100%',
  },
  backButton: {
    position: 'absolute',
    top: 16,
    left: 16,
    zIndex: 1,
    padding: 8,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  titleSection: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },
  dateTimePicker: {
    padding: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },
  selectionBox: {
    padding: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 8,
  },
  selectedBox: {
    borderColor: '#ff4444',
    backgroundColor: '#fff1f1',
  },
  locationName: {
    fontSize: 16,
    fontWeight: '500',
  },
  locationAddress: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  vehicleName: {
    fontSize: 16,
    fontWeight: '500',
  },
  plateNumber: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  addVehicleButton: {
    padding: 16,
    borderWidth: 1,
    borderColor: '#ff4444',
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  addVehicleText: {
    color: '#ff4444',
    fontSize: 16,
  },
  serviceBox: {
    padding: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 12,
  },
  serviceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  serviceName: {
    fontSize: 16,
    fontWeight: '600',
  },
  servicePrice: {
    fontSize: 16,
    color: '#ff4444',
    fontWeight: '600',
  },
  serviceTags: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  tag: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
    marginRight: 8,
  },
  tagText: {
    color: 'white',
    fontSize: 12,
  },
  features: {
    marginVertical: 8,
  },
  feature: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  duration: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  confirmButton: {
    backgroundColor: '#ff4444',
    padding: 16,
    borderRadius: 8,
    marginHorizontal: 16,
    marginVertical: 24,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default CarServiceScreen;