import { Component } from '@angular/core';
import { Api } from '../../../services/api';
import { NgFor, NgIf } from '@angular/common';
import { NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-notice',
  imports: [NgIf,NgFor,RouterLink],
  templateUrl: './notice.html',
  styleUrl: './notice.scss'
})
export class Notice {
  notices: any[] = [];

  constructor(private apiServices: Api) {}

  ngOnInit(): void {
    this.getNotices();
  }

  getNotices() {
    this.apiServices.getNotices().subscribe((res: any) => {
      if (res.success) {
        this.notices = res.notices;
      }
    });
  }
}
