import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db, storage } from '../../Firebase'; // Adjust import path as needed
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

function FoodUpdate() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [updatedFood, setUpdatedFood] = useState({
    name: '',
    Price: '',
    Discount: '',
    Resturent: '',
    Resturent1: '',
    Description: '',
    Quantity: '',
    image: '' // Initialize with an empty string or a default image URL
  });
  const [image, setImage] = useState(null);
  const [validated, setValidated] = useState(false);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    const fetchFood = async () => {
      try {
        const foodRef = doc(db, 'foods', id);
        const foodSnapshot = await getDoc(foodRef);
        if (foodSnapshot.exists()) {
          const foodData = foodSnapshot.data();
          setUpdatedFood({
            name: foodData.name,
            Price: foodData.Price.toString(),
            Discount: foodData.Discount.toString(),
            Resturent: foodData.Resturent,
            Resturent1: foodData.Resturent1,
            Description: foodData.Description,
            Quantity: foodData.Quantity.toString(),
            image: foodData.image || '' // Get the image URL from the database
          });
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching food: ', error);
      }
    };

    fetchFood();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedFood({ ...updatedFood, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleClick = () => {
    document.getElementById('file-input').click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
    }

    setValidated(true);

    try {
      let imageUrl = updatedFood.image; // Use existing image URL if no new image is uploaded

      // If there's a new image selected, upload it
      if (image) {
        const storageRef = ref(storage, `images/${image.name}`);
        const uploadTask = uploadBytesResumable(storageRef, image)
        await new Promise((resolve, reject) => {
          uploadTask.on(
            'state_changed',
            snapshot => { },
            error => reject(error),
            async () => {
              imageUrl = await getDownloadURL(uploadTask.snapshot.ref);
              resolve();
            }
          )
        })
      }

      const foodRef = doc(db, 'foods', id);
      await updateDoc(foodRef, {
        name: updatedFood.name,
        Price: parseInt(updatedFood.Price),
        Discount: parseInt(updatedFood.Discount),
        Resturent: updatedFood.Resturent,
        Resturent1: updatedFood.Resturent1,
        Description: updatedFood.Description,
        Quantity: parseInt(updatedFood.Quantity),
        image: imageUrl // Update image URL in Firestore
      });

      alert('Food item updated successfully!');
      navigate('/Foodlist');
    } catch (error) {
      console.error('Error updating food item: ', error);
      alert('Failed to update food item. Please try again later.');
    }
  };

  return (
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
                value={updatedFood.name}
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
                value={updatedFood.Price}
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
                value={updatedFood.Discount}
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
                value={updatedFood.Resturent}
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">Please provide a valid restaurant name.</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className='col-6 p-3' controlId="validationCustom05">
              <Form.Label>Restaurant Category</Form.Label>
              <Form.Select aria-label="Default select example" name='Resturent1' value={updatedFood.Resturent1} onChange={handleChange} required>
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
                value={updatedFood.Quantity}
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
                setUpdatedFood({ ...updatedFood, image: file });
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
              {updatedFood.image && !image && (
                <img src={updatedFood.image} alt="Existing" className="uploaded-image" />
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
                required={!updatedFood.image}
              />
              <Form.Control.Feedback type="invalid">Please upload an image.</Form.Control.Feedback>
            </div>
            <Form.Group className="mb-3 col-12 p-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name='Description'
                value={updatedFood.Description}
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
  );
}

export default FoodUpdate;
