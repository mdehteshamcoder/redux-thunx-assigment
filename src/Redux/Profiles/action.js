import { updatePage } from "../Page/action";
import { UPDATE_PROFILES } from "./actionType";

export const updateProfiles = (payload) => ({
  type: UPDATE_PROFILES,
  payload
});

export const getAllProfiles = (query, page) => async (dispatch) => {
  try {
    let res = await fetch(
      `https://api.github.com/search/users?q=${query}&page=${page}&per_page=5`
    );
    let data = await res.json();
    dispatch(updateProfiles(data.items));
    dispatch(updatePage(data.total_count));
  } catch (error) {
    console.log(error);
  }
};

