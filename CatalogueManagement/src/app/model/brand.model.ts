import { Injectable } from "@angular/core";

@Injectable()
export class Brand{
    statusCode: number;
    isSuccess: boolean;
    errors: [];
    value: [];
}