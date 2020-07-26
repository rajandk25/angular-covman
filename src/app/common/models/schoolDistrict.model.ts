import { School } from "./school.model";
import { Address } from "./address.model";


export class schoolDistrict{
    
    id: number;
    name: string;
    address: Address;
    schools: School[];
}