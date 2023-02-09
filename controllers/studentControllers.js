const Students = require("../schemas/Students");

const getAllStudents = async (req, res) => {
  try {
    const students = await Students.find();
    res.status(200).json({
      students,
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

const getOneStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Students.findById(req.params.id);
    res.status(200).json({
      student,
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

const createStudent = async (req, res) => {
  try {
    const {
      name,
      formerJob,
      goal,
      learning,
      struggle,
      moment,
      whyReaganIsCool,
      message,
    } = req.body;
    console.log("req.body:", req.body);
    const student = await Students.create({
      name,
      formerJob,
      goal,
      learning,
      struggle,
      moment,
      whyReaganIsCool,
      message,
    });
    res.status(201).json({
      success: true,
      student,
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

const updateStudent = async (req, res) => {
  try {
    const student = await Students.findOneAndUpdate(req.params.name, req.body, {
      new: true,
    });
    res.status(200).json({
      success: true,
      student,
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

const deleteStudent = async (req, res) => {
  try {
    const student = await Students.findByIdAndDelete(req.params.id);
    res.status(200).json({
      response: "Student eliminated successfully",
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

module.exports = {
  getAllStudents,
  getOneStudent,
  createStudent,
  updateStudent,
  deleteStudent,
};
