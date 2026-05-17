import { useState } from "react";
import products from "./data/products";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import OrderSummary from "./components/OrderSummary";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, type) => {
    setCart(
      cart.map((item) => {
        if (item.id === id) {
          if (type === "inc") return { ...item, quantity: item.quantity + 1 };
          if (type === "dec" && item.quantity > 1)
            return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const placeOrder = () => {
    alert("Order placed successfully!");
    setCart([]);
  };

  return (
    <div style={{ textAlign: "center", margin: "20px 0" }}>
      <h1>Grocery App</h1>

      <ProductList products={products} addToCart={addToCart} />

      <Cart
        cart={cart}
        updateQuantity={updateQuantity}
        removeItem={removeItem}
      />

      <OrderSummary cart={cart} placeOrder={placeOrder} />
    </div>
  );
}

export default App;