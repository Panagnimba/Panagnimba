import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguage: string = 'fr'; // Default language

  constructor() {}

  // Get the current language
  getCurrentLanguage(): string {
    return this.currentLanguage;
  }

  // Set the current language
  setCurrentLanguage(language: string): void {
    this.currentLanguage = language;
  }
}
