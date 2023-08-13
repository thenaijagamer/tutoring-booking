import jwt from "jsonwebtoken";
import "../loadEnviroment.mjs";

const jwtSecret = process.env.JWT_SECRET;

const authMiddleware = (req, res, next) => {
  // Get the token from the request headers
  const token = req.header("x-auth-token");

  // Check if token is missing
  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    // Verify the token and extract user information
    const decoded = jwt.verify(token, jwtSecret);

    // Attach user data to the request object
    req.user = decoded;
    // console.log(decoded);
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "Token is not valid" });
  }
};

export default authMiddleware;
