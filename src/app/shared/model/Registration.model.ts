export class Registration {

  firstName: string;
  lastName: string;
  email: string;
  password: string;
  code: number;
  phone: number;


  constructor(firstName?: string, lastName?: string, email?: string, password?: string, code?: number, phone?: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.code = code;
    this.phone = phone;
  }
}
