const { users } = require("./loggedInUser.js");

//get default responses
exports.responses = (code, results, message) => {
  let success = code === 200 ? true : false;
  return {
    result: results,
    success: success,
    code: code,
    error: message,
    user: users().user,
  };
};
