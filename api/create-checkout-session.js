import Stripe from "stripe";

const stripe =
new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req,res){

const { amount } = req.body;

const session =
await stripe.checkout.sessions.create({

payment_method_types: ["card"],

line_items:[{

price_data:{

currency:"eur",

product_data:{
name:"Acompte SDO Web"
},

unit_amount: amount * 100,

},

quantity:1,

}],

mode:"payment",

success_url:
"https://sdo-web.be/client-space.html",

cancel_url:
"https://sdo-web.be/devis/devis.html",

});

res.json({

url: session.url

});

}
