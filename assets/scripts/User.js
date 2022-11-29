class User {
    #name;
    #userName
    #email;
    #id

    constructor(id, name, userName, email) {
       
        this.#id = id;
        this.#name = name;
        this.#userName = userName;
        this.#email = email;
    }
    set name(id) {
        this.#id = id;
    }
    get id() {
        return this.#id;
    }
    set name(name) {
        this.#name = name;
    }
    get name() {
        return this.#name;
    }
    set userName(userName) {
        this.#userName = userName;
    }
    get userName() {
        return this.#userName;
    }
    set email(email) {
        this.#email = email;
    }
    get email() {
        return this.#email;
    }

}

class Subscriber extends User {

    #pages;
    #groups;
    #canMonetize;
    
    constructor(id, name, userName, email,pages,groups,canMonetize = true){
        super (id, name, userName, email); {
            this.#pages = pages;
            this.#groups = groups;
            this.#canMonetize = canMonetize;
        }
    }

    get pages() {
        return this.#pages;
    }
    get groups() {
        return this.#groups;
    }
    get canMonetize() {
        return this.#canMonetize;
    }
    getInfo() {
        return `id:${this.id}\nname:${this.name}\nuserName:${this.userName}\nEmail:${this.email}\nPages:${this.pages}\nGroups:${this.groups}\nCanMOnetize:${this.canMonetize}`;
    }
}





export{ User, Subscriber};