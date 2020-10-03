import axios from "axios";

export const SAVE_TEST_DATA = "SAVE_TEST_DATA";
export const getTestData = (postObject) => {
  return (dispatch, getState) => {
    axios
      .post("/getTestData", postObject)
      .then((res) => {
        // dispatch to our securityReducer
        dispatch({
          type: SAVE_TEST_DATA,
          payload: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
