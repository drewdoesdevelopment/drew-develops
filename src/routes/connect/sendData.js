import { createClient } from "@supabase/supabase-js";
import { goto } from '$app/navigation';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

function routeToPage(route, replaceState) {
   goto(`/${route}`, { replaceState }) 
}

export async function sendData(changes) {
  const { error, data } = await supabase
    .from("connect-submissions")
    .upsert([changes])
    .select();

    if (error) {
        console.log(error);
    } else {
        routeToPage('thank-you', true);
    }
}
