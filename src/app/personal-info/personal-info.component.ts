import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [],
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.css'
})
export class PersonalInfoComponent {
  name: string = 'Coleen Masbang';
  title = 'Your Title';
  email = 'coleenmasbang14@gmail.com';
  phone = '09067385543';
  github = 'https://github.com/vanilla02';
}
