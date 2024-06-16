const conf = {
    brandName: String(import.meta.env.VITE_BRANDE),
    endpoint: String(import.meta.env.VITE_ENDPOINT),
    projectId: String(import.meta.env.VITE_PROJECT_ID),
    databaseId: String(import.meta.env.VITE_DATABASE_ID),
    collectionId: String(import.meta.env.VITE_COLLECTION_ID),
    bucketId: String(import.meta.env.VITE_BUCKET_ID),
}

export default conf