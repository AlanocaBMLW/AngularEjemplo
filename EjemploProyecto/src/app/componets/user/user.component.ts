import { Component, OnInit, inject } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/models/user';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 
  userService: UsersService= inject(UsersService);
  users: User[]=[];
  ngOnInit(): void {
    console.log(">>>>>>ngOnInit UserComponent")
    this.userService.getUsers().subscribe(users => {
      console.log(users);
      this.users=users;
    });
  }
}


