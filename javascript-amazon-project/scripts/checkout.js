import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checlout/paymentSummary.js';
import {loadProducts} from '../data/products.js';
//import '../data/cart-class.js';
//import '../data/backend-practice.js';


loadProducts(()=>{
renderOrderSummary();
renderPaymentSummary();
});
