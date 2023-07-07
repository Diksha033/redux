import { cartactions } from "./cart-slice";
import { uiactions } from "./ui-slice";

export const sendcartdata=(cartdata)=>{
    return async(dispatch)=>{
        dispatch(uiactions.shownotification({
            status:'pending',
            title:'sending',
            message:'sending order data...'
          }));

        const sendrequest=async()=>{
       
          const response =await fetch('https://redux-store-fbd69-default-rtdb.firebaseio.com/cart.json',{
            method:'PUT',
            body:JSON.stringify({items:cartdata.items,totalquantity:cartdata.totalquantity}
                )
          });
          if(!response.ok){
            throw new Error("sending cart data failed!")
          }
        }
          try{
            await sendrequest();

            dispatch(uiactions.shownotification({
                status:'success',
                title:'sent',
                message:'sent order data...',
              }));
          }
          catch(error){
            dispatch(uiactions.shownotification({
                status:'error',
                title:'failed',
                message:'failed to send order data...',
              }));
          }
    }
}

export const fetchdata=()=>{
    return async(dispatch)=>{
const ketchdata =async()=>{
   const response = await fetch('https://redux-store-fbd69-default-rtdb.firebaseio.com/cart.json')

if(!response.ok){
    throw new Error(' error ');
}
const data = await response.json();
return data;
    }
    try{
   const cartdata = await ketchdata()
   dispatch(cartactions.replacecart({
    items:cartdata.items || [],
    totalquantity:cartdata.totalquantity,
   }))
    }
    catch(error){
        dispatch(uiactions.shownotification({
            status:'error',
            title:'failed',
            message:'failed to send order data...',
          }));  
    }
}
}
