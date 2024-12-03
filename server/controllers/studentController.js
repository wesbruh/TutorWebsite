export const getStudentData = async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      console.error("Error in getTutorName:", error);
      res.status(500).json({ error: "Internal Server Error"});
    }
};