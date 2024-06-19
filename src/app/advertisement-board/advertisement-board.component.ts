import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-advertisement-board',
  templateUrl: './advertisement-board.component.html',
  styleUrls: ['./advertisement-board.component.css'],
  standalone:true,
  imports:[ReactiveFormsModule, CommonModule]
})
export class AdvertisementBoardComponent implements OnInit {
  advertisements: any[] = []; // Массив для хранения объявлений

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchAdvertisements();
  }

  fetchAdvertisements() {
    this.http.get<any[]>('http://localhost:8080/advertisement_board')
      .subscribe(data => {
        this.advertisements = data; // Сохраняем полученные объявления
      }, error => {
        console.error('Failed to fetch advertisements', error);
      });
  }
}