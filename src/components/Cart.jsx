function Cart({ cart, updateQuantity, removeItem }) {
  return (
    <div>
      <h2>Cart</h2>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item) => (
          <div
            key={item.id}
            style={{
              borderBottom: "1px solid #ddd",
              padding: "10px 0",
            }}
          >
            <p><strong>{item.name}</strong></p>

            <div>
              <button onClick={() => updateQuantity(item.id, "dec")}>-</button>
              <span style={{ margin: "0 10px" }}>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, "inc")}>+</button>
            </div>

            <p>₹{item.price * item.quantity}</p>

            <button onClick={() => removeItem(item.id)}>
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}
export default Cart