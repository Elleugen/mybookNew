import {dashboardTypes} from '.';

const initState = {
    currentDashboard: [],
    // currentProducts: [],

};

export const dashboardReducers = (state = initState, action) => {
    switch(action.type) {
        case dashboardTypes.SET_DASHBOARD:
            return {...state, ...action.payload};
        case dashboardTypes.SET_DEFAULT_DASHBOARD:
            return initState;
        default:
            return state;
    }

}

// export const productsReducers = (state = initState, action) => {
//     switch(action.type) {
//         case dashboardTypes.SET_PRODUCTS:
//             return {...state, ...action.payload};
//         case dashboardTypes.SET_DEFAULT_PRODUCTS:
//             return initState;
//         default:
//             return state;
//     }

// }