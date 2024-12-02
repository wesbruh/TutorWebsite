import User from '../models/userModel.js';

export const getUserName = async (req, res) => {
  const {userId} = req.user?.id;

  try{
      const user = await User.findById(userId, 'name');
      // returns name of tutor based on id
      if (user){
          res.json({ name: user.name,
                  email: user.email
          });
      } else {
          res.status(404).json({ error: 'User not found' });
      } 
  } catch (error){
      res.status(500).json({ error: 'Error fetching user info' });
  }
};

export const getUserData = async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      console.error("Error in getUserName:", error);
      res.status(500).json({ error: "Internal Server Error"});
    }
  };

/*export const getTutorSubject = async (req, res) => {
  const {tutorId} = req.body;

  try{
      const tutor = await Tutor.findById(tutorId, 'subject');
      // returns name of tutor based on id
      if (tutor){
          res.json({
                  subject: tutor.subject
          });
      } else {
          res.status(500).json({ error: 'Error fetching tutor info' });
      } 
  } catch (error){
      res.status(500).json({ error: 'Error fetching tutor info' });
  }
};*/