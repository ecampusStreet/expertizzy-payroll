import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { adminDashboard, ApiService, ToastService, urls } from 'src/app/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private router: Router,
    private apiService: ApiService,
    private toast: ToastService
  ) {}
  breakpoint: number | undefined;

  cardData = [];

  ngOnInit(): void {
    this.getDashboardData();
  }

  onResize(event: any) {
    this.breakpoint = event.target.innerWidth <= 500 ? 1 : 4;
  }
  onSelect(card: any) {
    this.router.navigate([card.url]);
  }

  getDashboardData() {
    const config = {
      url: urls.dashboard.list,
    };
    this.apiService.get(config).subscribe((resp) => {
      if (resp) {
        this.cardData = resp.result.data;
        this.toast.success(resp.message);
      }
    });
  }
}
