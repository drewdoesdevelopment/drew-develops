import { createClient } from "@supabase/supabase-js";
import { env } from '$env/dynamic/private';

const supabaseUrl = env.PRIVATE_SUPABASE_URL;
const supabaseKey = env.PRIVATE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);
