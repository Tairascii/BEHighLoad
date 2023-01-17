import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Product} from './models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];
  dict = new Map<number, number>();
  BASE_URL = 'http://127.0.0.1:8000';
  constructor(private http: HttpClient) {
  }
  addToCart(product: Product): void {
    this.items.push(product);
  }
  getItems(): Product[] {
    return this.items;
  }
  isIn(product: Product): boolean{
    if (this.items.filter((x) => x === product).length > 0){
      return true;
    }
    return false;
  }
  clearCart(): Product[]{
    this.dict.clear();
    this.items = [];
    return this.items;
  }
  deleteItem(itemId: number): void{
    this.items = this.items.filter((x) => x.id !== itemId);
  }

  createOrder(product: Product): Observable<any> {
    const todayRaw = new Date();
    const dd = String(todayRaw.getDate()).padStart(2, '0');
    const mm = String(todayRaw.getMonth() + 1).padStart(2, '0');
    const yyyy = todayRaw.getFullYear();
    const today = mm + '/' + dd + '/' + yyyy;

    const order = {
      userId: 6,
      productId: product.id,
      comment: "created",
      createAt: today,
      shipping: "PICKUP",
      qty: 1,
    }
    return this.http.post(`${this.BASE_URL}/api/orders/`, order)
  }
}
