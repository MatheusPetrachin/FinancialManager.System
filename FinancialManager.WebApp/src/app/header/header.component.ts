import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service.service';

interface Food {
  value: string;
  viewValue: string;
}

interface Month {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'financialmanager-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {

  constructor(private authService: AuthService, private router: Router) { }

  @Output() toggleDrawerEvent = new EventEmitter<void>();
  form!: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      year: new FormControl(new Date().getFullYear(), [Validators.required]),
      month: new FormControl(new Date().getMonth() + 1, [Validators.required]),
      user: new FormControl('1', [Validators.required]),
    });
  }

  logout() {
    this.authService.showHeader.emit(false);
    this.router.navigate(['/login']);
  }

  toggleDrawer() {
    this.toggleDrawerEvent.emit();
  }

  foods: Food[] = [
    { value: '1', viewValue: 'Matheus' },
    { value: '2', viewValue: 'Sara' }
  ];

  months: Month[] = [
    { value: 1, viewValue: 'Janeiro' },
    { value: 2, viewValue: 'Fevereiro' },
    { value: 3, viewValue: 'Março' },
    { value: 4, viewValue: 'Abriu' },
    { value: 5, viewValue: 'Maio' },
    { value: 6, viewValue: 'Junho' },
    { value: 7, viewValue: 'Julho' },
    { value: 8, viewValue: 'Agosto' },
    { value: 9, viewValue: 'Setembro' },
    { value: 10, viewValue: 'Outubro' },
    { value: 11, viewValue: 'Novembro' },
    { value: 12, viewValue: 'Dezembro' }
  ];
}
