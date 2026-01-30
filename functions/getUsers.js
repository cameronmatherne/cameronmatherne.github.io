import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY 
);

export async function handler(event, context) {
  const { data, error } = await supabase.from("users").select("*");
  return {
    statusCode: error ? 500 : 200,
    body: JSON.stringify(data || { error: error.message })
  };
}
