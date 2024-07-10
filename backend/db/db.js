const mongoose = require("mongoose")
mongoose.set("strictQuery",false);

const mongoUrl = "mongodb+srv://certifiedcoders:wLDQ5WjysaWfUIz0@eventmanager.lxtd08i.mongodb.net/manager"

main().catch((err) => console.log(err))

    async function main(){
        await mongoose.connect(mongoUrl);
    }

    module.exports = main;