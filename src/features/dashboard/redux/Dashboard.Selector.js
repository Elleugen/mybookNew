import { createSelector } from "reselect";
// import { User } from "../../../services";

const selectDashboard = state => state.dashboard;
// const selectProducts = state => state.products;

export const selectorCurrentDashboard = createSelector(
    [selectDashboard],
    dashboard => dashboard.currentDashboard,
);

// export const selectorCurrentProducts = createSelector(
//     [selectProducts],
//     products => products.currentProducts,
// );