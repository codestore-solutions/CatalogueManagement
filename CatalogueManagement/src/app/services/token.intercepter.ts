import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DataService } from "./data.service";


@Injectable()
export class TokenIntercepter implements HttpInterceptor {
    constructor(public service: DataService) {

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = localStorage.getItem('token');
        if (req.url != 'https://backend-catalogue-dev.azurewebsites.net/api/Account/signIn') {
            req = req.clone({
                setHeaders: {
                    'Authorization': `Bearer ${token.substring(1, token.length-1)}`,
                    'Access-Control-Allow-Origin': '*'
                }
            })
        }
        return next.handle(req);
    }

} 