const dotenv = require("dotenv").config();
const { Keystone } = require("@keystonejs/keystone");
const { GraphQLApp } = require("@keystonejs/app-graphql");
const { AdminUIApp } = require("@keystonejs/app-admin-ui");
const { PasswordAuthStrategy } = require("@keystonejs/auth-password");
const { MongooseAdapter: Adapter } = require("@keystonejs/adapter-mongoose");

const PROJECT_NAME = "Product Feedback";
const adapterConfig = {
  mongoUri: process.env.DATABASE_URL,
};

const SuggestionSchema = require("./lists/Suggestion");
const CommentSchema = require("./lists/Comment");
const UserSchema = require("./lists/User");
const ReplySchema = require("./lists/Reply");

const keystone = new Keystone({
  adapter: new Adapter(adapterConfig),
  cookieSecret: process.env.COOKIE_SECRET,
});

keystone.createList("Suggestion", SuggestionSchema);
keystone.createList("Comment", CommentSchema);
keystone.createList("User", UserSchema);
keystone.createList("Reply", ReplySchema);

const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: "User",
  config: {
    identityField: "username",
    secretField: "password",
  },
});

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp({
      name: PROJECT_NAME,
      enableDefaultRoute: true,
      authStrategy,
    }),
  ],
  configureExpress: app => {
    app.set("trust proxy", true);
  },
};
