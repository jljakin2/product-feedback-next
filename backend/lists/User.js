const {
  Text,
  Url,
  Checkbox,
  Password,
  Relationship,
} = require("@keystonejs/fields");

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
    upvotes: {
      type: Relationship,
      ref: "Suggestion",
      many: true,
    },
    // comments: {
    //   type: Relationship,
    //   ref: "Comment",
    //   many: true,
    // },
    // replies: {
    //   type: Relationship,
    //   ref: "Reply",
    //   many: true,
    // },
  },
};

module.exports = userFields;
