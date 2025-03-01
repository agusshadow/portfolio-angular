import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GithubService } from 'src/app/modules/projects/services/github.service';

@Component({
  selector: 'app-projects-container',
  templateUrl: './projects-container.component.html',
  styleUrls: ['./projects-container.component.scss']
})
export class ProjectsContainerComponent implements OnInit {

  projects$: Observable<any[]> = of([]);
  avatarUrl: string= '';

  constructor(private githubService: GithubService) { }

  ngOnInit() {
    this.projects$ = this.githubService.getData();
    this.projects$.subscribe(value => {console.log(value)})
    this.projects$.subscribe(projects => {
      if (projects.length > 0 && projects[0].owner && projects[0].owner.avatar_url) {
        this.avatarUrl = projects[0].owner.avatar_url;
      } else {
        this.avatarUrl = '';
      }
    });
  }

  get projectsList(): Observable<any[]> {
    return this.projects$;
  }

  get user(): string {
    return this.avatarUrl;
  }

}
