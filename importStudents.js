const fs = require('fs');
const csv = require('csv-parser');
const { MongoClient } = require('mongodb');
const Student = require('./models/Student'); // Adjust the path as needed

// MongoDB connection
const url = 'mongodb://localhost:27017';
const dbName = 'attendance_system'; // Replace with your actual database name
const filePath = '/Users/sahil/Downloads/College/MINOR/Project/data/students.csv'; // Updated path

async function importStudents() {
    const client = new MongoClient(url);
    await client.connect();
    const db = client.db(dbName);
    
    fs.createReadStream(filePath)
        .pipe(csv())
        .on('data', async (row) => {
            try {
                const newStudent = new Student({
                    student_id: row.student_id,
                    name: row.name,
                    batch: row.batch,
                    email: row.email,
                    enrollment_year: row.enrollment_year,
                    phone: row.phone,
                    classes: row.classes.split(',').map(className => className.trim()),
                });

                await newStudent.save();
                console.log('Inserted:', newStudent);
            } catch (error) {
                console.error('Error inserting student:', error);
            }
        })
        .on('end', () => {
            console.log('CSV file successfully processed');
            client.close();
        });
}

importStudents().catch(console.error);
