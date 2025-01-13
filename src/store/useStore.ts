import {create} from 'zustand';
import { persist, PersistStorage } from 'zustand/middleware'; 
import AsyncStorage from '@react-native-async-storage/async-storage'; 

interface Service {
  name: string;
  location: string;
  timeDate: string;
}

interface Booking {
  service: Service;
}

interface AppState {
  userName: string;
  bookings: Booking[];
  addBooking: (booking: Booking) => void;
  removeBooking: (index: number) => void;
}

export const useStore = create<AppState>()(
  persist(
    (set) => ({
      userName: '',
      bookings: [],
      addBooking: (booking: Booking) => set((state: AppState) => ({ bookings: [...state.bookings, booking] })),
      removeBooking: (index: number) => set((state: AppState) => ({
        bookings: state.bookings.filter((_: Booking, i: number) => i !== index)
      })),
    }),
    {
      name: 'app-storage',
      storage: AsyncStorage as unknown as PersistStorage<AppState>,
    }
  )
);
