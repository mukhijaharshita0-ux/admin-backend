import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const SECRET_KEY = process.env.JWT_SECRET;
const EXPIRY = process.env.TOKEN_EXPIRY || "1h"; 


export const generateToken = (userId) => {
  return jwt.sign({ id: userId }, SECRET_KEY, { expiresIn: EXPIRY });
};


export const verifyToken = (token) => {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (error) {
    return null; 
  }
};
