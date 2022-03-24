import React from 'react'
import AddressForm from '../AddressForm'
import PaymentForm from '../PaymentForm'
import Review from '../Review'
import OrderDetails from '../OrderDetails'
import { useParams } from 'react-router-dom'



const Checkout = () => {
    const { param } = useParams();
  
  return (
      <>
        {param === 'address' && <AddressForm />}
        {param === 'payment' && <PaymentForm />}
        {param === 'review' && <Review />}
        {param === 'orders' && <OrderDetails />}
      </>

  )
}

export default Checkout