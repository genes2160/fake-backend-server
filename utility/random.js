const app = {
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  generateRandomString() {
    var maxLength = 100;
    var length = Math.random() * maxLength;
    var string = "";
    for (var i = 0; i < length; i++) {
      string += app.chooseOne();
    }

    return string;
  },
  chooseOne() {
    try {
      choices = app.alphabet;
      let choicesLength = choices.length;
      return choices[parseInt(Math.random() * choicesLength)];
    } catch (error) {
      console.log("error", error);
      return choices[0];
    }
  },
  generateRandomKeyName() {
    var maxKeyLength = 14;
    var keyLength = 1 + parseInt(Math.random() * maxKeyLength);
    var randomString = app.generateRandomString();
    return randomString.substr(0, keyLength);
  },
};

exports.app = app;
