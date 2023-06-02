import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gif.interfaces';

@Component({
  selector: 'gifs-card',
  templateUrl: './gifs-card.component.html',
  styleUrls: ['./gifs-card.component.css'],
})
export class GifsCardComponent implements OnInit {
  @Input() gif!: Gif;
  constructor() {}

  ngOnInit(): void {
    if (!this.gif) throw new Error('Gif property is required');
  }
}
