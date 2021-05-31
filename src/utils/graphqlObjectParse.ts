const graphqlObjectParse = (object: { [key: string]: any }) => {
  const stringified = JSON.stringify(object);

  return stringified.replace(/"([^"]+)":/g, "$1:");
};

export default graphqlObjectParse;
