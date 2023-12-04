import products from "../assets/fake-data/products";

const initialState = {
    allItem: products,
    filterItem: products,
    name: '',
    items: [],
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        const item = state.items.find(item => item.id === action.payload.id);
        if(item){
          return state;
        }else{

          return {
            ...state,
            items: [...state.items, action.payload],
          };
        }
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
              item.id === action.payload ? {...item, quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity} : item
            ))
          }
        case 'FILTER_PRODUCT_BY_CATEGORY':
        const  filterItem = state.allItem.filter(item => item.category === action.payload).slice(0,6);
          return {
            ...state,
            filterItem
          }
        case 'ENTER_NAME_FOR_THANK_YOU':
        return {
          ...state,
          name: action.payload
        }
      default:
        return state;
    }
  };
  
  export default cartReducer;
  