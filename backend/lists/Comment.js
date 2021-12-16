const { Text, Relationship } = require("@keystonejs/fields");

const commentFields = {
  fields: {
    content: {
      type: Text,
      isMultiline: true,
    },
    user: {
      type: Relationship,
      ref: "User",
      many: false,
    },
    replies: {
      type: Relationship,
      ref: "Reply",
      many: true,
    },
  },
};

module.exports = commentFields;
