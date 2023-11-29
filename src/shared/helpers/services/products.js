import {supabase} from './client';

export const getProducts = async () => {
  return await supabase.from('products').select('*');
};
