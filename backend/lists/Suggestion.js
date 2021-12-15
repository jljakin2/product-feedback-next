const { Text, Select, Integer, Relationship } = require("@keystonejs/fields");

const postFields = {
  fields: {
    title: {
      type: Text,
      isRequired: true,
    },
    category: {
      type: Select,
      options: [{ value: "published", label: "Published" }],
      defaultView: "published",
    },
    upvotes: {
      type: Integer,
    },
    status: {
      type: Select,
      options: [{ value: "published", label: "Published" }],
      defaultView: "published",
    },
    description: {
      type: Text,
      isMultiline: true,
    },
    comments: {
      type: Text,
    },
  },
};

module.exports = postFields;
