import { Component } from '@angular/core';
import { Api } from '../../../services/api';
import { NgFor } from '@angular/common';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-gallery',
  imports: [NgFor,DatePipe],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss'
})
export class Gallery {
  gallary:any []= [];
  constructor(private apiServices:Api){}


  ngOnInit() {
    this.apiServices.getGallaries().subscribe((res: any) => {
      if (res.success) {
        this.gallary = res.gallaries;
        console.log(this.gallary);
      }
    });
  }

  getFirstImage(url: string): string {
    return url.split(',')[0]?.trim();
  }

}
