import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    private toastr: ToastrService
  ) { }

  public showSuccess(message: string, timespan: number, title?: string): void {
    this.toastr.success(message, title, {
      timeOut:  timespan,
      progressBar: true,
      closeButton: true,
    });
  }

  public showError(message: string, timespan: number, title?: string): void {
    this.toastr.error(message, title, {
      timeOut:  timespan,
      progressBar: true,
      closeButton: true,
    });
  }

  public showInfo(message: string, timespan: number, title?: string): void {
    this.toastr.info(message, title, {
      timeOut:  timespan,
      progressBar: true,
      closeButton: true,
    });
  }
}
