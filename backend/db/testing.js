const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const mongoDB = "mongodb+srv://certifiedcoders:wLDQ5WjysaWfUIz0@eventmanager.lxtd08i.mongodb.net/?retryWrites=true&w=majority&appName=EventManager";

main().catch((err) => console.log(err + "Not connecting"));

async function main() {
    console.log("Debug: About to connect");
    await mongoose.connect(mongoDB);
    console.log("Debug: Should be connected?");
    await createUsers();
    console.log("Debug: Closing mongoose");
    mongoose.connection.close();
}

// Define UserDetail schema and model
const User = require("./user.schema");

const users = [];

async function userCreate(index, name, password, email) {
    const userDetail = {
        userid: Date.now().toString(),
        name: name,
        password: password,
        email: email,
    };

    const user = new User(userDetail);
    await user.save();
    users[index] = user;
    console.log(`Added user: ${name}`);
}

const { Event } = require("./event.schema"); // Adjust the path as necessary
const events = []; // Array to store event instances

async function eventCreate(index, title, description, userid, categories, location, date, entryfee) {
    const eventDetail = {
        eventid: Date.now().toString(),
        title: title,
        description: description,
        userid: userid,
        categories: categories, // Corrected the field name here
        location: location,
        date: date,
        entryfee: entryfee,
    };

    const event = new Event(eventDetail);
    await event.save();
    events[index] = event;
    console.log(`Added event: ${title}`);
}

// Example usage
(async () => {
    await eventCreate(0, 'Sample Event', 'This is a sample event description.', 'user123', 'Category1', 'Location1', '2023-01-01', 10);
})();

async function createUsers() {
    console.log("Adding users");
    await Promise.all([
        userCreate(0, "John Doe", "password123", "john.doe@example.com"),
        userCreate(1, "Jane Smith", "securepassword", "jane.smith@example.com"),
        userCreate(2, "Alice Johnson", "mypassword", "alice.johnson@example.com"),
        userCreate(3, "Bob Brown", "pass1234", "bob.brown@example.com"),
        userCreate(4, "Charlie Davis", "charliepass", "charlie.davis@example.com"),
    ]);
}
