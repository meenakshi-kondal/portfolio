import { Component } from '@angular/core';
import {  CommonModule, NgFor } from '@angular/common';
import { DataService } from '../../services/data.service';
import { PROJECT_DATA } from '../../interfaces/dataInterface';

@Component({
  selector: 'app-projects',
  imports: [NgFor,CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
projectData:PROJECT_DATA[]=[];

constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getProjectData().subscribe(data => {
      this.projectData = data;
    });
  }
}
