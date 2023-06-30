import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cars: ["Model S", "Model 3", "Model X", "Model Y"],
}


const carSlice = createSlice({
  name: "car", // name of the slice
  initialState,
  reducers: {} // Reducers are functions that handle actions dispatched to the Redux store and return a new state based on that action.
});

// It's important to note that createSlice automatically generates action creators
// and action types that correspond to the reducers and state.
// However, in this case, there are no reducers defined in the createSlice function,
// meaning that there are currently no actions
// that can be dispatched to change the state of the car slice.

// selectCars is a function that, given the global state object,
// will return the cars array from the car slice of the state.
export const selectCars = state => state.car.cars;

export default carSlice.reducer; // export the reducer