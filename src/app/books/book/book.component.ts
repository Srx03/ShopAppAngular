import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Book} from '../../types/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input() book: Book = {} as Book;

  ifInCart: boolean = false;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  addToCart(){
    this.ifInCart= true;
    this.cartService.addToCart(this.book);
  }

  deleteFromCart(){
    this.ifInCart= false;
    this.cartService.deleteFromCart(this.book);
  }


}
