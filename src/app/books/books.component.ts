import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  name: string = 'Critique of Pure Reason';
  author: string = 'Immanuel Kant';
  src: string = 'https://demago.rs/wp-content/uploads/2021/09/Kritika-cistoga-uma-Kant-1.jpg'

  name2: string = 'Groundwork of the Metaphysics of Morals';
  src2: string = 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781625588586/groundwork-of-the-metaphysics-of-morals-9781625588586_lg.jpg';

  isDisabled: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }


    handleClick(){
      this.isDisabled = true;
    }

    myName: string =""

    handleInput(event: any){
        this.myName = event.target.value;
        
    }

}
