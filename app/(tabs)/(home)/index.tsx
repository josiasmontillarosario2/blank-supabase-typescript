// app/(tabs)/(home)/index.tsx
import { View, Text, Button } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { logout } from 'utils/auth';

export default function HomeScreen() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logout();
      router.replace('/(auth)/login');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  }
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home (Protegida)</Text>
      <Link href="/(tabs)/(home)/details">Ir a Detalles</Link>
      <Button title="Cerrar sesión" onPress={handleLogout} />
    </View>
  );
}