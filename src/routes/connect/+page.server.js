import { supabase } from '$lib/supaBaseClient.js'

/** @type {import('./$types').Actions} */
export const actions = {
	default: async () => {
        const { data, error } = await supabase
          .from('connect-submissions')
          .insert([
            { name: 'someValue', phone: 'otherValue', email: 'otherValue', note: 'otherValue' },
          ])
          .select()
	}
};
