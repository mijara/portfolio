export const RECEIVE_SECTIONS = 'RECEIVE_SECTIONS';

export const fetchSections = ()  => (dispatch) => {
  fetch('data.json').then((response) => {
    return response.json();
  }).then((data) => {
    dispatch({
      type: RECEIVE_SECTIONS,
      payload: data,
    })
  });
};
