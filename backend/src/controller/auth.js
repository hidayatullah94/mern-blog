// todo: Berisi semua fungsi yang akan di gunakan Route

exports.register = (req, res, next) => {
  const [name, email, password] = req.body.name;

  const result = {
    message: "Register Succes",
    data: {
      uid: 1,
      name: name,
      email: email,
    },
  };
  res.status(201).json(result);
};
