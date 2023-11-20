import React from 'react';
import List from '@/shared/components/list';
import {View} from 'react-native';
import CardProduct from '@/shared/components/cardProduct';
import Typography from '@/shared/components/typography';
import {styles} from './styles';
import { getProducts } from '@/shared/helpers/services/products';

export const MOCKUP_PRODUCTS = [
  {
    id: '1',
    image: 'https://i.ibb.co/5Tk0vKM/Img-1.png',
    name: 'Variegated snake',
    category: 'Indoor',
    price: 20.0,
    size: 'Medium',
  },
  {
    id: '3',
    image: 'https://i.ibb.co/H2HKBWK/Img-3.png',
    name: 'Strelitzia Nicolai',
    category: 'Indoor',
    price: 25.0,
    size: 'Medium',
  },
  {
    id: '4',
    image: 'https://i.ibb.co/TbTvJpf/Img-4.png',
    name: 'Sansevieria Care',
    category: 'Indoor',
    price: 23.0,
    size: 'Medium',
  },
  {
    id: '5',
    image: 'https://i.ibb.co/BtqZ0NQ/Img-6.png',
    name: "Lady's Bedstraw",
    category: 'Indoor',
    price: 40.0,
    size: 'Medium',
  },
  {
    id: '2',
    image: 'https://i.ibb.co/XVKwc8Z/Img-2.png',
    name: 'Zamioculcas Zamiifolia',
    category: 'Indoor',
    price: 30.0,
    size: 'Medium',
  },
  {
    id: '6',
    image: 'https://i.ibb.co/K9FLKC0/Img.png',
    name: 'Croton Petra',
    category: 'Indoor',
    price: 10.0,
    size: 'Medium',
  },
];
export default function MostPopular() {
  const [products,setProducts] = React.useState([]);
  const fetchProducts = async () => {
    const productsFetched = await getProducts()
    setProducts(productsFetched.products)
    console.log('products',products)
  }
  
  function renderItem(item, key) {
    return <CardProduct product={item} key={key} />;
  }

  React.useEffect(()=>{
    fetchProducts()
  },[])

  return (
    <View>
      <Typography style={styles.titleSection}>Productos</Typography>
      {!products ? (
        <Typography style={styles.titleSection}>
          Productos no disponibles
        </Typography>
      ) : (
        <List between data={products} rows={2} renderItem={renderItem} />
      )}
    </View>
  );
}
