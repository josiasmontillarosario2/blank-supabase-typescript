// utils/supabase.ts
import Constants from 'expo-constants';
import { createClient } from '@supabase/supabase-js';

// Extraer las variables de configuración desde app.json
const supabaseUrl = Constants.expoConfig?.extra?.SUPABASE_URL;
const supabaseAnonKey = Constants.expoConfig?.extra?.SUPABASE_ANON_KEY;

// Verificar que las variables estén definidas
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Faltan las configuraciones de Supabase en app.json');
}

// Crear y exportar el cliente de Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey);