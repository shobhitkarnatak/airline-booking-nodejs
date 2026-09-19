const successResponse = (res, data, message = "Success", statusCode = 200) => {
  return res.status(statusCode).json({
    success: true,
    messsage: message,
    data: data,
  });
};

const errorResponse = (
  res,
  message = "Something went wrong",
  statusCode = 500,
  errors = null,
) => {
  return res.status(statusCode).json({
    success: false,
    messsage: message,
    statusCode: statusCode,
    errors: errors,
  });
};

module.exports = {
  successResponse,
  errorResponse,
};
