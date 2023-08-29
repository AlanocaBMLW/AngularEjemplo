import { Component, OnInit, inject } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 
  userService: UsersService= inject(UsersService);
  ngOnInit(): void {
    console.log("ngOnInit")
  }
}


