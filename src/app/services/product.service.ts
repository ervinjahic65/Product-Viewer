import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product } from '../models/product/product.module';
import { GraphQLService } from './graphql.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private graphqlService: GraphQLService) { }

  getProducts(): Observable<Product[]> {
    const query = `
      query {
        products {
          id
          title
          description
          category
          price
          rating
          thumbnail
        }
      }
    `;

    return this.graphqlService.query(query).pipe(
      map(result => result.data.products)
    );
  }
}
