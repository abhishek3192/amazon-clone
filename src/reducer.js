export const initialState = {
    basket:[],
    user: null
}

// reduce basically performs action on each element of array example like (+, -) etc.
// [].reduce((accumulator, currentValue) => accumulator + currentValue)

export const getBasketTotal = (basket) => 
basket.reduce((amount, item) => amount+ item.price, 0);

function reducer(state, action) {
    console.log(action)
    switch(action.type){
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case 'REMOVE_FROM_BASKET':
            let new_basket = [...state.basket]
            console.log("new_basket", new_basket)
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)
            console.log(index)
            if(index >= 0){
                new_basket.splice(index, 1)
            }
            else{  
                console.warn(
                    `Can't remove product (id: ${action.id} as its not in basket)`
                )
            }
            return {
                ...state,
                basket: new_basket
            }
        default:
            return state;
    }
}

export default reducer;