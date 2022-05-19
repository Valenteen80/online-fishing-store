import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'online-fishing-store';

  constructor(private authService: AuthService){}

  ngOnInit(): void {
    const potentialToken = localStorage.getItem('auth_token');

    if(potentialToken) {
      this.authService.setToken(potentialToken);
    }
  }
}
