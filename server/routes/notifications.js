// const express = require("express");
// const router = express.Router();
// const Notification = require("../models/Notification");

// // Get all notifications
// router.get("/", async (req, res) => {
//   try {
//     const notifications = await Notification.find();
//     res.status(200).json(notifications);
//   } catch (err) {
//     res.status(500).json({ error: "Failed to fetch notifications" });
//   }
// });

// // Create a new notification
// router.post("/", async (req, res) => {
//   const { title, date, time } = req.body;

//   const newNotification = new Notification({
//     title,
//     date,
//     time,
//   });

//   try {
//     const savedNotification = await newNotification.save();
//     res.status(201).json(savedNotification);
//   } catch (err) {
//     res.status(500).json({ error: "Failed to save notification" });
//   }
// });

// // Mark all notifications as read
// router.put("/mark-all-read", async (req, res) => {
//   try {
//     await Notification.updateMany({}, { isRead: true });
//     res.status(200).json({ message: "All notifications marked as read" });
//   } catch (err) {
//     res.status(500).json({ error: "Failed to mark notifications as read" });
//   }
// });

// module.exports = router;
