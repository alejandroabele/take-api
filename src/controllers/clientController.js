const Client = require("../builders/Client");
const clientSchema = require("../models/client");
require("should");

const create = (req) => {
  try {
    _validCreateData(req.body);
    const data = new Client().withData(req.body);
    const client = clientSchema(data);
    return client.save();
  } catch (error) {
    throw error;
  }
};
const update = (req) => {
  try {
    const data = new Client().withData(req.body);
    return clientSchema.findByIdAndUpdate(req.params.id, data);
  } catch (error) {
    throw error;
  }
};
const destroy = (req) => {
  return clientSchema.findByIdAndDelete(req.params.id);
};

const findFuzzySearch = (req) => {
  try {
    return clientSchema.fuzzySearch(req.params.name);
  } catch (error) {
    throw error;
  }
};
const findByState = (req) => {
  try {
    return clientSchema.find({ state: req.params.state });
  } catch (error) {
    throw error;
  }
};
const find = () => {
  try {
    return clientSchema.find();
  } catch (error) {
    throw error;
  }
};
const _validCreateData = (data) => {
  return (
    data.should.have.property("name").which.is.a.String().and.not.empty() &&
    data.should.have.property("state").which.is.a.String().and.not.empty() &&
    data.should.have.property("address").which.is.a.String().and.not.empty() &&
    data.should.have.property("city").which.is.a.String().and.not.empty() &&
    data.should.have.property("zip").should.not.be.NaN() &&
    data.should.have
      .property("status")
      .which.is.a.String()
      .and.be.equalOneOf(["private", "public"])
  );
};

module.exports = {
  create,
  destroy,
  update,
  findFuzzySearch,
  findByState,
  find,
};
