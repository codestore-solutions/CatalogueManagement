import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY, catchError, exhaustMap, map } from "rxjs";
import { Category } from "src/app/model/category.model";
import { DataService } from "src/app/services/data.service";
import { getCategorySuccess } from "../actions/product.actions";

@Injectable()
export class Effects {
    constructor(private action$: Actions, private service: DataService) {

    }

    loadCategory = createEffect(()=> this.action$.pipe(
        ofType(this.loadCategory),
        exhaustMap(()=>this.service.getCategory().pipe(
            map((category : Category) =>(getCategorySuccess(category))),
            catchError(()=>EMPTY)
        ))
    ))
}