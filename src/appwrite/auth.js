import { Client, Account, ID } from "appwrite";
import conf from '../conf/conf'

export class AuthService {
    client = new Client();
    account;
    constructor() {
        this.client
            .setEndpoint('https://cloud.appwrite.io/v1')
            .setProject(conf.projectId);
        this.account = new Account(this.client)
    }

    // create a account SIGNUP
    async signUp({ email, password, name }) {
        try {
            let res = await this.account.create(ID.unique(), email, password, name)
            if (res) {
                return this.login({ email, password })
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    // LOGIN ACCOUNT 
    async login({ email, password }) {
        try {
            let res = await this.account.createEmailPasswordSession(email, password)

        } catch (error) {
            console.log(error.message);
        }
    }


    // Get User Details
    async getUser() {
        try {
            return await this.account.get()
        } catch (error) {
            console.log(error.message);
        }
        return null;
    }


    // Logout
    async logout() {
        try {
            return await this.account.deleteSession('current')
        } catch (error) {
            console.log(error.message);
        }
        return null;
    }

}


const authService = new AuthService();

export default authService;

