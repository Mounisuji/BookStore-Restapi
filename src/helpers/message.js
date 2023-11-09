var httpStatus = require ('http-status');


exports.successResponse = (req, res, data, message, code = httpStatus.OK) => res.status(code).json({
    success: true,
    status:200,
    data,
    message
});
exports.successResponse1 = (req, res, data, message,len, code = httpStatus.OK) => res.status(code).json({
    success: true,
    status:200,
    data,
    message,
    len:len||{}
});
  
exports.errorResponse = ( req,res,errorMessage = 'Something went wrong',code = httpStatus.OK,error,) => res.status(code).json({
    success: false,
    status:400,
    data: [],
    
    message: errorMessage,
});