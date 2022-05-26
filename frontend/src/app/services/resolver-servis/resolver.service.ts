import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Params, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { RouteName } from 'src/app/enums/route-name-enun';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from '../product/product.service';

@Injectable({
  providedIn: 'root'
})
export class ResolverService implements Resolve<Product> {
  constructor(
    private productService: ProductService,
    private router: Router,
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> {      
    let product    
    this.productService.getProductsById(+route.params['id'])
      .subscribe((data: Product) => product = data);

    if(!product) {
      this.router.navigate([RouteName.ROOT])
    }

    return of(product)
  }
}
