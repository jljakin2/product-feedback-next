const { Text, Relationship } = require("@keystonejs/fields");

const replyFields = {
  fields: {
    comment: {
      type: Relationship,
      ref: "Comment",
      many: false,
    },
    content: {
      type: Text,
      isMultiline: true,
    },
    replyingTo: {
      type: Relationship,
      ref: "User",
      many: false,
    },
    user: {
      type: Relationship,
      ref: "User",
      many: false,
    },
  },
};

module.exports = replyFields;
