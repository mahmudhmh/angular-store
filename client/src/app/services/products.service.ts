import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { PaginationParams, Products } from '../../types';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private apiService: ApiService) {}

  getProducts = (
    url: string,
    params: PaginationParams
  ): Observable<Products> => {
    //return observable of type products which get from the api
    return this.apiService.get(url, {
      params,
      responseType: 'json',
    });
  };
}
