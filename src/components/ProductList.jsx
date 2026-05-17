import "./ProductList.css";

function ProductList({ products, addToCart }) {
  return (
    <div className="product-container">
      <h2>Product Data</h2>

      <table className="table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Category</th>
            <th>Price</th>
            <th>Unit</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {products.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>₹{item.price}</td>
              <td>{item.unit}</td>

              <td
                className={item.stock ? "in-stock" : "out-of-stock"}
              >
                {item.stock ? "In stock" : "Out of stock"}
              </td>

              <td>
                <button
                  disabled={!item.stock}
                  onClick={() => addToCart(item)}
                >
                  Add
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;