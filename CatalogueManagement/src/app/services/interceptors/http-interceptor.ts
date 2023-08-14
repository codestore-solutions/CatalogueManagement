import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler, HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { BehaviorSubject, catchError, map, Observable, throwError, switchMap, filter, take } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable()
export class RequestInterceptor implements HttpInterceptor {

    BASE_URL: string = environment.baseURL;
    private isRefreshing = false;
    private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
    private basicAuthTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

    constructor(
    ) { }

    intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('calling');
        let clonedRequest = httpRequest.clone();
        const isInternetAvailabe: boolean = navigator.onLine;
        if(!isInternetAvailabe) {
            //todo: can show toaster message
            throw new HttpErrorResponse({
                error: 'No Internet Connectivity Found',
                headers: httpRequest.headers,
                status: 500,
            });
        }
        if(httpRequest.url.includes(this.BASE_URL)) {
            clonedRequest = this.setAuthorizationHeader(httpRequest, `${localStorage.getItem("USER_TOKEN")}`)
        }
        
        return next.handle(clonedRequest)
            .pipe(
                map(res => {
                    if (res instanceof HttpResponse && !res.body.succeeded) {
                        if (res.body.hasOwnProperty('errors') && res.body.errors) {
                            throw new HttpErrorResponse({
                                error: res.body.errors[0].description,
                                headers: res.headers,
                                status: 500,
                            });
                        } else {
                            return res;
                        }
                    } else {
                        return res;
                    }
                }),
                catchError((error: any) => {
                    if (error.status === HttpStatusCode.Unauthorized && error.url) {
                        // if url was anonymous, then BasciAuthToken was expired
                       
                    } else {
                        let errorMessage = '';
                        if (error.error instanceof ErrorEvent) {
                            errorMessage = `Error: ${error.error}`;
                        }
                        else {
                            if(error.status===HttpStatusCode.BadRequest)
                            {
                                errorMessage=`Message: ${error.error.title}`;
                            }
                            else{
                                errorMessage = `Message: ${error.error}`;
                            }
                        }
                        //todo:can show error message
                    }
                    return throwError(() => error);
                })
            )
    }
    
    //todo: hardcoded value for token till USER_Manegement is ready
    setAuthorizationHeader(request: HttpRequest<any>, token: string) {
        token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6ImFkbWluIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiYWRtaW4iLCJ0ZW5hbnRJZCI6IlQxIiwiZXhwIjoxNjkxMTM2NTkwLCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo3MTM3IiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzEzNyJ9.mcNjnnKYGjq7iqbLgUQ8bwKQfp-oZ7dpFnFVrgChniQ"
        return request.clone({
            headers: request.headers.set('Authorization', `Bearer ${token}`)
        });
    }

}