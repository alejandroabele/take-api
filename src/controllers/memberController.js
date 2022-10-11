const Member = require("../builders/Member");
const memberSchema = require("../models/member");
require("should");

const create = async (req) => {
  try {
    _validCreateData(req.body);
    const data = new Member().withData(req.body);
    const member = memberSchema(data);
    return member.save();
  } catch (error) {
    throw error;
  }
};
const update = async (req) => {
  try {
    const data = new Member().withData(req.body);
    return memberSchema.findByIdAndUpdate(req.params.id, data);
  } catch (error) {
    throw error;
  }
};
const destroy = async (req) => {
  try {
    return memberSchema.findByIdAndDelete(req.params.id);
  } catch (error) {
    throw error;
  }
};
const find = () => {
  try {
    return memberSchema.find();
  } catch (error) {
    throw error;
  }
};
const _validCreateData = (data) => {
  return (
    data.should.have.property("name").which.is.a.String().and.not.empty() &&
    data.should.have.property("email").which.is.a.String().and.not.empty() &&
    data.should.have.property("phoneNumber").should.not.be.NaN() &&
    data.should.have.property("client").which.is.a.String().and.not.empty()
  );
};
module.exports = {
  create,
  destroy,
  update,
  find,
};
