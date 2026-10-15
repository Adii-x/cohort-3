import app from "./src/app.js";
import config from "./src/config/config.js";
import dns from "dns";
import connectDB from "./src/config/db.js";

// DNS config
dns.setServers(["8.8.8.8", "8.8.4.4"]);

// DB connection
await connectDB();

app.listen(config.PORT, () => {
    console.log(`Server is running on port ${config.PORT}`);
});