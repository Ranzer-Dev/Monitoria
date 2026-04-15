import { createClient } from '@supabase/supabase-js';

// Substitua pelos valores do seu projeto Supabase
const supabaseUrl = 'https://SEU-PROJETO.supabase.co';
const supabaseAnonKey = 'SUA-CHAVE-ANON';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
