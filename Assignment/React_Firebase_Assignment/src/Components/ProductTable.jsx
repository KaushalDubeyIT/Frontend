import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MyContext from "../Context/MyContext";

function ProductTable() {
  const context = useContext(MyContext);
  const { allProducts, deleteProduct, editProducthandle, Search, setSearch } =
    context;

  // Filter products based on search input
  const filteredProducts = allProducts.filter((product) =>
    product.name?.toLowerCase().includes(Search.toLowerCase())
  );

  return (
    <div className="container py-5">
      <div className="card shadow-lg border-0">
        {/* Header */}
        <div className="card-header bg-dark text-white d-flex justify-content-between align-items-center p-3 flex-wrap">
          <input
            value={Search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            className="form-control w-50 mb-2 mb-md-0 bg-secondary text-white border-0"
            placeholder="Search here..."
          />

          <div className="d-flex align-items-center gap-2 mb-2 mb-md-0">
            <h4 className="m-0">React Firebase CRUD</h4>
          </div>

          <Link to="/addproduct">
            <button className="btn btn-outline-light fw-semibold">
              + Add Product
            </button>
          </Link>
        </div>

        {/* Table */}
        <div className="table-responsive">
          <table className="table table-dark table-hover align-middle mb-0">
            <thead className="table-secondary text-dark">
              <tr>
                <th>S.No.</th>
                <th>Product Image</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Category</th>
                <th>Date</th>
                <th colSpan="2" className="text-center">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredProducts.length > 0 ? (
                filteredProducts.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="img-fluid rounded"
                        style={{ width: "60px", height: "60px" }}
                      />
                    </td>
                    <td>{item.name}</td>
                    <td>₹{item.price}</td>
                    <td>{item.category}</td>
                    <td>{item.date}</td>
                    <td className="text-center">
                      <button
                        onClick={() => deleteProduct(item)}
                        className="btn btn-sm btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                    <td className="text-center">
                      <Link
                        to="/updateproduct"
                        onClick={() => editProducthandle(item)}
                        className="btn btn-sm btn-success"
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="text-center text-danger fw-bold">
                    Product Not Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ProductTable;
