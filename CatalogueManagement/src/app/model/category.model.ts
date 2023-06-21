import { Injectable } from "@angular/core";

@Injectable()
export class Category{
    statusCode: number;
    isSuccess: boolean;
    errors: [
        {
            statusCode: number,
            message: string
        }
    ]
    value: [];
}