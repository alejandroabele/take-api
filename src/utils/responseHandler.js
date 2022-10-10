const handleSuccessResponse = (payload) => {
  return {
    error: false,
    message: "OK",
    payload,
  };
};
const handleErrorResponse = (message) => {
  return {
    error: false,
    message,
  };
};

module.exports = {
  handleSuccessResponse,
  handleErrorResponse,
};
