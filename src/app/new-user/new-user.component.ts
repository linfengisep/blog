import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
    userForm:FormGroup;

    constructor(private formBuilder : FormBuilder,
                private userService : UserService,
                private router : Router) { }
    ngOnInit() {
        this.formInit();
    }
    formInit(){
        this.userForm = this.formBuilder.group({
            firstName: ['',Validators.required],
            lastName: ['',Validators.required],
            mail: ['',[Validators.required,Validators.email]],
            drinkPreference: ['',Validators.required],
            hobbies: this.formBuilder.array([])
        });
    }

    onSubmitForm(){
        const userFormValue = this.userForm.value;
        const newUser = new User(
            userFormValue['firstName'],
            userFormValue['lastName'],
            userFormValue['mail'],
            userFormValue['drinkPreference'],
            userFormValue['hobbies']? userFormValue['hobbies']:[],
        );
        this.userService.addUser(newUser);
        this.router.navigate(['/users']);
    }

    getHobbies(){
        return this.userForm.get('hobbies') as FormArray;
    }

    onAddHobby(){
        const newHobbyControl = this.formBuilder.control("",Validators.required);
        this.getHobbies().push(newHobbyControl);
    }

}
