import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cities = ['Barcelona', 'Madrid','Lima']
  name!: string;
  title = 'reto01';
  url = 'https://www.xtrafondos.com/wallpapers/resized/edificios-ciudad-de-noche-3183.jpg?s=large'


}
