import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CONTACT_DATA } from '../../interfaces/dataInterface';

@Component({
  selector: 'app-contact',
  imports: [NgFor],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  dots = Array(60); 
  contactData:CONTACT_DATA[] =[];

  constructor(private dataService: DataService    ) {}
  
  ngOnInit() {
    this.dataService.getContactData().subscribe(data => {
      this.contactData = data;
    });
  }
}
