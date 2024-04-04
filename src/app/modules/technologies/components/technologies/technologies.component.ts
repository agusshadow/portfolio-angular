import { Component, OnInit } from '@angular/core';
import { Slide } from '../../types/technologies.types';
import { slides } from '../../constants/slide.constants';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit {

  public slides: Slide[] = [];

  constructor() { }

  ngOnInit() {
    this.slides = slides;
    console.log(this.slides);

  }

}
