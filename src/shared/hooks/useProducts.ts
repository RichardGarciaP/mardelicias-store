import useSWR from 'swr';
import {ProductsStore} from '../DTO';
import {PostgrestError} from '@supabase/supabase-js';
import {getProducts} from '../helpers/services/products';

interface UseProductsProps {
  data: ProductsStore[] | null | undefined;
  isLoading: boolean;
  isValidating: boolean;
  error: PostgrestError | null;
}

const useProducts = (): UseProductsProps => {
  const ENTITY = 'products';

  const response = useSWR(`/${ENTITY}`, () => getProducts());
  return {
    ...response,
    data: response.data?.data,
  };
};

export default useProducts;
