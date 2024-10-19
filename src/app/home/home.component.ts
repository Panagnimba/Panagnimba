import { Component } from '@angular/core';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { HeaderComponent } from '../components/header/header.component';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private dataService: DataService) { }

  get profileData() {
    return this.dataService.profileData
  }
}
