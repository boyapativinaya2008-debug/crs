const router = require("express").Router();
const auth = require("../middleware/auth.middleware");
const multer = require("multer");
const complaintController = require("../controllers/complaint.controller");
console.log("COMPLAINT CTRL:", complaintController);

const {
  createComplaint,
  getAllComplaints,
  getMyComplaints,
  assignComplaint,
  updateStatus
} = require("../controllers/complaint.controller");

// multer setup
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});
const upload = multer({ storage });

// routes
router.post("/", auth, upload.single("image"), createComplaint);
router.get("/", auth, getAllComplaints);
router.get("/my", auth, getMyComplaints);
router.put("/:id/assign", auth, assignComplaint);
router.put("/:id/status", auth, updateStatus);

module.exports = router;