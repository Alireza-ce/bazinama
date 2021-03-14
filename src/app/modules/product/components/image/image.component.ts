import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent implements OnInit {
  @Input() src;
  imageSrc:string;
  constructor() {}

  ngOnInit(): void {
    this.setImageSrc();
  }
  setImageSrc(){
    this.imageSrc = `${environment.baseUrl}/${this.src.img}`
  }
}
