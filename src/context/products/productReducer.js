import {
  GET_PRODUCTS,
  FETCH_ERROR,
  SET_PRODUCT,
  SET_LOADING,
  PRODUCT_ID_DOES_NOT_EXIST_ERROR,
} from '../types';

let reducer = (state, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case SET_PRODUCT:
      return {
        ...state,
        product: action.payload,
      };
    case FETCH_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case PRODUCT_ID_DOES_NOT_EXIST_ERROR:
      return {
        ...state,
        id_error: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    // case FILTER_CARDS:
    //   return {
    //     ...state,
    //     filtered: state.cards.filter((cards) => {
    //       const regex = new RegExp(`${action.payload}`, 'gi');
    //       return cards.title.match(regex) || cards.subtitle.match(regex);
    //     }),
    //   };

    default:
      return state;
  }
};

export default reducer;
