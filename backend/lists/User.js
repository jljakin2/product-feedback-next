const { Text, Url, Checkbox, Password } = require("@keystonejs/fields");

const userFields = {
  fields: {
    image: {
      type: Url,
    },
    name: {
      type: Text,
      isRequired: true,
    },
    username: {
      type: Text,
      isRequired: true,
      isUnique: true,
    },
    password: {
      type: Password,
    },
    isAdmin: {
      type: Checkbox,
    },
  },
};

module.exports = userFields;
