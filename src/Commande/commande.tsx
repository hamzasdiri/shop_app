import React from "react";
import { useLocation } from "react-router-dom";
import "./commande.css";
import { CartItemType } from "../App";
import Button from "@material-ui/core/Button";

const Commande: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const cartItemsString = searchParams.get("cartItems");

  // Retrieve cartItems from localStorage if not provided in the URL
  let cartItems = [];

  if (cartItemsString) {
    cartItems = JSON.parse(cartItemsString);
  } else {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      cartItems = JSON.parse(storedCartItems);
    }
  }

  const calculateTotal = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount * item.price, 0);

  return (
    <div>
      {cartItems.length > 0 ? (
        <div className="invoice-wrapper" id="print-area">
          <div className="invoice">
            <div className="invoice-container">
              <div className="invoice-head">
                <div className="invoice-head-top">
                  <div className="invoice-head-top-right text-end">
                    <h3>Invoice</h3>
                  </div>
                </div>
                <div className="hr"></div>
                <div className="invoice-head-middle">
                  <div className="invoice-head-middle-left text-start">
                    <p>
                      <span className="text-bold">Date</span>: 06/11/2023
                    </p>
                  </div>
                  <div className="invoice-head-middle-right text-end">
                    <p>
                      <span className="text-bold">Invoice No:</span>16789
                    </p>
                  </div>
                </div>
                <div className="hr"></div>
                <div className="invoice-head-bottom">
                  <div className="invoice-head-bottom-left">
                    <ul>
                      <li className="text-bold">Invoiced To:</li>
                      <li>Mazen Issaoui</li>
                      <li>15 Olympic city</li>
                      <li>TY56 2FG</li>
                      <li>Tunisia</li>
                    </ul>
                  </div>
                  <div className="invoice-head-bottom-right">
                    <ul className="text-end">
                      <li className="text-bold">Pay To:</li>
                      <li>The Bradery</li>
                      <li>2705 N. Enterprise</li>
                      <li>Anywhere, CA 89438</li>
                      <li>contact@TheBradery.com</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="overflow-view">
                <div className="invoice-body">
                  <table>
                    <thead>
                      <tr>
                        <td className="text-bold">Product Name</td>
                        <td className="text-bold">Description</td>
                        <td className="text-bold">Price</td>
                        <td className="text-bold">Amount</td>
                        <td className="text-bold">Total</td>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item: any) => (
                        <tr>
                          <td>{item.title}</td>
                          <td>{item.description}</td>
                          <td>${item.price}</td>
                          <td>{item.amount}</td>
                          <td>${(item.amount * item.price).toFixed(2)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="invoice-body-bottom">
                    <div className="invoice-body-info-item">
                      <div className="info-item-td text-end text-bold">
                        Total:
                      </div>
                      <div className="info-item-td text-end">
                        ${calculateTotal(cartItems).toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ marginTop: "20px" }}>
              <Button
                size="medium"
                disableElevation
                variant="contained"
                color="primary"
                onClick={() => {}}
              >
                Payer
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <p>No cart items.</p>
      )}
    </div>
  );
};

export default Commande;
