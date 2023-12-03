// Cart.js
import React from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import emailjs from 'emailjs-com';

const Cart = () => {
  const itemsInCart = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 15 },
    // Add more items as needed
  ];

  const getTotalPrice = () => {
    return itemsInCart.reduce((total, item) => total + item.price, 0);
  };

  const handlePaymentSuccess = (details, data) => {
    console.log('Payment successful', details);

    // Extract user's email from payment details
    const userEmail = details.payer.email_address;

    // Send confirmation email using Email.js
    sendConfirmationEmail(userEmail);
  };

  const handlePaymentError = (error) => {
    console.error('Payment failed', error);
    // Add logic to handle payment failure
  };

  const handlePaymentCancel = () => {
    console.log('Payment canceled');
    // Add logic to handle payment cancellation
  };

  const sendConfirmationEmail = (userEmail) => {
    const templateParams = {
      to_email: userEmail,
      subject: 'Order Confirmation',
      message: 'Thank you for your order! Your payment was successful.',
    };

    emailjs.send(
      process.env.REACT_APP_EMAIL_SERVICE_ID,
      process.env.REACT_APP_EMAIL_TEMPLATE_ID,
      templateParams,
      process.env.REACT_APP_EMAIL_USER_ID
    )
      .then((response) => {
        console.log('Email sent successfully', response);
      })
      .catch((error) => {
        console.error('Failed to send email', error);
      });
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {itemsInCart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <div>Total: ${getTotalPrice()}</div>
      <PayPalButton
        amount={getTotalPrice()}
        onSuccess={handlePaymentSuccess}
        onError={handlePaymentError}
        onCancel={handlePaymentCancel}
      />
    </div>
  );
};

export default Cart;
