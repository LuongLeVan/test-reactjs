import products from "../assets/fake-data/products";

const initialState = {
    allItem: products,
    filterItem: products,
    items: [],
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        console.log('Adding to cart:', action.payload);
        return {
          ...state,
          items: [...state.items, action.payload],
        };
      case 'REMOVE_FROM_CART':
        return {
          ...state,
          items: state.items.filter(item => item.id !== action.payload),
        };
      case 'INCREASE_FROM_CART':
        return {
          ...state,
          items: state.items.map(item => (
            item.id === action.payload ? {...item, quantity: item.quantity + 1} : item
          ))
        }
        case 'DECREASE_FROM_CART':
          return {
            ...state,
            items: state.items.map(item => (
              item.id === action.payload ? {...item, quantity: item.quantity - 1} : item
            ))
          }
        case 'FILTER_PRODUCT_BY_CATEGORY':
        const  filterItem = state.allItem.filter(item => item.category === action.payload).slice(0,6);
          return {
            ...state,
            filterItem
          }
      default:
        return state;
    }
  };
  
  export default cartReducer;
  