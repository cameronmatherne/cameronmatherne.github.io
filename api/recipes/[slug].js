// import { createClient } from '@supabase/supabase-js';

// const supabase = createClient(
//   process.env.SUPABASE_URL,
//   process.env.SUPABASE_ANON_KEY
// );

// export default async function handler(req, res) {
//   const { slug } = req.query;

//   const { data, error } = await supabase
//     .from('recipes')
//     .select('id')
//     .eq('slug', slug)
//     .single();

//   if (error) return res.status(500).json({ error: error.message });

//   res.json({ allowed: !!data }); // true if recipe exists / free, false if not
// }


// todo: set up actual connection to supabase