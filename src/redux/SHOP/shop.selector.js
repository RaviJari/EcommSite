import {createSelector} from 'reselect';

export const SelectShopData = state => state.shop;

export const SelectShopCollection = createSelector(
    [SelectShopData],
    shop => shop.collections
)

export const SelectCollectionPreview = createSelector(
    [SelectShopCollection],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
)

export const SelectCollection = collectionUrlParam => 
createSelector(
    [SelectShopCollection],
    collections => (collections ? collections[collectionUrlParam] : null)
)

export const selectIsCollectionsFetching = createSelector(
    [SelectShopData],
    shop => shop.isFetching
)

export const selectIsCollectionsloaded = createSelector(
    [SelectShopData],
    shop => !!shop.collections
)