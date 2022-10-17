export interface IDataAccount {
   first_name: string;
   last_name: string;
   email: string;
   address: string;
   password: string;
   image: string;
   city: any,
   province: any,
   district: any,
   zip_code: any
}

export interface IDataPassword {
   old_password: string;
   password: string;
   password_confirmation: string;
}