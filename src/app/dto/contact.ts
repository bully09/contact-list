export class Contact {
    id: number;
    name: string;
    age: number;
    nickName: string;
    phone: string;

    constructor(id: number, name: string, age: number, phone: string, nickName?: string) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.nickName = nickName;
    }
}