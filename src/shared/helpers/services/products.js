import {mutate} from 'swr';
import {supabase} from './client';

export const getProducts = async () => {
  return await supabase.from('products').select('*');
};

export const getFavoritesProducts = async () => {
  return await supabase.from('products').select('*').eq('is_favorite', true);
};

export const getProduct = async id =>
  await supabase.from('products').select().eq('id', id);

export const updateProduct = async data =>
  await supabase.from('products').update(data).eq('id', data?.id);

export const updateStock = async products => {
  products.forEach(product => {
    const stock = product.stock - product.qty;
    delete product.qty;

    updateProduct({...product, stock});
  });
  mutate('/products');
  mutate('/products/favorites');
};
