import jwt from 'jsonwebtoken';

// Middleware function to verify the JWT
const verifyJWT = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]; // Extract token from Authorization header

  if (!token) {
    return res.status(401).send('No token provided');
  }

  // Verify the token using your JWT_SECRET (from environment variables or config)
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).send('Failed to authenticate token');
    }

    // Attach the decoded user info to the request object so you can use it later
    req.user = decoded;
    next(); // Call the next middleware or route handler
  });
};

export default verifyJWT;