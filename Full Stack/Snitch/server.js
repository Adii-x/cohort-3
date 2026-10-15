import app from "./src/app.js";
import dns from "dns";
import connectDB from "./src/config/db.js";

// DNS configuration
dns.setServers(["8.8.8.8", "8.8.4.4"]);

// DB connection
await connectDB();

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});