// app/(auth)/signup.tsx
import { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { signup } from '../../utils/auth';
import { useRouter } from 'expo-router';

export default function SignupScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSignup = async () => {
    try {
      await signup(email, password);
      router.replace('/(tabs)/(home)');
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, padding: 8, marginBottom: 10, width: 200 }}
      />
      <TextInput
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ borderWidth: 1, padding: 8, marginBottom: 10, width: 200 }}
      />
      <Button title="Registrarse" onPress={handleSignup} />
      {error && <Text style={{ color: 'red' }}>{error}</Text>}
    </View>
  );
}