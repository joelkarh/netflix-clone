import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import '../css/planScreen.css';
import {selectUser} from '../features/userSlice';
import db from '../firebase'
import {loadStripe} from '@stripe/stripe-js'


const PlanScreen = () => {
    const [subscription,setSubscription] = useState(null) 
    const user = useSelector(selectUser)
    const [products,
        setProducts] = useState([]) // getting the products from stripe empty array
    useEffect(() => {
        db.collection('customers')
        .doc(user.uid)
        .collection('subscriptions')
        .get()
        .then((querySnapshot) =>{
            querySnapshot.forEach(async (subscription) => {
                setSubscription({
                    role: subscription.data().role,
                    current_period_end:subscription.data().current_period_end.seconds,
                    current_period_start: subscription.data().current_period_start.seconds,
                })
            })
        })
    }, [user.uid]) 
    console.log(subscription)   
    useEffect(() => {
        // fetching data from stripe because stripe populates firebase database  with
        // products
        const productColletction = db.collection('products');
            productColletction 
            .where('active', '==', true)
            .get()
            .then((querySnapshot) => { // collection / Where are firebase variable
                const products = {};
                querySnapshot.forEach(async (productDoc) => {
                    products[productDoc.id] = productDoc.data();
                    const priceSnap = await productDoc
                        .ref
                        .collection('prices')
                        .get();
                    priceSnap
                        .docs
                        .forEach((price) => {
                            products[productDoc.id].prices = {
                                priceId: price.id,
                                priceData: price.data()
                            }
                        })
                })
                setProducts(products);
            })
    }, [])
    console.log(products)
     // gives me a object
    const loadCheckout = async(priceId) => {
        const docRef = await db
            .collection('customers')
            .doc(user.uid)
            .collection("checkout_sessions").add({
                price: priceId,
                success_url: window.location.origin, // we come back on this screen
                cancel_url: window.location.origin
            });
        docRef.onSnapshot(async (snap) => {
            const {error, sessionId} = snap.data();
            if (error) {
                // show an error to  your customer and inspect your cloud function logs in
                // firebase console
                alert(`An error occured: ${error.message}`)
            }
            if (sessionId) {
                //We have a session, lets redirect to checkout init  Stripe
                const stripe = await loadStripe('pk_test_51JLvPzCXcQxFInnkKoHCwYL2vN72jZTIy8Uzv36FX0yFrfuHjWYbunt5gnF7lrjvivGdhy2h3EUW3ueVowTlLY7G007qzo0caO');
                    stripe.redirectToCheckout({sessionId})
            }
        })

    } // this should redirect us to the
    return (
        <div className="plan_Screen">
            {Object
                .entries(products)
                .map(([productId, productData]) => {
                    //TODO add some logic to check if user's subscription is active...
                    const isCurrentPackage = productData.name?.toLowerCase().includes(subscription?.role)
                    return (
                        <div key={productId} 
                        className={`${
                            isCurrentPackage && "planScreen__plan--disabled"}
                            planScreen__plan`}>
                            <div className="planScreen__Info">
                                {subscription && <p>Renewal date {new Date(subscription?.current_period_end * 1000).toLocaleDateString()}</p>}
                                
                                <h5>{productData.name}</h5>
                                <h6>{productData.description}</h6>
                            </div>
                            <button onClick={() => !isCurrentPackage && loadCheckout(productData.prices.priceId)}>
                            {isCurrentPackage ? 'Current Package' : 'Subscribe'}
                            </button>
                            
                        </div>
                    )
                })
        }
        {/**prod_JzwkAJPhjgtEPd:productId/ active: true
description: "720p"
images: []
metadata: {}
name: "Basic plan"
prices: {priceId: "price_1JLwqeCXcQxFInnk9JBzBskt", priceData: {…}}
role: null
tax_code: null = PRODUCTDATA */
        } </div>
    )
}

export default PlanScreen
