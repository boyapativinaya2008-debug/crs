const Complaint = require("../models/complaint.model");

exports.createComplaint = async (req, res) => {
  try {
    const complaint = await Complaint.create({
      title: req.body.title,
      description: req.body.description,
      image: req.file ? req.file.filename : "",
      createdBy: req.user.id
    });

    res.json(complaint);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getAllComplaints = async (req, res) => {
  const data = await Complaint.find().populate("createdBy assignedTo");
  res.json(data);
};

exports.getMyComplaints = async (req, res) => {
  const data = await Complaint.find({ createdBy: req.user.id });
  res.json(data);
};

exports.assignComplaint = async (req, res) => {
  const updated = await Complaint.findByIdAndUpdate(
    req.params.id,
    { assignedTo: req.body.assignedTo },
    { new: true }
  );

  res.json(updated);
};

exports.updateStatus = async (req, res) => {
  const updated = await Complaint.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  );

  res.json(updated);
};