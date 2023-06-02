import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.css'],
})
export class LazyImageComponent implements OnInit {
  @Input() public url!: string;
  @Input() public title: string = '';
  public hasLoaded: boolean = false;
  constructor() {}

  ngOnInit(): void {
    if (!this.url) throw new Error('url must be provided');
  }

  onLoad() {
    setTimeout(() => {
      this.hasLoaded = true;
    }, 1000);
  }
}
