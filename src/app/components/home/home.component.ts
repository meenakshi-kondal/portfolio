import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { HOME_PROFILE } from '../../interfaces/dataInterface';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  developer='/assets/images/dev.png';
  homeProfile: HOME_PROFILE = {
    greeting: '',
    content: '',
    about:''
  };

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getHomeData().subscribe(data => {
      this.homeProfile = data;
    });
  }
}
