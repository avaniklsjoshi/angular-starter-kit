import {Component} from '@angular/core';
import {User} from './shared/model/User'

@Component({
  selector : 'my-app',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css']
})

export class AppComponent{
  title = 'basic';
  message = 'My First Angular App';
  users: User[] = [
    {id: 25, name: 'Avani', username: 'avanijoshi'},
    {id: 26, name: 'Baba', username: 'babajoshi'},
    {id: 27, name: 'OOpi', username: 'oopig'}
  ];

  activeUser: User;

  selectUser(user){
    this.activeUser=user;
    console.log(this.activeUser);
  }

  onUserCreated(event){
    // console.log(event);
    this.users.push(event.user);
  }
}