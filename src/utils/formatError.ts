interface HTTPError extends Error {
  statusCode?: number;
}
interface FormatErrorResponse {
  name: string;
  stack: string;
  message: string;
  statusCode?: number;
}
export default (error: HTTPError): FormatErrorResponse => {
  return {
    statusCode: error.statusCode,
    name: error.name,
    stack: error.stack,
    message: error.message,
  };
};
