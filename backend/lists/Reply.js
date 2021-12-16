const { Text, Relationship } = require("@keystonejs/fields");

const replyFields = {
  fields: {
    content: {
      type: Text,
      isMultiline: true,
    },
    replyingTo: {
      type: Relationship,
      ref: "User",
    },
    user: {
      type: Relationship,
      ref: "User",
    },
  },
};

module.exports = replyFields;
