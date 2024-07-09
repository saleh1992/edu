/* 
<div class="cart-table table-responsive mb--60">
  <table class="table">
    <thead>
      <tr>
        <th class="pro-thumbnail">Image</th>
        <th class="pro-title">Product</th>
        <th class="pro-price">Price</th>
        <th class="pro-quantity">Quantity</th>
        <th class="pro-subtotal">Total</th>
        <th class="pro-remove">Remove</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="pro-thumbnail">
          <a href="#"
            ><img src="assets/images/product/1.jpg" alt="Product"
          /></a>
        </td>
        <td class="pro-title"><a href="#">Miracle Morning</a></td>
        <td class="pro-price"><span>$48.00</span></td>
        <td class="pro-quantity">
          <div class="pro-qty">
            <span class="dec qtybtn">-</span
            ><input
              type="text"
              value="1"
              spellcheck="false"
              data-ms-editor="true"
            /><span class="inc qtybtn">+</span>
          </div>
        </td>
        <td class="pro-subtotal"><span>$100.00</span></td>
        <td class="pro-remove">
          <a href="#"><i class="feather-x"></i></a>
        </td>
      </tr>
      <tr>
        <td class="pro-thumbnail">
          <a href="#"
            ><img src="assets/images/product/7.jpg" alt="Product"
          /></a>
        </td>
        <td class="pro-title"><a href="#">Happy Strong</a></td>
        <td class="pro-price"><span>$100.00</span></td>
        <td class="pro-quantity">
          <div class="pro-qty">
            <span class="dec qtybtn">-</span
            ><input
              type="text"
              value="2"
              spellcheck="false"
              data-ms-editor="true"
            /><span class="inc qtybtn">+</span>
          </div>
        </td>
        <td class="pro-subtotal"><span>$120.00</span></td>
        <td class="pro-remove">
          <a href="#"><i class="feather-x"></i></a>
        </td>
      </tr>
      <tr>
        <td class="pro-thumbnail">
          <a href="#"
            ><img src="assets/images/product/3.jpg" alt="Product"
          /></a>
        </td>
        <td class="pro-title"><a href="#">Rich Dad Poor Dad</a></td>
        <td class="pro-price"><span>$59.00</span></td>
        <td class="pro-quantity">
          <div class="pro-qty">
            <span class="dec qtybtn">-</span
            ><input
              type="text"
              value="1"
              spellcheck="false"
              data-ms-editor="true"
            /><span class="inc qtybtn">+</span>
          </div>
        </td>
        <td class="pro-subtotal"><span>$150.00</span></td>
        <td class="pro-remove">
          <a href="#"><i class="feather-x"></i></a>
        </td>
      </tr>
      <tr>
        <td class="pro-thumbnail">
          <a href="#"
            ><img src="assets/images/product/4.jpg" alt="Product"
          /></a>
        </td>
        <td class="pro-title"><a href="#">Momentum Theorem</a></td>
        <td class="pro-price"><span>$250.00</span></td>
        <td class="pro-quantity">
          <div class="pro-qty">
            <span class="dec qtybtn">-</span
            ><input
              type="text"
              value="1"
              spellcheck="false"
              data-ms-editor="true"
            /><span class="inc qtybtn">+</span>
          </div>
        </td>
        <td class="pro-subtotal"><span>$270.00</span></td>
        <td class="pro-remove">
          <a href="#"><i class="feather-x"></i></a>
        </td>
      </tr>
    </tbody>
  </table>
</div>
 */
// add to the table one more row
// let cart = {
//   title: 'new book',
//   price: 100,
//   quantity: 1,
//   subtotal: 100,
// };
import { cart } from '../utils/var.js';

console.log('sallam_ ', cart);
let cartTable = document.querySelector('.cart-table tbody');
console.log('🚀 ~ cartTable:', cartTable);
/* 
export let cart = [
    {
        id: 1,
        image: 'assets/images/product/1.jpg',
        title: 'Product 1',
        quantity: 2,
        price: 100
    },
    {
        id: 2,
        image: 'assets/images/product/2.jpg',
        title: 'Product 2',
        quantity: 1,
        price: 200
    }
]
 */
cart.forEach((carte) => {
  let cartRow = document.createElement('tr');
  console.log('🚀 ~ cartRow:', cartRow);
  cartRow.innerHTML = `
        <td class="pro-thumbnail">
        <a href="#"><img src="${carte.image}" alt="Product" /></a>
        </td>
        <td class="pro-title"><a href="#">${carte.title}</a></td>
        <td class="pro-price"><span>$${carte.price}.00</span></td>
        <td class="pro-quantity">
        <div class="pro-qty">
            <span class="dec qtybtn">-</span
            ><input type="text" value="${
              carte.quantity
            }" spellcheck="false" data-ms-editor="true" /><span class="inc qtybtn">+</span>
        </div>
        </td>
        <td class="pro-subtotal"><span>$${
          carte.price * carte.quantity
        }.00</span></td>
        <td class="pro-remove">
        <a href="#"><i class="feather-x"></i></a>
        </td>
    `;
  cartTable.appendChild(cartRow);
});
// let cartRow = document.createElement('tr');
// console.log('🚀 ~ cartRow:', cartRow);
// cartRow.innerHTML = `
//   <td class="pro-thumbnail">
//     <a href="#"><img src="assets/images/product/1.jpg" alt="Product" /></a>
//   </td>
//   <td class="pro-title"><a href="#">${carte.title}</a></td>
//   <td class="pro-price"><span>$${carte.price}.00</span></td>
//   <td class="pro-quantity">
//     <div class="pro-qty">
//       <span class="dec qtybtn">-</span
//       ><input type="text" value="${
//         carte.quantity
//       }" spellcheck="false" data-ms-editor="true" /><span class="inc qtybtn">+</span>
//     </div>
//   </td>
//   <td class="pro-subtotal"><span>$${carte.price * carte.quantity}.00</span></td>
//   <td class="pro-remove">
//     <a href="#"><i class="feather-x"></i></a>
//   </td>
// `;
// cartTable.appendChild(cartRow);
