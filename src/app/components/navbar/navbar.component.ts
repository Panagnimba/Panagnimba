import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {

  constructor(private dataService: DataService) {  }  
  // Get the navList based on the selected language
  get navList() {
    return this.dataService.navList
  }


  handleClick({ itemId }: { itemId: number }) {
    this.navList.forEach(item => {
      if (item.id != itemId)
        item.isActive = false
      else
        item.isActive = true
    })

  }
}