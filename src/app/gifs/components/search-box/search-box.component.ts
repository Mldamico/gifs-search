import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css'],
})
export class SearchBoxComponent {
  @ViewChild('tag') public tagInput!: ElementRef<HTMLInputElement>;
  constructor() {}

  search() {
    const newTag = this.tagInput.nativeElement.value;
  }
}
