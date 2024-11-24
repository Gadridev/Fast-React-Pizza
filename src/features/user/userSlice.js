import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAddress } from "../../services/apiGeocoding";

function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

export const fetchAddresss = createAsyncThunk(
  "user/fetchAddress",
  async function () {
    const positionObj = await getPosition();
    const position = {
      latitude: positionObj.coords.latitude,
      longitude: positionObj.coords.longitude,
    };

    // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
    const addressObj = await getAddress(position);
    const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

    // 3) Then we return an object with the data that we are interested in
    return { position, address };
  },
);

const initialState = {
  username: "",
  status: "idle",
  position: {},
  error: "",
};
const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName(state, action) {
      state.username = action.payload;
    },
  },
  extraReducers: (builders) =>
    builders
      .addCase(fetchAddresss.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAddresss.fulfilled, (state, action) => {
        state.position = action.payload;
        state.address = action.payload.address;
        state.status = "idle";
      })
      .addCase(fetchAddresss.rejected, (state) => {
        state.status = "error";
        state.error = "there was an problem getting address make sure to fill this field";
      }),
});
export const { updateName } = UserSlice.actions;
export default UserSlice.reducer;
