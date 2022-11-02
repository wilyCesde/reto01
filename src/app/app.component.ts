import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges, OnInit, OnDestroy {
  cities = ['Barcelona', 'Madrid', 'Lima']
  name!: string;
  selection!: string;
  title = 'reto01';
  url = 'https://www.xtrafondos.com/wallpapers/resized/edificios-ciudad-de-noche-3183.jpg?s=large'

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Change_>', changes);
  }
  //para optener la data o llamar api
  ngOnInit(): void {
    console.log('onInit->')
  }
  //observabls
  ngOnDestroy(): void {
    console.log('Destroy->');
  }
  onClicked(city: string): void {
    console.log('City ->', city);
    this.selection = city;
  }





}
