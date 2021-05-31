const safeJSONParse = (JSONObjectString: any): Record<string, unknown> => {
  try {
    return JSON.parse(JSONObjectString);
  } catch (err) {
    return {};
  }
};

export default safeJSONParse;
