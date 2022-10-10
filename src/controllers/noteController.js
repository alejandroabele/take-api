const noteSchema = require("../models/note");
const Note = require("../builders/Note");
require("should");

const create = async (req) => {
  try {
    _validCreateData(req.body);
    const data = new Note(req.body);
    const note = noteSchema(data);
    return note.save();
  } catch (error) {
    throw error;
  }
};
const update = async (req) => {
  try {
    const data = new Note(req.body);
    return noteSchema.findByIdAndUpdate(req.params.id, data);
  } catch (error) {
    throw error;
  }
};
const destroy = async (req) => {
  const response = await noteSchema.findByIdAndDelete(req.params.id);
  return response;
};
const find = () => {
  try {
    return noteSchema.find();
  } catch (error) {
    throw error;
  }
};
const _validCreateData = (data) => {
  return (
    data.should.have.property("data").which.is.a.String().and.not.empty() &&
    data.should.have.property("member").which.is.a.String().and.not.empty()
  );
};
module.exports = {
  create,
  destroy,
  update,
  find,
};
