import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  userName: string = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userName = this.userService.userName; 
  }

}
