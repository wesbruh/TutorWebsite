import express from 'express';
import { getUserName } from '../controllers/userController.js';
import { requireSignIn } from '../middlewares/authMiddleware.js';
import verifyJWT from '../middlewares/getJwt.js'; // Import the verifyJWT middleware

const router = express.Router();
/*router.get('/user/:id', verifyJWT, (req, res) => {
    // Now you can access the user data from the JWT in `req.user`
    console.log('User data from JWT:', req.user); // Log the decoded user info from the token
    
    res.send('User data accessed successfully!');
});
// Fetch User Data
router.get('/user/:id', requireSignIn, getUserController);*/
router.get('/getname', getUserName);

export default router;