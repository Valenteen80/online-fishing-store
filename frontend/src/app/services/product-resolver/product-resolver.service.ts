import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { map, Observable, of, catchError } from 'rxjs';
import { RouteName } from 'src/app/enums/route-name-enum';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from '../product/product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<Product> {
  constructor(
    private productService: ProductService,
    private router: Router,
  ) { }

resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> {
  const id = +route.params['id'];

  return this.productService.getProducts()
    .pipe(
      map((products: Product[])=> {
        const currentProduct = products.find((product: Product) => {
        return id === product.id;
        });
    
        if(!currentProduct){
          throw new Error('no product');
        }

        return currentProduct;
      }),
      catchError(()=> {
        this.router.navigate([RouteName.ROOT]);
          
        return of(null);
      })
    )
  }
}
