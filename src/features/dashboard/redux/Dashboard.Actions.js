// import { Profiler } from 'react';
// import {dashboardTypes} from './';

// export const setDashboard = (payload) => ({
//     type: dashboardTypes.SET_DASHBOARD,
//     payload,
// });
// // export const setProducts = (payload) => ({
// //     type: dashboardTypes.SET_PRODUCTS,
// //     payload,
// // });

// export const setDefaultDashboard = () => ({
//     type: dashboardTypes.SET_DEFAULT_DASHBOARD,
// });
// // export const setDefaultproducts = () => ({
// //     type: dashboardTypes.SET_DEFAULT_PRODUCTS,
// // });

// import { User } from '../../../services';
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
    const {result} = await Dashboard.getDashboard();
    dispatch(
      setDashboard({
        currentDashboard: result,
      }),
    );
  } catch (error) {
    console.log('getDashboard::', error);
  }
};
