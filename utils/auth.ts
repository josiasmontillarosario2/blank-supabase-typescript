// utils/auth.ts
import { supabase } from './supabase';
import { signInWithOAuth } from './oauthAuth';


export async function login(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw error;
  return data;
}

export async function signup(email: string, password: string) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  if (error) throw error;
  return data;
}

export async function getUser() {
  const { data, error } = await supabase.auth.getUser();
  if (error) throw error;
  return data.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}

export { signInWithOAuth };


/*
export async function signInWithGoogle() {
  const redirectUri = Linking.createURL('auth/callback');
  console.log('Redirect URI generada:', redirectUri); // Para depurar
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: redirectUri,
    },
  });
  if (error) throw error;
  return data;
}*/