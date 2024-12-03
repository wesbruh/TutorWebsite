import User from '../models/userModel.js';

export const getUserName = async (req, res) => {
  
  try{
      const userId = req.user?.id;
      const user = await User.findById(userId, 'firstName email');
      // returns name and email of user based on id
      if (user){
          res.json({ firstName: user.firstName,
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

  export const setFirstName = async (req, res) => {
    try {
        // Validate the userId
        const userId = req.user?._id; 
        if (!userId) return res.status(400).json({ error: 'User ID missing' });

        //get firstName
        const { firstName } = req.body;
        if (!firstName) return res.status(400).json({ error: 'First name is required' });

        // Update first name
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { firstName }, // Update firstName field
            { new: true, runValidators: true } // Return update
        );

        if (!updatedUser) return res.status(404).json({ error: 'User not found' });

        res.status(200).json({ message: 'First name updated successfully', user: updatedUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error updating user info' });
    }
};

export const setLastName = async (req, res) => {
    try {
        // Validate the userId
        const userId = req.user?._id; 
        if (!userId) return res.status(400).json({ error: 'User ID missing' });

        //get lastName
        const { lastName } = req.body;
        if (!lastName) return res.status(400).json({ error: 'Last name is required' });

        // Update last name
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { lastName }, // Update lastName field
            { new: true, runValidators: true } // Return update
        );

        if (!updatedUser) return res.status(404).json({ error: 'User not found' });

        res.status(200).json({ message: 'Last name updated successfully', user: updatedUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error updating user info' });
    }
};



export const setEmail = async (req, res) => {
    try {
        // Validate the userId
        const userId = req.user?._id; 
        if (!userId) return res.status(400).json({ error: 'User ID missing' });

        //get lastName
        const { email } = req.body;
        if (!email) return res.status(400).json({ error: 'Email is required' });

        // Update last name
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { email }, // Update lastName field
            { new: true, runValidators: true } // Return update
        );

        if (!updatedUser) return res.status(404).json({ error: 'User not found' });

        res.status(200).json({ message: 'Email updated successfully', user: updatedUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error updating user info' });
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