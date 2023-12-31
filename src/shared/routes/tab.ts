import Home from '@/modules/private/home';
import {
  home as HomeIcon,
  shippingCart,
  user as UserIcon,
  shoppingBag,
} from '@/shared/assets/icons';
import Cart from '@/modules/private/cart';
import Profile from '@/modules/private/profile';
import Orders from '@/modules/private/orders';

export default [
  {
    id: '1',
    displayName: 'general.home',
    name: 'homeTab',
    icon: HomeIcon,
    component: Home,
  },
  {
    id: '2',
    displayName: 'general.bag',
    name: 'shop',
    icon: shippingCart,
    component: Cart,
  },
  {
    id: '3',
    displayName: 'general.orders',
    name: 'orders',
    icon: shoppingBag,
    component: Orders,
  },
  {
    id: '4',
    displayName: 'general.profile',
    name: 'profile',
    icon: UserIcon,
    component: Profile,
  },
];
