import { Component } from '@angular/core';

import { LoadingService } from './core/loading/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isLoading: boolean;
  public isImageLoaded: boolean;

  constructor(private loading: LoadingService) {
    this.isLoading = false;
    this.isImageLoaded = false;

    this.loading.status$.subscribe((status: boolean) => {
      this.isLoading = status;

      if (!this.isLoading) this.isImageLoaded = false;
    });
  }

  public showSpinner(): void {
    this.isImageLoaded = true;
  }
}
