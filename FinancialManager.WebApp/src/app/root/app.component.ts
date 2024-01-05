import { ChangeDetectorRef, Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { AuthService } from '../auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(private authService: AuthService) { }

  title = 'Financial Manager';
  @ViewChild('drawer') drawer: MatDrawer | undefined;

  showHeader: boolean = false;
  hasBackdrop = true;

  toggleDrawer() {
    if (this.drawer) {
      this.drawer.toggle();
      this.hasBackdrop = this.drawer.opened;
    }
  }

  ngOnInit() {
    this.authService.showHeader.subscribe(
      show => {
        this.showHeader = show
      }
    );
  }

}
