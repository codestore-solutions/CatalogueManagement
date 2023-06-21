import { createFeatureSelector, createSelector } from "@ngrx/store";
import { DataState } from "../reducer/product.reducer";

const getCategory = createFeatureSelector<DataState>('category');

export const selectCategory = createSelector(
    getCategory,
    (state: DataState)=>state.category
);