const inirialstate  = {
           token:null,

           Cart:[],

           countCart:0,
           
           TotalPrice:0,

};

const reducer = (state = inirialstate, action) =>  {
        if(action.type === 'add'){
            let TotalPriceNew=0;
            if(action.Pants==="yes")
            TotalPriceNew=state.TotalPrice+action.selectItem.praic+20;
            else
            TotalPriceNew=state.TotalPrice+action.selectItem.praic;
            return {
                ...state,
                Cart: state.Cart.concat({date: new Date() ,Measure:action.Measure,Pants:action.Pants,printing:action.printing,selectItem:action.selectItem}),
                TotalPrice:TotalPriceNew,
                countCart:state.countCart+1
            };
        };
        if(action.type === 'del'){
            let TotalPriceNew=0;
            if(action.pantsItem==="yes")
            TotalPriceNew=state.TotalPrice-action.praicItem-20;
            else
            TotalPriceNew=state.TotalPrice-action.praicItem;
            const updatedCart= state.Cart.filter(cart => cart.date !== action.cartId);
            return {
                ...state,
                Cart: updatedCart,
                TotalPrice:TotalPriceNew,
                countCart:state.countCart-1
            };
        };
        if(action.type === 'AdminLogin'){
            const updatedToken= action.token;
            return {
                ...state,
                token: updatedToken,
             
            };
        };
        return state;

};

export default reducer;