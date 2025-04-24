import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { DataService } from '../../services/data.service';
import { EXPERIENCE_DATA } from '../../interfaces/dataInterface';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-experience',
  imports: [NgFor],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {

  experienceData:EXPERIENCE_DATA[] =[];

  constructor(private dataService: DataService  ) {}
  
    ngOnInit() {
      this.dataService.getExperienceData().subscribe(data => {
        this.experienceData = data;
      });
    }


}
