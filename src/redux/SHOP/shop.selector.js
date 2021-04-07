import {createSelector} from 'reselect';


export const SelectShopData = state => state.shop;

export const SelectShopCollection = createSelector(
    [SelectShopData],
    shop => shop.collection
)