import {Dashboard} from '../../../services';
import {dashboardTypes} from './';

export const setDashboard = payload => ({
  type: dashboardTypes.SET_DASHBOARD,
  payload,
});

export const setDefaultDashboard = () => ({
  type: dashboardTypes.SET_DEFAULT_DASHBOARD,
});

export const getDashboard = () => async dispatch => {
  try {
    // const {data} = await User.getUser();
    // console.log('getUser::', data);

    const result = await Dashboard.getDashboard();
    dispatch(
      setDashboard({
        currentDashboard: result,
      }),
    );

    // PARSE DATA
    // const listBook = await Dashboard.getDashboard(value);
    // dispatch(
    //     setProducts({
    //       // currentDashboard: listBook.result,
    //       currentDashboard: listBook,
    //     }),
    // );

    // console.log('getDashboard::', result);
    // dispatch({type: 'SET_DASHBOARD', payload: result});
  } catch (error) {
    console.log('getDashboard::', error);
  }
};
