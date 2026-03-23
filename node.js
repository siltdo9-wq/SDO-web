const stripe = require('stripe')('sk_VOTRE_CLE_SECRETE');

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [{
      price_data: {
        currency: 'eur',
        product_data: { name: req.body.description },
        unit_amount: req.body.amount,
      },
      quantity: 1,
    }],
    mode: 'payment',
    success_url: 'https://sdo-web.be/merci',
    cancel_url: 'https://sdo-web.be/devis',
  });
  res.json({ id: session.id });
});
