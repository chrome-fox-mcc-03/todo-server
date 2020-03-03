const { verifyToken } = require('../helpers/jwtoken');
const { User, Todo } = require('../models');

const authentication = async (req, res, next) => {
  try {
    const token = req.headers.access_token;
    if (token) {
      const decoded = verifyToken(token);
      req.decoded = decoded.data;
      
      const user = await User.findOne({
        where: { id: req.decoded.id },
      });
        if (user) {
          next();
        } else {
          const error = {
            status: 401,
            message: 'You are not authenticated',
          }
          next(error);
        }
    } else {
      const error = {
        status: 401,
        message: 'You are not authenticated',
      };
      next(error);
    }
  } catch (err) {
    next(err);
  };
};

const todoAuthorization = async (req, res, next) => {
  const loggedInUserId = req.decoded.id;
  const todoId = req.params.id;
  try {
    const todo = await Todo.findOne({
      where: {
        id: todoId,
      }
    })

    if (todo) {
      if (todo.userId === loggedInUserId) {
        next();
      } else {
        const error = {
          status: 401,
          message: 'You are not authorized',
        };
        next(error);
      }
    } else {
      const error = {
        status: 404,
        message: 'Todo not found',
      };
      next(error);
    }
  } catch (err) {
    next(err);
  };
};

module.exports = {
  authentication,
  todoAuthorization,
};
