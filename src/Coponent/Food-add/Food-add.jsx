import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../Firebase';
import { useNavigate } from 'react-router-dom';

function Foodadd() {
  // State variables for form inputs, image upload, and validation
  const navigate = useNavigate();
  const [dragging, setDragging] = useState(false);
  const [image, setImage] = useState(null);
  const [validated, setValidated] = useState(false);
  const [inputBox, setInputBox] = useState({
    name: '',
    Price: '',
    Discount: '',
    Resturent: '',
    Resturent1: '',
    Description: '',
    Quantity: ''
  });

  // Handle input change in form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputBox({ ...inputBox, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Validate form inputs
      const form = event.currentTarget;
      if (!form.checkValidity()) {
        event.stopPropagation();
        setValidated(true);
        return;
      }

      let imageUrl = '';

      // Upload image to Firebase Storage if an image is selected
      if (image) {
        const storageRef = ref(storage, `images/${image.name}`);
        await uploadBytes(storageRef, image);
        imageUrl = await getDownloadURL(storageRef);
      }

      // Add data to Firestore
      const docRef = await addDoc(collection(db, 'foods'), {
        name: inputBox.name,
        Price: parseInt(inputBox.Price),
        Discount: parseInt(inputBox.Discount),
        Resturent: inputBox.Resturent,
        Resturent1: inputBox.Resturent1,
        image: imageUrl, // Store image URL in Firestore
        Description: inputBox.Description,
        Quantity: parseInt(inputBox.Quantity)
      });

      console.log('Document written with ID: ', docRef.id);

      // Reset form inputs and state
      setInputBox({
        name: '',
        Price: '',
        Discount: '',
        Resturent: '',
        Resturent1: '',
        Description: '',
        Quantity: ''
      });
      setImage(null);
      setValidated(false);
      navigate('/Foodlist');
      alert('Data added successfully!');
    } catch (error) {
      console.error('Error adding document: ', error);
      alert('Failed to add data. Please try again later.');
    }
  };

  // Handle file input change (image selection)
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  // Handle click event for file input
  const handleClick = () => {
    const fileInput = document.getElementById('file-input');
    fileInput.click();
  };

  return (
    <>
      <Container fluid>
        <div className='col-12 p-3 pt-4'>
          <div className='col-12 formadd rounded bg-white p-3'>
            <h5>Food Information</h5>
            <hr />
            <Form className='col-12 d-flex rounded flex-wrap p-3' noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group className='col-6 p-3' controlId="validationCustom01">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Your Name"
                  name='name'
                  value={inputBox.name}
                  onChange={handleChange}
                  required
                />
                <Form.Control.Feedback type="invalid">Please provide a valid name.</Form.Control.Feedback>
              </Form.Group>
              <Form.Group className='col-6 p-3' controlId="validationCustom02">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Price"
                  name='Price'
                  value={inputBox.Price}
                  onChange={handleChange}
                  required
                />
                <Form.Control.Feedback type="invalid">Please provide a valid price.</Form.Control.Feedback>
              </Form.Group>
              <Form.Group className='col-6 p-3' controlId="validationCustom03">
                <Form.Label>Discount Price</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Discount Price"
                  name='Discount'
                  value={inputBox.Discount}
                  onChange={handleChange}
                  required
                />
                <Form.Control.Feedback type="invalid">Please provide a valid discount price.</Form.Control.Feedback>
              </Form.Group>
              <Form.Group className='col-6 p-3' controlId="validationCustom04">
                <Form.Label>Restaurant</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Restaurant Name"
                  name='Resturent'
                  value={inputBox.Resturent}
                  onChange={handleChange}
                  required
                />
                <Form.Control.Feedback type="invalid">Please provide a valid restaurant name.</Form.Control.Feedback>
              </Form.Group>
              <Form.Group className='col-6 p-3' controlId="validationCustom05">
                <Form.Label>Restaurant Category</Form.Label>
                <Form.Select aria-label="Default select example" name='Resturent1' value={inputBox.Resturent1} onChange={handleChange} required>
                  <option>Select Cuisine</option>
                  <option value="Pizza">Pizza</option>
                  <option value="Pasta">Pasta</option>
                  <option value="Taco">Taco</option>
                  <option value="Meggie">Meggie</option>
                  <option value="Chicken">Chicken</option>
                  <option value="Burger">Burger</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">Please select a cuisine.</Form.Control.Feedback>
              </Form.Group>
              <Form.Group className='col-6 p-3' controlId="validationCustom06">
                <Form.Label>Item Quantity</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Item Quantity"
                  name='Quantity'
                  value={inputBox.Quantity}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <div
                className="drag-and-drop-area col-12"
                onDragOver={(e) => {
                  e.preventDefault();
                  setDragging(true);
                }}
                onDragLeave={(e) => {
                  e.preventDefault();
                  setDragging(false);
                }}
                onDrop={(e) => {
                  e.preventDefault();
                  setDragging(false);
                  const file = e.dataTransfer.files[0];
                  setImage(file);
                  setInputBox({ ...inputBox, image: file }); // Store file in state if needed for submission
                }}
              >
                {dragging ? (
                  <p>Drop the image here...</p>
                ) : (
                  <div className='text-center' onClick={handleClick}>
                    <i className="fa-sharp fa-solid fa-cloud-arrow-up"></i>
                    <p>Drag and drop an image or click to upload</p>
                  </div>
                )}
                {image && (
                  <img src={URL.createObjectURL(image)} alt="Uploaded" className="uploaded-image" />
                )}
                <input
                  type="file"
                  id="file-input"
                  name='image'
                  accept="image/*"
                  onChange={handleFileChange}
                  style={{ display: 'none' }}
                  required
                />
                <Form.Control.Feedback type="invalid">Please upload an image.</Form.Control.Feedback>
              </div>
              <Form.Group className="mb-3 col-12 p-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  name='Description'
                  value={inputBox.Description}
                  onChange={handleChange}
                  required
                />
                <Form.Control.Feedback type="invalid">Please provide a valid description.</Form.Control.Feedback>
              </Form.Group>
              <div className='col-12 d-flex p-3 flex-wrap justify-content-end align-items-center'>
                <Button className='bt1 px-4 py-2 rounded' type="submit">Save</Button>
              </div>
            </Form>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Foodadd;
