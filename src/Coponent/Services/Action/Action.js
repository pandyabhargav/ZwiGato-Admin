// actions.js


export const fetchAllData = () => {
  return async (dispatch) => {
    try {
        const snapshot = await db.collection('foods').get();
      let data = [];
      snapshot.forEach(doc => {
        data.push({ id: doc.id, ...doc.data() });
      });
      dispatch({ type: 'FETCH_ALL_DATA_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_ALL_DATA_ERROR', payload: error.message });
    }
  };
};

// export const addData = (data) => {
//   return async (dispatch) => {
//     try {
//       await db.collection('foods').add(data);
//       dispatch({ type: 'ADD_DATA_SUCCESS' });
//     } catch (error) {
//       dispatch({ type: 'ADD_DATA_ERROR', payload: error.message });
//     }
//   };
// };


export const addFood = (newFoodData) => async (dispatch) => {
  try {
    // Add new food data to Firestore
    await db.collection('foods').add(newFoodData);

    // Optional: Fetch updated data after adding
    dispatch(fetchAllData());
  } catch (error) {
    dispatch({ type: 'ADD_FOOD_FAILURE', payload: error.message });
  }
};

// Add update and delete actions similarly



