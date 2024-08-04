import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

export async function sendData(changes) {
  const { error, data } = await supabase
    .from("connect-submissions")
    .upsert([changes])
    .select();

    if (error) {
        console.log(error);
    }
}
