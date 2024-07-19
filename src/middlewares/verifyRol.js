const verifyRol = (roles) => {
  return (req, res, next) => {
    const { rol } = req.user;
    if (!roles.includes(rol)) {
      return res.send("rol no autorizado");
    }

    next();
  };
};

module.exports = verifyRol;
