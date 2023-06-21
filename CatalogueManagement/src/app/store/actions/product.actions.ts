import { createAction } from "@ngrx/store";
import { Category } from "src/app/model/category.model";

export const getCategory = createAction('[Category] Get Category');
export const getCategorySuccess = createAction('[Category] Get Category Success', (category: Category)=> ({category}));
export const getCategoryFailure = createAction('[Category] Get Category Failure');