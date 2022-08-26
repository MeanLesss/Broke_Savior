class User {
    constructor(Username, Password) {
        this.username = Username;
        this.password = Password;
    }
    get getUsername() { return this.username; }
    set setUsername(username) { this.username = username; }

    get getPassword() { return this.password; }
    set setPassword(password) { this.password = password; }
}