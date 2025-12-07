import { Component, Input , Output, EventEmitter, input, output} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { required } from '@angular/forms/signals';
import { User } from './user.model';

//using type alias
// type User = {
//     id: string;
//     avatar: string;
//     name: string;
// }



@Component({
  selector: 'app-user',
  standalone:false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
//Using Decorators
// @Input({required:true}) id!: string;
// @Input({required:true}) avatar!: string;
// @Input({required:true}) name!: string;
// @Output() select = new EventEmitter();


//Using signal function
// id = input.required<string>();
// avatar = input.required<string>();
// name = input.required<string>();


//Using object input
// @Input({required:true}) user!: {
//     id: string;
//     avatar: string;
//     name: string;
// };

@Input ({required:true}) user!: User;
@Input({required:true}) selected!: boolean;
select = output<string>();

get imagePath(){
    return 'assets/images/users/' + this.user.avatar;
}
onSelectUser() {

    this.select.emit(this.user.id);


  }
}
