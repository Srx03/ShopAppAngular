import { Component, OnInit } from '@angular/core';
import { Book} from '../types/Book';



@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  author = 'Immanuel Kant';
  books: Book[] = [
  
    {
          name : 'critique of pure reason',
          author : this.author,
          src :  'https://demago.rs/wp-content/uploads/2021/09/Kritika-cistoga-uma-Kant-1.jpg',
          price: 100
    },
    {
          name : 'groundwork of the metaphysics of morals',
          author : this.author,
          src :  'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781625588586/groundwork-of-the-metaphysics-of-morals-9781625588586_lg.jpg',
          price: 300
    },
    {
      name : 'What Is Enlightenment',
      author : this.author,
      src :  'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/KantWasIstAufkl%C3%A4rung.png/300px-KantWasIstAufkl%C3%A4rung.png',
      price: 300
    },
    {
      name : 'Critique of Practical Reason',
      author : this.author,
      src :  'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Critique_of_Practical_Reason_%28German_edition%29.jpg/220px-Critique_of_Practical_Reason_%28German_edition%29.jpg',
      price: 300
    },
    {
      name : 'Critique of Judgment',
      author : this.author,
      src :  'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Critique_of_Judgment%2C_German_title_page.jpg/200px-Critique_of_Judgment%2C_German_title_page.jpg',
      price: 300
    },
    {
      name : 'Religion within the Bounds of Bare Reason',
      author : this.author,
      src :  'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Religion_within_the_bounds_of_bare_reason_%28German_edition%29.jpg/200px-Religion_within_the_bounds_of_bare_reason_%28German_edition%29.jpg',
      price: 300
    },


  ];

 

  isShowing: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }



}
