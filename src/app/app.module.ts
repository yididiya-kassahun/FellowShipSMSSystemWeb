import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app.routing';
import {ComponentsModule} from './components/components.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {AdminPagesLayoutComponent} from './layouts/admin-pages-layout/admin-pages-layout.component';
import {AuthPagesLayoutComponent} from './layouts/auth-pages-layout/auth-pages-layout.component';
import {
    MatDialogModule, MatCardModule, MatExpansionPanel, MatError, MatIconRegistry,
    MatProgressSpinnerModule
} from '@angular/material';
import {MatListModule} from '@angular/material';

import {MatExpansionModule} from '@angular/material/expansion';
import {AddContactComponent} from "app/admin-pages/contacts/add-contact/add-contact.component";
import {ContactsService} from "./admin-pages/contacts/add-contact/contacts.service";
import {GroupContactsService} from "./admin-pages/group-contacts/add-group/group-contact.service";
import {AddGroupComponent} from "./admin-pages/group-contacts/add-group/add-group.component";
import {ContactMessageService} from "./admin-pages/messages/contact-message/add-contact-message/contact-message.service";
import {AddContactMessageComponent} from "./admin-pages/messages/contact-message/add-contact-message/add-contact-message.component";
import {GroupMessagesService} from "./admin-pages/messages/group-message/add-group-message/GroupMessages.service";
import {AddGroupMessageComponent} from "./admin-pages/messages/group-message/add-group-message/add-group-message.component";
import {AddContactService} from "./service/add-contact/add-contact.service";
import {MatIconModule} from "@angular/material/icon";
import {NgxPaginationModule} from "ngx-pagination";
import {MatButtonModule} from "@angular/material/button";
import {UpdateContactComponent} from "./admin-pages/contacts/update-contact/update-contact.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ImportContactComponent} from "./admin-pages/contacts/import-contact/import-contact.component";
import {ConfirmationPopoverModule} from "angular-confirmation-popover";
import {AddGroupService} from "./service/add-group/add-group.service";
import {GroupedContactService} from "./service/grouped-contact/grouped-contact.service";
import {GroupedContactsComponent} from "./admin-pages/group-contacts/grouped-contacts/grouped-contacts.component";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {DashboardServiceService} from "./service/dashboard-service/dashboard-service.service";
import {GroupContactCountService} from "./service/Group-Contact-Count/group-contact-count.service";
import {UpdateGroupContactComponent} from "./admin-pages/group-contacts/grouped-contact-list/update-group-contact/update-group-contact.component";
import {AuthGuard} from "./Auth/auth.guard";
import {AuthenticationService} from "./service/authentication/authentication.service";
import {PublicGuard} from "ngx-auth";
import {AuthenticationModule} from "./service/authentication/authentication.module";
import {AuthPagesModule} from "./auth-pages/auth-pages.module";
import { SuperAdminPagesLayoutComponent } from './layouts/super-admin-pages-layout/super-admin-pages-layout.component';
import {ToastrModule, ToastrService} from "ngx-toastr";
import * as JQuery from "jquery";
import {MapsService} from "./service/maps/maps.service";
import {SuperAdminModule} from "./super-admin-pages/super-admin.module";
import {SettingService} from "./service/setting/setting.service";
import {SmsPortService} from "./service/sms-port/sms-port.service";
import {AddSettingComponent} from "./admin-pages/setting/add-setting/add-setting.component";
import {ConfrimEqualValidatorDirective} from "./auth-pages/shared/confrim-equal-validator.directive";
import {AgmCoreModule} from "@agm/core";
import {GroupMessageService} from "./service/group-message/group-message.service";
import {AddBulkMessageComponent} from "./admin-pages/messages/bulk-message-list/add-bulk-message/add-bulk-message.component";
import { PopupErrorComponent } from './popup-error/popup-error.component';
import {AddSmsPortComponent} from "./admin-pages/sms-ports/add-sms-port/add-sms-port.component";
//import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
//import {ToastrModule} from 'ngx-toastr';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        /*   ToastrModule.forRoot({
               timeOut : 2000
           }),*/
       /* ToastrModule.forRoot({
            timeOut:3000,
            positionClass: 'toast-top-right'
        }),*/
        FormsModule,
        NgxPaginationModule,
        HttpClientModule,
        AuthPagesModule,
        SuperAdminModule,
        AuthenticationModule,
        ComponentsModule,
        MatButtonModule,
        RouterModule,
        AppRoutingModule,
        MatListModule,
        MatDialogModule,
        MatIconModule,
        MatCardModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        ConfirmationPopoverModule.forRoot({confirmButtonType: 'danger'}),
        MatExpansionModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatDatepickerModule,
    ],
    declarations: [
        AppComponent,
        AdminPagesLayoutComponent,
        SuperAdminPagesLayoutComponent,
        AuthPagesLayoutComponent,
        AddGroupComponent,
        AddContactComponent,
        AddContactMessageComponent,
        AddGroupMessageComponent,
        UpdateContactComponent,
        UpdateGroupContactComponent,
        ImportContactComponent,
        GroupedContactsComponent,
        SuperAdminPagesLayoutComponent,
        AddSettingComponent,
        AddBulkMessageComponent,
        PopupErrorComponent,
        AddSmsPortComponent
    ],
    entryComponents: [AddContactComponent, AddGroupComponent,AddContactMessageComponent,
        AddGroupMessageComponent,UpdateContactComponent,ImportContactComponent,GroupedContactsComponent,UpdateGroupContactComponent,
    AddSettingComponent,AddBulkMessageComponent,PopupErrorComponent,AddSmsPortComponent],

    providers: [ContactsService,GroupContactsService,ContactMessageService,GroupMessageService,
        AddContactService,AddGroupService,GroupedContactService,DashboardServiceService,
        GroupContactCountService,AuthGuard,AuthenticationService,MapsService,SettingService,SmsPortService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
