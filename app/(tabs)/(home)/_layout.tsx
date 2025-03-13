// app/(tabs)/(home)/_layout.tsx
import { Stack } from 'expo-router';
import { ProtectedRoute } from '../../../components/ProtectedRoute';

export default function HomeLayout() {
  return (
    <ProtectedRoute>
      <Stack>
        <Stack.Screen name="index" options={{ title: 'Home' }} />
        <Stack.Screen name="details" options={{ title: 'Details' }} />
      </Stack>
    </ProtectedRoute>
  );
}