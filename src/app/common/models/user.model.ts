
import { Address } from './address.model';
import { Modification } from './modification.model';

export class User {
    constructor() {
        this.id = null;
        this.firstName = null;
        this.password = null;
        this.email = null;
        this.lastName = null;
        this.role = null;
    }

    id: number;
    firstName: string;
    lastName: string;
    password: string;
    email: string;
    role: string;
    address: Address;
    modification: Modification;
}
