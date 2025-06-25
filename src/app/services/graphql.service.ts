// src/app/services/graphql.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product/product.module';
import productsData from '../../assets/products.json';

@Injectable({ providedIn: 'root' })
export class GraphQLService {
  private mockProducts: Product[] = (productsData as any).products;

  query(query: string): Observable<any> {
    if (query.includes('products')) {
      return of({
        data: {
          products: this.mockProducts
        }
      });
    }

    // fallback or error simulation
    return of({ data: null, errors: [{ message: 'Unknown query' }] });
  }
}
