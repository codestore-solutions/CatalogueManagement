import { createReducer, on } from "@ngrx/store";
import { Category } from "src/app/model/category.model";
import { getCategorySuccess } from "../actions/product.actions";


export const featureKey='category';
export interface DataState {
    category:Category;
}

const initialState: DataState = {
    category: new Category
}

export const dataReducer = createReducer(
    initialState,
    on(getCategorySuccess, (state, {category})=> ( {
        ...state,
        category: category
    }))
)