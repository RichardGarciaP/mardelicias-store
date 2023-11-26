import { supabase } from "./client";

export const signInWithEmail = async ({email, password}) => {
  return await supabase.auth.signInWithPassword({email, password});
};

export const signOut = async () => {
  return await supabase.auth.signOut();
};
