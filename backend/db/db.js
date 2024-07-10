const mongoose = require("mongoose")
mongoose.set("strictQuery",false);

const mongoUrl = "mongodb+srv://certifiedcoders:wLDQ5WjysaWfUIz0@eventmanager.lxtd08i.mongodb.net/?retryWrites=true&w=majority&appName=EventManager"

main().catch((err) => console.log(err))

    async function main(){
        await mongoose.connect(mongoUrl);
    }
