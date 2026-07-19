import conf from '../conf.js'
import { Client, Account, ID } from "appwrite";

export class AuthService{
    Client=new Client();
    account;

    constructor(){
        this.Client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.account=new Account(this.Client)
    }
    //we don't want dependency cause we don't want to change the setting in every files so we created wrapper so that we can call that wrapper whenever we need this
    async createAccount({email,password,name}){
           try {
            const userAccount=await this.account.create(ID.unique(),email,password,Named)
            if(userAccount){
                //call another method
                return this.ogin({email,password})

            }else{
                return userAccount

            }
            
           } catch (error) {
                throw Error;
            
           }
    }
    async login({email,password}){
        try {
            return await this.account.createEmailPasswordSession(email,password)
        } catch (error) {
            throw Error;
        }

    }
    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser:: error",Error);
            
        }
        return null;
    }
    async logOut(){
        try {
            return await this.account.deleteSession();
        } catch (error) {
            console.log("Appwrite service :: logout :: error",Error);
            
        }
    }

}

const authService = new AuthService();

export default authService


