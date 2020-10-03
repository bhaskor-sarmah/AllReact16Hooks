import { SAVE_TEST_DATA } from "../actions/DataTableActions";
const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case SAVE_TEST_DATA:
      return {
        data: action.payload.rows,
        pages: action.payload.pages,
      };
    default:
      return state;
  }
}
