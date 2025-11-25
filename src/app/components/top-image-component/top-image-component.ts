import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-image-component',
  imports: [],
  templateUrl: './top-image-component.html',
  styleUrl: './top-image-component.css',
})
export class TopImageComponent implements OnInit{

  @Input() hero_image: string = '';
  @Input() home_page: boolean = false;

  image_url = ``;

  ngOnInit(): void {
    this.image_url = `/hero-images/${this.hero_image}`;
  }

}
