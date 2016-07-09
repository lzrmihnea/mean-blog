import {Injectable} from "angular2/core";
import {CONTACTS} from "app/components/mock-contact";

@Injectable()
export class ContactService {
    getContacts() {
        return Promise.resolve(CONTACTS);
    }
}