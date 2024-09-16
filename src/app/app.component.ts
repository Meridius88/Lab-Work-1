import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { countReset } from 'console';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  title = 'Lab1';
  message : string = "String interpolation is useful";

  counter : number = 0; 
  count():void{
    setInterval(this.plus() ,1)

  }
  plus(): any {
    this.counter++;
    return console.log(this.counter);
  }
}
