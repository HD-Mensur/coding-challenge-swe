import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';

@Injectable()
export class RequestCachingInterceptor implements HttpInterceptor {
  private base = 'https://www.swapi.tech/api/';
  private endpointsToCache = new Set(['https://www.swapi.tech/api/people']);
  private cache = new Map<string, HttpResponse<any>>();

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const url = request.url.replace(this.base, '');

    if (request.method === 'GET' && !this.endpointsToCache.has(url)) {
      const cachedResponse = this.cache.get(request.url);

      if (cachedResponse) {
        return of(cachedResponse);
      }

      return next.handle(request).pipe(
        tap((response) => {
          if (response instanceof HttpResponse) {
            this.cache.set(request.url, response);
          }
        })
      );
    }
    return next.handle(request);
  }
}
