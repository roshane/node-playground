const { graphql, buildSchema } = require("graphql");
const axios = require("axios").default;
const https = require("https");
const $RefParser = require("@apidevtools/json-schema-ref-parser");

const schemaSDL = `
type Query{
    echo(name:String): String!
    users: [User]
    posts: [Post]
}

type User{
    id:ID!
    name:String
    username:String
    email: String
}

type Post{
    id:ID!
    userId:String
    title:String
    body:String
}
`;

let exploreSchema = () => {
  //   console.log("schemaSDL", schemaSDL);
  const schema = buildSchema(schemaSDL);
  const typeMap = schema.getTypeMap();
  console.log("fields", typeMap["Query"]._fields["users"]);
};

let httpCall = () => {
  axios
    .get("https://localhost:8443/health", {
      httpsAgent: new https.Agent({
        rejectUnauthorized: false,
      }),
    })
    .then((resp) => console.log(resp.data))
    .catch((err) => console.error("Client error", err));
};

let parseSchema = (location) => {
  $RefParser.dereference(location).then((schema) => console.log(schema));
};
let schemaLocation =
  "https://uniswap.org/tokenlist.schema.json";

parseSchema(schemaLocation);
