const { MongoClient } = require('mongodb');

// Replace the following with your MongoDB connection string
const url = 'mongodb://localhost:27017';
const dbName = 'yourDatabaseName'; // Replace with your database name

async function main() {
    const client = new MongoClient(url);

    try {
        // Connect the client to the server
        await client.connect();
        console.log("Connected successfully to MongoDB server");

        // Access the database
        const db = client.db(dbName);
        
        // You can perform database operations here
        // For example, listing collections
        const collections = await db.listCollections().toArray();
        console.log("Collections:", collections);
        
    } catch (err) {
        console.error(err);
    } finally {
        // Ensure the client will close when you finish/error
        await client.close();
    }
}

// Run the main function
main().catch(console.error);
