import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import userRoutes from "./routes/userDataroutes.js";
import teacherRoutes from "./routes/teacherRoutes.js";
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import cookieParser from "cookie-parser";
import adminRoutes from "./routes/adminRoutes.js";

const app = express();
dotenv.config({
  path: "./env",
});

connectDB();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json()); // middleware to parse JSON
app.use(cookieParser());

app.use(express.urlencoded({ extended: false }));
app.use("/uploads", express.static("uploads"));

app.use("/", userRoutes);
app.use("/college", teacherRoutes);
app.use("/adminHandle", adminRoutes);
// app.use("/:userId", userRoutes);

// app.post("/userArray",(req,res)=>{
//   console.log("fetching array from frontend");
//   const user =

// })

app.listen(process.env.PORT, () => {
  console.log("server listening on port 8000");
});

// import express from "express";

// import cors from "cors";

// const app = express();

// // Enable CORS for all origins (for development)
// app.use(
//   cors({
//     origin: true, // This allows all origins
//     credentials: true,
//   })
// );

// // Middleware to parse JSON
// app.use(express.json());

// app.get("/api", (req, res) => {
//   res.json({ message: "Hello from server" });
// });

// app.listen(8000, () => {
//   console.log("server listening on port 8000");
// });
