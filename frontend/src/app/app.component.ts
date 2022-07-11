import { Component, OnInit } from '@angular/core';
import { LocalStorageKey } from './enums/local-storage-key-enum';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title: string = 'online-fishing-store';

  constructor(
    private authService: AuthService,
    ){}

  ngOnInit(): void {
    const token: string = localStorage.getItem(LocalStorageKey.AUTH_TOKEN);

    if(token) {
      this.authService.setToken(token);
    }
  }
}
