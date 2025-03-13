// components/ProtectedRoute.tsx
import React,{ useEffect } from 'react';
import { useRouter } from 'expo-router';
import { supabase } from '../utils/supabase';

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.replace('/(auth)/login');
      }
    };
    checkUser();
  }, [router]);

  return <>{children}</>;
}