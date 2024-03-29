import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  showHeader = new EventEmitter<boolean>();

  constructor() { }
}
