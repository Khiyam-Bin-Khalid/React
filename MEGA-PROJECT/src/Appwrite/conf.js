import config from "../config/config";
import { Client, ID, Databases, Storage, Query} from "appwrite";

export class Service{
    client= new Client();
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectId);
        this.databases=new Databases(this.client);
        this.bucket=new Storage(this.client);
    }
    async createPost({title, slug, content, featuredImage, status, userId}){
        // eslint-disable-next-line no-empty
        try{
            return await this.databases.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        }
        catch(error){
            console.log("AppWrite Service::createPost::error", error);
        }
    }
    async updatePost( slug,{title, content, featuredImage, status})
    {
        // eslint-disable-next-line no-empty
        try{
            return await this.databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )

        }
        catch(error){
            console.log("AppWrite Service::updatePost::error", error);
        }
    }
        async deletePost(slug){
            try{
                await this.databases.deleteDocument(
                    config.appwriteDatabaseId,
                    config.appwriteCollectionId,
                    slug
                )
                return true;
            }
            catch(error){
                console.log("AppWrite Service::deletePost::error", error);
                return false;
            }

        }
        // eslint-disable-next-line no-unused-vars

        //for single post
        async getPost(slug){
            // eslint-disable-next-line no-empty
            try{
                return await this.databases.getDocument(
                    config.appwriteDatabaseId,
                    config.appwriteCollectionId,
                    slug
                )

        }
        catch(error){
            console.log("AppWrite Service::getPost::error", error);
            return false;
        }
    }
    //for multiple posts
    // eslint-disable-next-line no-unused-vars
    async getPosts(queries= [Query.equal("status", "active")]){
        // eslint-disable-next-line no-empty
        try{
            return await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                queries,
                // 100,
                // pagination  is used to get a limited number of data Entities.


            )

        }
        // eslint-disable-next-line no-empty, no-unused-vars
        catch(error){
            console.log("AppWrite Service::getPosts::error",error);
            return false;
        }
    }
    //file upload Serices
    // eslint-disable-next-line no-unused-vars
    async uploadFile(file){
        // eslint-disable-next-line no-empty
        try{
            return await this.bucket.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file
            )
        }
        // eslint-disable-next-line no-empty, no-unused-vars
        catch(error){
            console.log("AppWrite Services::uploadFile::error",error);
            return false;
        }
    }
     //deleteFile
     async deleteFile(fileId){
    // eslint-disable-next-line no-empty
        try{
            await this.bucket.deleteFile(
                config.appwriteBucketId,
                fileId,
            )
            return true
        }
        catch(error){
            console.log("AppWrite Services::deleteFile::error",error);
        return false
        }
     }
     getFilePreview(fileId){
        return this.bucket.getFilePreview(
            config.appwriteBucketId,
            fileId
        )
     }
}

const service = new Service();
export default service;