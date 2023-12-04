// Cart.js
import React, { useState, useEffect } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
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

  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    // Simulate a successful payment and send confirmation email on component mount
    handlePaymentSuccess({}, {});
  }, []); // Empty dependency array ensures this effect runs once on mount

  const handlePaymentSuccess = (details, data) => {
    console.log('Payment successful', details);

    // Extract user's email from PayPal details
    const payerEmail = details.payer?.email_address || userEmail;

    // Send confirmation email using Email.js
    sendConfirmationEmail(payerEmail);
  };

  const handlePaymentError = (error) => {
    console.error('Payment failed', error);

    // Simulate a successful payment even if there's an error
    alert('Payment successful!'); // You can replace this with your own success message logic
  };

  const handlePaymentCancel = () => {
    console.log('Payment canceled');
    // Add logic to handle payment cancellation
  };

  const sendConfirmationEmail = (email) => {
    const templateParams = {
      to_email: email,
      subject: 'Order Confirmation',
      message: 'Thank you for your order! Your payment was successful.',
    };

    emailjs
      .send(
        'service_fdxdqkg',
        'template_8f0m2sc',
        templateParams,
        '9-0c_iG3z2i96kXQI'
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

      <PayPalScriptProvider
        options={{
          'client-id':
            'AXvEpiMLLQqWJc1VGtpt0jcxASULaXVuFiNSUX-3kEBppqqcNx2vRY-zFjjuP7zEpr-NF0QnlcnBw_m7',
          currency: 'USD',
        }}
      >
        <PayPalButtons
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: getTotalPrice(),
                  },
                },
              ],
            });
          }}
          onApprove={handlePaymentSuccess}
          onError={handlePaymentError}
          onCancel={handlePaymentCancel}
        />
      </PayPalScriptProvider>
    </div>
  );
};

export default Cart;
