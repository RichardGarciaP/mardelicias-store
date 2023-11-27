import {PostgrestSingleResponse} from '@supabase/supabase-js';
import {supabase} from './client';
import {Order} from '@/shared/DTO';

export const getOrders = async (
  user_id: string,
): Promise<PostgrestSingleResponse<Order[]>> =>
  await supabase
    .from('orders')
    .select(
      '*, users!orders_user_id_fkey (first_name, last_name, direction), orders_driver_user_fkey (id, first_name, last_name, phone)',
    )
    .order('created_at', {ascending: false})
    .eq('user_id', user_id);
