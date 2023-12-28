import { Component, OnInit, Input } from '@angular/core';

interface carouselImage{
  
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})


export class CarouselComponent implements OnInit{

  @Input() images: carouselImage[] = []

  ngOnInit(): void {

  }

}
