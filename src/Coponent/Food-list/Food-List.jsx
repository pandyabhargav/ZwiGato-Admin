import React, { useState, useEffect } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { db } from '../../Firebase';

function FoodList() {
  const [foods, setFoods] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredFoods, setFilteredFoods] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const foodCollectionRef = collection(db, 'foods');
        const querySnapshot = await getDocs(foodCollectionRef);

        const fetchedFoods = [];
        querySnapshot.forEach((doc) => {
          fetchedFoods.push({ id: doc.id, ...doc.data() });
        });

        setFoods(fetchedFoods);
        setFilteredFoods(fetchedFoods); // Initialize filtered foods with all foods
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (foodId) => {
    try {
      const foodRef = doc(db, 'foods', foodId);
      await deleteDoc(foodRef);
      // Remove the deleted food item from the local state
      setFoods((prevFoods) => prevFoods.filter((food) => food.id !== foodId));
      setFilteredFoods((prevFiltered) => prevFiltered.filter((food) => food.id !== foodId));
      console.log('Food item deleted successfully!');
    } catch (error) {
      console.error('Error deleting food item: ', error);
      alert('Failed to delete food item. Please try again later.');
    }
  };

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchQuery(value);
    const filteredData = foods.filter(food => {
      return food.name.toLowerCase().includes(value);
    });
    setFilteredFoods(filteredData);
  };

  return (
    <>
      <Container fluid>
        <div className='col-12 pt-3 pb-120 food-list'>
          <div className='col-12 d-flex flex-wrap p-3 align-items-center bg-white'>
            <div className='col-9'>
              <h5>Foods</h5>
            </div>
            <div className='col-3 d-flex justify-content-end'>
            <Link to='/Food-add' className='btn bt1 rounded'>
                <i className="fa-regular fa-square-plus"></i> Add New Food
              </Link>
            </div>
          </div>
          <div className='col-12 d-flex flex-wrap p-3 bg-white'>
            <div className='col-9'>

            </div>
            <div className='col-3 d-flex justify-content-end align-items-center'>
              <p className='mx-2 mb-0'>Search : </p><input className='inpu p-2' type="text" onChange={handleSearch} value={searchQuery} />
            </div>
          </div>
          <div className='col-12 p-3 bg-white'>
            <table className='col-12 border-bg'>
              <thead>
                <tr>
                  <th>
                    <Form>
                      {['checkbox'].map((type) => (
                        <div key={`default-${type}`}>
                          <Form.Check // prettier-ignore
                            type={type}
                            id={`default-${type}`}
                          />
                        </div>
                      ))}
                    </Form>
                  </th>
                  <th className='text-start ps-3'>
                    Product Image
                  </th>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Restaurant</th>
                  <th>Category</th>
                  <th>Foods</th>
                  <th>Option</th>
                </tr>
              </thead>
              <tbody>
                {filteredFoods.map(food => (
                  <tr key={food.id}>
                    <td>
                      <Form>
                        {['checkbox'].map((type) => (
                          <div key={`default-${type}`}>
                            <Form.Check // prettier-ignore
                              type={type}
                              id={`default-${type}`}
                            />
                          </div>
                        ))}
                      </Form>
                    </td>
                    <td className='d-flex flex-wrap align-items-center'>
                      <img src={food.image} className='rounded mx-2' alt={food.name} />
                    </td>
                    <td>{food.name}</td>
                    <td>${food.Price.toFixed(2)}</td>
                    <td>{food.Resturent}</td>
                    <td>{food.Resturent1}</td>
                    <td>{food.Quantity}</td>
                    <td>
                      <Link className='btn me-2'><i className="fa-regular fa-eye"></i></Link>
                      <Link to={`/Food-update/${food.id}`} className='btn me-2'><i className="fa-solid fa-pen"></i></Link>
                      <Button variant="link" onClick={() => handleDelete(food.id)}><i className="fa-regular fa-trash-can"></i></Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </>
  );
}

export default FoodList;
