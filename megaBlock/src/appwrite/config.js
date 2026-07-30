import conf  from '../conf.js';
import {client, ID,Databases,Storage,Query} from 'appwrite';

export class service{
    client = new client();  
    Databases;
    Storage;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.Databases=new Databases(this.client);
        this.Storage=new Storage(this.client);
    }
    async createPost({title,slug,content,featureImage,status,userId}){
        try {
            return await this.Databases.createDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug,{
                title,
                content,
                featureImage,
                status,
                userId
            })
        } 
        catch (error) {
            console.log("Appwrite service :: createDocument :: error",Error);  
            
        }
    }
    async updateDocument(slug,{title,content,featureImage,status,userId}){
        try {
            return await this.Databases.updateDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug,{
                title,
                content,
                featureImage,
                status
                
            })
        } 
        catch (error) {
            console.log("Appwrite service :: updateDocument :: error",Error);
        }
    }
    async deletePost(slug){
        try {
            return await this.Databases.deletePost(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true
        } 
        catch (error) 
        {
            console.log("Appwrite service :: deletePost :: error",Error);
        }   
    }
    async getPost(slug){
        try {
            await this.Databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            
        } 
        catch (error) {
            console.log("Appwrite service :: getPost :: error",Error);
        }

    }
    async getAllPosts(query=[Query.equal('status','equal')]){ 
        try {
            await this.Databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                query,
                
            )
        } 
        catch (error) {
            console.log("Appwrite Service :: getAllPosts:: error",error);
            return false;
            
        }
}
}
    
const Service = new service();
export default Service; 