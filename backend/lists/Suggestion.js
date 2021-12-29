const { Text, Select, Integer, Relationship } = require("@keystonejs/fields");

const suggestionFields = {
  fields: {
    title: {
      type: Text,
      isRequired: true,
    },
    category: {
      type: Select,
      options: [
        { value: "enhancement", label: "Enhancement" },
        { value: "feature", label: "Feature" },
        { value: "UI", label: "UI" },
        { value: "UX", label: "UX" },
        { value: "bug", label: "Bug" },
      ],
      defaultView: "published",
    },
    upvotes: {
      type: Integer,
    },
    status: {
      type: Select,
      options: [
        { value: "suggestion", label: "Suggestion" },
        { value: "planned", label: "Planned" },
        { value: "inProgress", label: "In-Progress" },
        { value: "published", label: "Published" },
        { value: "live", label: "Live" },
      ],
      defaultView: "suggestion",
    },
    description: {
      type: Text,
      isMultiline: true,
    },
    comments: {
      type: Relationship,
      ref: "Comment.suggestion",
      many: true,
    },
  },
};

module.exports = suggestionFields;
