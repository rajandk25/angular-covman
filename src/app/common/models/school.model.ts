import { Employee } from "./employee.model";
import { Student } from "./student.model";
import { schoolDistrict } from "./schoolDistrict.model";
import { Address } from "./address.model";

export class School{

     id: number;
     name: String;
     address: Address;
     district: schoolDistrict;
     employee: Employee[];
     student: Student[];
}
