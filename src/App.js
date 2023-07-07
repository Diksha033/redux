import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useDispatch, useSelector} from 'react-redux';
import { Fragment, useEffect } from 'react';
import Notification from './components/UI/Notification';
import { fetchdata, sendcartdata } from './store/cart-actions';

// let initial=true;

function App() {
  
  const cartdata=useSelector(state=>state.cart)
  const showcart=useSelector(state=>state.ui.showcart);
  const notification=useSelector(state=>state.ui.notification);
  const dispatch=useDispatch();

  useEffect(()=>{

    dispatch(fetchdata());
  },[dispatch])

  useEffect(()=>{
   
//     const senddata=async()=>{

//       dispatch(uiactions.shownotification({
//         status:'pending',
//         title:'sending',
//         message:'sending order data...',
//       }));
//     const response =await fetch('https://redux-store-fbd69-default-rtdb.firebaseio.com/cart.json',{
//       method:'PUT',
//       body:JSON.stringify(cartdata)
//     });
//     if(!response.ok){
//       throw new Error("sending cart data failed!")
//     }
//     dispatch(uiactions.shownotification({
//       status:'success',
//       title:'sent',
//       message:'sent order data...',
//     }));
// }
// if(initial){
//   initial=false;
// return;
// }
if(cartdata.changed){
  dispatch(sendcartdata(cartdata));
}

    // senddata().catch(()=>{
    //   dispatch(uiactions.shownotification({
    //     status:'error',
    //     title:'failed',
    //     message:'failed to send order data...',
    //   }));
    // });

    },[cartdata,dispatch]);

  return (
    <Fragment>
    {notification && <Notification status={notification.status} title={notification.title} message={notification.message}/>}
    <Layout>
      {showcart && <Cart />}
      <Products />
    </Layout>
    </Fragment>
  );
}

export default App;
