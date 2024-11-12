import { useState, useEffect } from "react";
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ProductForm = () => {
  const [product, setProduct] = useState({
    productCode: "",
    name: "",
    description: "",
    price: "",
    quantity: "",
    dateAdded: "",
  });

  const [products, setProducts] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSave = async () => {
    try {
      const response = await axios.post("http://localhost:3000/products", product);
      alert("Product successfully saved!");
      console.log(response.data);
    } catch (error) {
      console.error("Error saving product:", error);
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleClear = () => {
    setProduct({
      productCode: "",
      name: "",
      description: "",
      price: "",
      quantity: "",
      dateAdded: "",
    });
  };

  const handleEdit = (prod) => {
    setProduct({
      productCode: prod.product_code,
      name: prod.name,
      description: prod.description,
      price: prod.price,
      quantity: prod.qty,
      dateAdded: new Date(prod.date_added).toISOString().split("T")[0],
    });
    setEditMode(true);
    setEditId(prod._id);
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:3000/products/${editId}`, product);
      alert("Product updated successfully!");
      fetchProducts();
      handleClear();
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/products/${id}`);
      alert("Product deleted successfully!");
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };


  return (
    <div style={{ marginLeft: '10px' }}>
      <h2>{editMode ? "Edit Product" : "Add Product"}</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formProductCode">
          <Form.Label>Product Code</Form.Label>
          <Form.Control
            type="text"
            placeholder="Product Code"
            name="productCode"
            value={product.productCode}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formProductName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            name="name"
            value={product.name}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formProductDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Product Description"
            name="description"
            value={product.description}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formProductPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Product Price"
            name="price"
            value={product.price}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formProductQuantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            type="number"
            placeholder="Product Quantity"
            name="quantity"
            value={product.quantity}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formProductDateAdded">
          <Form.Label>Date Added</Form.Label>
          <Form.Control
            type="date"
            name="dateAdded"
            value={product.dateAdded}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Row className="mb-3">
          <Button as={Col} variant="primary" type="button" onClick={editMode ? handleUpdate : handleSave}>
            {editMode ? "Update" : "Save"}
          </Button>

          <Button className="ms-2" as={Col} variant="primary" type="button" onClick={handleClear}>
            Clear
          </Button>
        </Row>
      </Form>

      <h2>Product List</h2>
      <ul>
        {products.map((prod) => (
          <li key={prod._id}>
            <Row className="mb-3">
            {prod.product_code} - {prod.name} - P{prod.price}
              <Button className="ms-2" as={Col} variant="primary" type="button" onClick={() => handleEdit(prod)}>
                Edit
              </Button>
              <Button className="ms-2" as={Col} variant="primary" type="button" onClick={() => handleDelete(prod._id)}>
                Delete
              </Button>
            </Row>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductForm;
