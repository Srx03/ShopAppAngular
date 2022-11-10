import { Injectable } from '@angular/core';
import { Book } from '../types/Book';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Book[] = [];

  constructor() { }


  addToCart(book: Book){
    this.cart.push(book);
  }

  getCart(){
    return this.cart;
  }

  deleteFromCart(book: Book){
    this.cart = this.cart.filter((b) => b != book)
  }

}
