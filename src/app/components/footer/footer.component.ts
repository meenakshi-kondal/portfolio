import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
  footerData: string = '';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getFooterData().subscribe(data => {
      this.footerData = data.details;
    });
  }
}
