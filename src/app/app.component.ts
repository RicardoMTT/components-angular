import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { UserRegistrationModel } from './models/user-registration.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showDialog = false;
  title = 'Angular14App';
  registerForm!: FormGroup;
  submitted = false;
  reCAPTCHAToken: string = "";
  tokenVisible: boolean = false;
  registrationInfo!: UserRegistrationModel;
    constructor(private formBuilder: FormBuilder, private recaptchaV3Service: ReCaptchaV3Service) {}
    ngOnInit() {
        this.registerForm = new FormGroup({
            UserName: new FormControl(),
            UserEmailId: new FormControl(),
            password: new FormControl(),
            confirmPassword: new FormControl(),
        })
    }
    onSubmit() {
      this.recaptchaV3Service.onExecute.subscribe(data => {
        console.log('data',data);

      })
        this.recaptchaV3Service.execute('importantAction').subscribe((token: string) => {
            this.tokenVisible = true;
            this.reCAPTCHAToken = `Token [${token}] generated`;
        });
    }

  flagOpenAside: boolean = false;
  openAside() {
    this.flagOpenAside = true;
  }

  search(event){
    console.log('event',event);

  }

  searchByValue(event){
    console.log('event',event);

  }
}
