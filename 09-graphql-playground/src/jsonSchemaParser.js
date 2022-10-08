const orderSchema = require("../resources/order.schema.json");

const jsPrimitives = new Set(["number", "string", "integer", "boolean"]);

const isOfArrayType = (type) =>
  Array.isArray(type) ||
  type === "array" ||
  (Array.isArray(type) && type[0] === "array");

const isOfObjectType = (type) => type === "object";

const isPrimitiveType = (type) => jsPrimitives.has(type);

const parseSchema = (schema) => {
  const objectTypes = new Set();
    


  const parsePrimitiveProperty = (prop) => {};

  const toGraphQLType = (type) => {
    switch (type) {
      case "number":
      case "integer":
        return "Int";
      case "boolean":
        return "Boolean";
      case "string":
        return "String";
      default:
        throw new Error(`Cannot find a matching primitive type for ${type}`);
    }
  };
};

console.log(JSON.stringify(orderSchema, null, 2));
