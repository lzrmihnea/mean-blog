import {Injectable} from "angular2/core";
import {CONTACTS} from "app/components/mock-contact";
import {Contact} from "app/components/contact";

@Injectable()
export class ContactService {
    getContacts() {
        return Promise.resolve(CONTACTS);
    }

    insertContact(_contact:Contact) {
        Promise.resolve(CONTACTS).then((contacts:Contact[]) => contacts.push(_contact));
    }
}