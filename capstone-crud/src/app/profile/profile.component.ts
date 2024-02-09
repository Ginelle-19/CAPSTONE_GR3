import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  standalone: true
})
export class ProfileComponent {
  // userArray: any[] = [];
  // isResultLoaded = false;
  // isEditMode = false;

  // LastName: string = "";
  // FirstName: string = "";
  // Birthdate: string = "";
  // StudentNum: string = "";
  // UserName: string = "";
  // Password: string = "";
  // AccountID!: number;

  // currentUser: any;

  // constructor(private http: HttpClient, private authService: AuthService) {
  //   this.getAllUsers()
  // }

  // ngOnInit(): void {
  //   // Assuming authService.getCurrentUser() returns a User object synchronously
  //   this.currentUser = this.authService.getCurrentUser();
  //   if (this.currentUser) {
  //     this.AccountID = this.currentUser.AccountID;
  //     this.getAllUsers();
  //   } else {
  //     console.error('currentUser is undefined.');
  //   }
  // }
  

  // getAllUsers(): void {
  //   this.http.get("http://localhost:8085/api/users")
  //     .subscribe((resultData: any) => {
  //       this.isResultLoaded = true;
  //       console.log(resultData);
  //       this.userArray = resultData.data;
  //       this.userArray.forEach((user: any) => {
  //         if (user.AccountID === this.AccountID) {
  //           this.LastName = user.LastName;
  //           this.FirstName = user.FirstName;
  //           this.Birthdate = user.Birthdate;
  //           this.StudentNum = user.StudentNum;
  //           this.UserName = user.UserName;
  //           this.Password = user.Password;
  //         }
  //       });
  //     });
  // }

  // toggleEditMode() {
  //   this.isEditMode = !this.isEditMode;
  // }

  // setUpdate(currentUser: any) {
  //   this.LastName = currentUser.LastName;
  //   this.FirstName = currentUser.FirstName;
  //   this.Birthdate = currentUser.Birthdate;
  //   this.StudentNum = currentUser.StudentNum;
  //   this.UserName = currentUser.UserName;
  //   this.Password = currentUser.Password;
  //   this.AccountID = currentUser.AccountID;
  // }

  // UpdateProfile() {
  //   if (!this.AccountID) {
  //     console.error('AccountID is undefined.');
  //     return;
  //   }
  
  //   // Exclude AccessLevelID from the data being sent
  //   let bodyData = {
  //     "LastName": this.LastName || '',
  //     "FirstName": this.FirstName || '',
  //     "Birthdate": this.Birthdate || '',
  //     "StudentNum": this.StudentNum || '',
  //     "UserName": this.UserName || '',
  //     "Password": this.Password || '',
  //     "isActive": this.currentUser.isActive,
  //     "AccessLevelID": this.currentUser.AccessLevelID
  //   };
  
  //   this.http.put("http://localhost:8085/api/users/update/" + this.AccountID, bodyData)
  //     .subscribe((resultData: any) => {
  //       console.log(resultData);
  //       alert("Profile Updated Successfully!");
  //       this.getAllUsers();
  //       this.toggleEditMode();
  //     });
  // }
}
