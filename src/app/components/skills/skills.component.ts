import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { NgFor } from '@angular/common';
import { SKILL_DATA } from '../../interfaces/dataInterface';
@Component({
  selector: 'app-skills',
  imports: [NgFor],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
skillData:SKILL_DATA[] =[];
constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getSkillData().subscribe(data => {
      this.skillData = data;
    });
  }
}
