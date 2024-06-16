import { Client, ID, Databases, Storage, Query } from "appwrite";
import conf from '../conf/conf'


export class DBService {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint('https://cloud.appwrite.io/v1')
            .setProject(conf.projectId);

        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                conf.databaseId,
                conf.collectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log(error.message);
        }

    }

    async updatePost(slug, { title, content, featuredImage, status, userId }) {
        try {
            return await this.databases.updateDocument(
                conf.databaseId,
                conf.collectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            console.log(error.message);
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                conf.databaseId,
                conf.collectionId,
                slug
            )
            return true
        } catch (error) {
            console.log(error.message);
            return false
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.databaseId,
                conf.collectionId,
                slug
            )
        } catch (error) {
            console.log(error.message);
            return false
        }
    }

    async getMuliPost(queries = [Query.equal('status', 'active')]) {
        try {
            return await this.databases.listDocuments(
                conf.databaseId,
                conf.collectionId,
                queries
            )
        } catch (error) {
            console.log(error.message);
            return false
        }
    }








    // File Upload 
    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.bucketId,
                ID.unique(),
                file
            )

        } catch (error) {
            console.log(error.message);
            return false
        }
    }

    // File Delete 
    async deleteFile(fileId) {
        try {
            return await this.bucket.deleteFile(
                conf.bucketId,
                ID.unique(),
                fileId
            )
            return true

        } catch (error) {
            console.log(error.message);
            return false
        }
    }

    getFilePreview(fileId) {
        return this.bucket.getFilePreview(
            conf.bucketId,
            fileId
        )
    }

}






const dbService = new DBService()
export default dbService;