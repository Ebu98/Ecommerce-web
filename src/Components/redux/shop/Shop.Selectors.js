import { createSelector } from "reselect";

const selectShop = state => state.shop;


export const selectCollectionsForPreview = createSelector(
    [selectShop],
    shop => shop.collections
);
