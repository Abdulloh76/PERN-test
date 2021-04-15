const defaultState = {
  types: [
    { id: 1, name: 'Fridges' },
    { id: 2, name: 'Smartphones' },
    { id: 3, name: 'Cleaners' },
    { id: 4, name: 'Laptops' },
  ],
  brands: [
    { id: 1, name: 'Samsung' },
    { id: 2, name: 'Apple' },
    { id: 3, name: 'Lenovo' },
    { id: 4, name: 'LG' },
  ],
  devices: [
    { id: 1, name: 'Iphone 12 Pro Max', price: 1500, rating: 3, img: 'https://img.router-switch.com/media/customoptions/129/2/4/iphone-12-pro-max-blue.jpg' },
    { id: 2, name: 'Iphone 12 Pro Max', price: 1500, rating: 3, img: 'https://img.router-switch.com/media/customoptions/129/2/4/iphone-12-pro-max-blue.jpg' },
    { id: 3, name: 'Iphone 12 Pro Max', price: 1500, rating: 3, img: 'https://img.router-switch.com/media/customoptions/129/2/4/iphone-12-pro-max-blue.jpg' },
    { id: 4, name: 'Iphone 12 Pro Max', price: 1500, rating: 3, img: 'https://img.router-switch.com/media/customoptions/129/2/4/iphone-12-pro-max-blue.jpg' },
    { id: 5, name: 'Iphone 12 Pro Max', price: 1500, rating: 3, img: 'https://img.router-switch.com/media/customoptions/129/2/4/iphone-12-pro-max-blue.jpg' },
    { id: 6, name: 'Iphone 12 Pro Max', price: 1500, rating: 3, img: 'https://img.router-switch.com/media/customoptions/129/2/4/iphone-12-pro-max-blue.jpg' },
    { id: 7, name: 'Iphone 12 Pro Max', price: 1500, rating: 3, img: 'https://img.router-switch.com/media/customoptions/129/2/4/iphone-12-pro-max-blue.jpg' },
  ],
  selectedType: {},
  selectedBrand: {},
  page: 1,
  totalCount: 0,
  limit: 3
};

const SET_TYPES = 'SET_TYPES';
const SET_BRANDS = 'SET_BRANDS';
const SET_DEVICES = 'SET_DEVICES';
const SET_SELECTED_TYPE = 'SET_SELECTED_TYPE';
const SET_SELECTED_BRAND = 'SET_SELECTED_BRAND';
const SET_PAGE = 'SET_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';

export const deviceReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_TYPES:
      return { ...state, types: action.payload };
    case SET_BRANDS:
      return { ...state, brands: action.payload };
    case SET_DEVICES:
      return { ...state, devices: action.payload };
    case SET_SELECTED_TYPE:
      return { ...state, selectedType: action.payload };
    case SET_SELECTED_BRAND:
      return { ...state, selectedBrand: action.payload };
    case SET_PAGE:
      return { ...state, page: action.payload };
    case SET_TOTAL_COUNT:
      return { ...state, totalCount: action.payload };
    default:
      return state;
  }
};

export const setTypesAction = (payload) => ({ type: SET_TYPES, payload })
export const setBrandsAction = (payload) => ({ type: SET_BRANDS, payload })
export const setDevicesAction = (payload) => ({ type: SET_DEVICES, payload })
export const setSelectedTypeAction = (payload) => ({ type: SET_SELECTED_TYPE, payload })
export const setSelectedBrandAction = (payload) => ({ type: SET_SELECTED_BRAND, payload })
export const setPageAction = (payload) => ({ type: SET_PAGE, payload })
export const setTotalCountAction = (payload) => ({ type: SET_TOTAL_COUNT, payload })
