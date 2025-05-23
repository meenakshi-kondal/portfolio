import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getHomeData(): Observable<any> {
    return this.http.get('/assets/data/home.json');
  }

  getSkillData(): Observable<any> {
    return this.http.get('/assets/data/skill.json');
  }

  getProjectData(): Observable<any> {
    return this.http.get('/assets/data/project.json');
  }

  getExperienceData(): Observable<any> {
    return this.http.get('/assets/data/experience.json');
  }

  getContactData(): Observable<any> {
    return this.http.get('/assets/data/contact.json');
  }

  getFooterData(): Observable<any> {
    return this.http.get('/assets/data/footer.json');
  }

}
