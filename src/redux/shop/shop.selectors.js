import { createSelector } from "reselect";
import memoize from "lodash.memoize";

//Creating a ROUTE MAP that is an object where the string value goes to the id

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

//We map over our collection_id_map and pass into the selector the url params and returns a function called createSelector (also known as a "currying function"), to turn this into a memoized function (which optimizes performance) I installed the memoize function from the lodash library using npm install lodash.memoize
export const selectCollection = memoize((collectionUrlParam) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionUrlParam]
  )
);
