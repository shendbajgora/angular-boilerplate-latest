import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../../environments/environment';
import { appendQueryParams } from '../../utils/append-params';
import { IRestResponse } from '../../../models/rest-response';

@Injectable({
  providedIn: 'root'
})
export class CrudService<T = any> {

  private endpoint = environment.apiGateway;

  constructor(private _http: HttpClient) {
  }

  get http(): HttpClient {
    return this._http;
  }

  public setEndpoint(endpoint: string): void {
    if (!endpoint) {
      return;
    }

    this.endpoint = `${this.endpoint}/${endpoint}`;
  }

  public getEndpoint(): string {
    return this.endpoint;
  }

  public create(request: { path?: string, body: any }, options?: any) {

    const endpoint = `${this.endpoint}${request.path || ''}`;

    return this.http.post<T>(endpoint, request.body, options);
  }

  public read(request: { path: string, includes?: string[] }, options?: any) {

    const endpoint = appendQueryParams(`${this.endpoint}${request.path}`, request.includes);

    return this.http.get<IRestResponse<T>>(endpoint, options);
  }

  public readAll(request: { path?: string, includes?: string[] } = { path: '' }, options?: any) {

    const endpoint = appendQueryParams(`${this.endpoint}${request.path}`, request.includes);

    return this.http.get<IRestResponse<T[]>>(endpoint, options);
  }

  public update(request: { path: string, body: any }, options?: any) {

    const endpoint = `${this.endpoint}${request.path}`;

    return this.http.put<T>(endpoint, request.body, options);
  }

  public delete(request: { path: string }, options?: any) {

    const endpoint = `${this.endpoint}${request.path}`;

    return this.http.delete<T>(endpoint, options);
  }
}
