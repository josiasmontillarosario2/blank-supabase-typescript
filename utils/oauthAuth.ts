// utils/oauthAuth.ts
import { supabase } from './supabase';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri } from 'expo-auth-session';
import { Provider } from '@supabase/supabase-js';

export async function signInWithOAuth(provider: Provider) {
  try {
    const redirectUrl = makeRedirectUri({
      scheme: 'yourappscheme',
    });

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: redirectUrl,
      },
    });

    if (error) throw error;

    if (data.url) {
      const result = await WebBrowser.openAuthSessionAsync(
        data.url,
        redirectUrl
      );

      if (result.type === 'success') {
        return true;
      }
    }

    return false;
  } catch (error) {
    console.error(`Error en ${provider} SignIn:`, error);
    throw error;
  }
}