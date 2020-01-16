import { Injectable } from '@angular/core';
import { GroupContact } from 'app/admin-pages/model/GroupContact';
import {HttpClient} from "@angular/common/http";


@Injectable()
export class GroupContactsService {

    _contactList: GroupContact[] = [];


  /*  addContact(contact: GroupContact) {
        this._contactList.push(contact);
    }

    removeContact(id: number) {
        const contact = this._contactList.findIndex(c => c.ID === id);
        this._contactList.splice(contact, 1);
    } */

    constructor(
        private  httpClient: HttpClient
    ) { }

    collectionofContacts() {
        return this.httpClient.get('http://localhost:8000/api/group')
    }

    delete(id: string) {
        return this.httpClient.delete(`http:localhost:8000/api/group/${id}`)
    }

  /*  getAllContacts() {
        return this._contactList;
    } */
}
