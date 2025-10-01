import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";

const ensureAuthenticated = (req, res, next) => {
  console.log(req);

  //   const auth = req.headers["authorization"];
  console.log("Cookies received:", req.cookies);
  const auth = req.cookies.jwtoken;
  if (!auth) {
    return res.status(403).json({ msg: "Unauthorized, JWT token is required" });
  }
  try {
    const decoded = jwt.verify(auth, process.env.JWT_SECRET);
    req.user = decoded;
    console.log(decoded);
    console.log(req);
    console.log("✅ User role:", decoded.role); // Check this!

    next();
  } catch (error) {
    console.log("❌ Token verification failed:", error.message);
    return res
      .status(403)
      .json({ msg: "Unauthorized, JWT token is wrong or expire" });
  }
};

export default ensureAuthenticated;
