import {Component, OnInit} from '@angular/core';
import {FormBuilder, NgForm, Validators} from '@angular/forms';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {LoginResponseInterface} from "../../service/authentication/authentication.interface";
import {LoginInterface} from "./login.interface";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../service/authentication/authentication.service";
import {StorageService} from "../../service/storage.service";
import {ToastrService} from "ngx-toastr";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    public loginForm: any;
    user_token: any;
    loading: boolean;
    hide = true;

    showSpinner = false;

    constructor(private router: Router,
                private httpClient: HttpClient,
                private authenticationService: AuthenticationService,
                private formBuilder: FormBuilder,
                private storageService: StorageService,) {
    }


    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required]],
            password: ['', [Validators.required]],
        });
    }


    login(loginInterface: LoginInterface) {
        this.loading = true;
        this.authenticationService.login(loginInterface)
            .subscribe(data => {
                this.loading = false;
                console.log('******* Well come ********');
                // this.toastr.success('Welcome to Fellowship SMS System', 'Welcome!');
                this.setUserRoleID(data.User_role_id[0].id);
                if (data.User_role_id[0].id == 1) {
                    this.router.navigateByUrl("/admin");
                } else if (data.User_role_id[0].id == 2) {
                    this.router.navigateByUrl("/super-admin");
                }

                this.user_token = this.storageService.getStorage('accessToken');
                localStorage.setItem('accessToken', this.user_token);
            }, (httpErrorResponse: HttpErrorResponse) => {
                this.loading = false;
                //  this.toastr.error(httpErrorResponse.error.message, 'Login Error');
                console.log('******* Login Error ********');
                this.loginForm.controls['email'].setValue('');
                this.loginForm.controls['password'].setValue('');
                // window.location.reload();
            })
        this.showSpinner = true;
        setTimeout(() => {
            this.showSpinner = false;
        }, 20000)
    }

    public setUserRoleID(user_role_id: string) {
        localStorage.setItem('user_role_id', user_role_id);
    }

    private handleResponse(data: any) {
        this.setUserRoleID(data.user_role_id[0].id);
    }
}
