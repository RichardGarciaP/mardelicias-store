export const currencyType = '$';
export const activeOpacity = 0.8;

export const ORDER_STATUS_DEFINITIONS = {
  PROCESSING: 'procesando',
  DISPATCH: 'enviado',
  DELIVERED: 'entregado',
};

export const TAB_LIST = [
  {
    id: ORDER_STATUS_DEFINITIONS.PROCESSING,
    name: 'orders.processing',
    active: true,
  },
  {
    id: ORDER_STATUS_DEFINITIONS.DISPATCH,
    name: 'orders.progress',
    active: false,
  },
  {
    id: ORDER_STATUS_DEFINITIONS.DELIVERED,
    name: 'orders.success',
    active: false,
  },
];
