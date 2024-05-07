import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { EducationComponent } from './education/education.component';
import { ReferencesComponent } from './references/references.component';
import { TrainingComponent } from './training/training.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { SkillsCertificationComponent } from './training/skills-certification/skills-certification.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PersonalInfoComponent, EducationComponent, ReferencesComponent, TrainingComponent, WorkExperienceComponent, SkillsCertificationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Resume';
  name: string = 'Coleen';

}
