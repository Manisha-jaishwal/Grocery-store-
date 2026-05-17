function OrderSummary({ cart, placeOrder }) {
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const delivery = cart.length > 0 ? 40 : 0;
  const total = subtotal + delivery;

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Order Summary</h2>

      <p>Subtotal: ₹{subtotal}</p>
      <p>Delivery: ₹{delivery}</p>
      <hr />
      <h3>Total: ₹{total}</h3>

      <button
        disabled={cart.length === 0}
        onClick={placeOrder}
        style={{
          width: "100%",
          padding: "10px",
          background: "#4caf50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Place Order
      </button>
    </div>
  );
}
export default OrderSummary;