// app/(auth)/login.tsx
import { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { login } from '../../utils/auth';
import { useRouter } from 'expo-router';
import { OAuthSignInButton } from '@components/OAuthSignInButton';


export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async () => {
    try {
      await login(email, password);
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
      <Button title="Iniciar sesión" onPress={handleLogin} />
      {error && <Text style={{ color: 'red' }}>{error}</Text>}

      <View>

      <OAuthSignInButton
        provider="google"
        buttonStyle={{
          backgroundColor: '#4285F4',
          borderRadius: 8,
          paddingVertical: 15,
        }}
        textStyle={{
          fontSize: 16,
          color: '#fff',
          fontWeight: '600',
        }}
      />

    </View>

    </View>
  );
}


