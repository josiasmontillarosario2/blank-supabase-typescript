// components/OAuthSignInButton.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { signInWithOAuth } from '../utils/oauthAuth';
import { Provider } from '@supabase/supabase-js';

interface OAuthSignInButtonProps {
  provider: Provider;
  buttonText?: string;
  buttonStyle?: StyleProp<ViewStyle>;  // Estilo para el botón
  textStyle?: StyleProp<TextStyle>;    // Estilo para el texto
}

export function OAuthSignInButton({
  provider,
  buttonText = `Iniciar sesión con ${provider}`,
  buttonStyle,
  textStyle,
}: OAuthSignInButtonProps) {
  const handleSignIn = async () => {
    try {
      const success = await signInWithOAuth(provider);
      if (success) {
        console.log(`Inicio de sesión con ${provider} exitoso`);
      }
    } catch (error) {
      console.error(`Error al iniciar sesión con ${provider}:`, error);
    }
  };

  return (
    <TouchableOpacity
      style={[buttonStyle]}
      onPress={handleSignIn}
    >
      <Text style={[textStyle]}>{buttonText}</Text>
    </TouchableOpacity>
  );
}

