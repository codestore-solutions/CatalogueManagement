import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DataService } from "./data.service";


@Injectable()
export class TokenIntercepter implements HttpInterceptor {
    constructor(public service: DataService) {

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6ImFkbWluIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiYWRtaW4iLCJ0ZW5hbnRJZCI6IlQyIiwiZXhwIjoxNjkxMTM2Nzc2LCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo3MTM3IiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzEzNyJ9.-2LQXkF9ha9iLT6G_qaFwLkgfNIS-Zd7JezHcMCD-Ng';
        req = req.clone({
            setHeaders : {
                'Authorization': `Bearer ${token}`,
                'Access-Control-Allow-Origin': '*'
            }
        })
        console.log(req);
        return next.handle(req);
    }

} 