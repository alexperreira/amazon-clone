const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const { response } = require('express');
const stripe = require('stripe')(
	'sk_test_51JWZsLF7mzhhDN9XmGyYIC6DHNOaBoKsT0qDPKoR3BYjOBYVfB4FMBmkVZtkJa5FC6OTl8mbxqfLv0y0RBzrzA3x00WGM91Dnr'
);

// API

// App config
const app = express();

// Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get('/', (req, res) => res.status(200).send('hello world'));

app.post('/payments/create', async (req, res) => {
	const total = req.query.total; //req.params?
	console.log('Payment Request Received for the amount of:', total);

	const paymentIntent = await stripe.paymentIntent.create({
		amount: total,
		currency: 'usd',
	});
	// OK - Created
	res.status(201).send({
		clientSecret: paymentIntent.client_secret,
	});
});

// Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/react-app-clone-b5f63/us-central1/api
