


exports.handleSigninRoute = (knex, bcrypt) => (req, res) => {
  const { email, password } = req.body;
  knex.select("email", "hash")
    .from("login")
    .where("email", "=", email)
    .then( emailNhash => {
      const isValidHash = bcrypt.compareSync(password, emailNhash.at(0).hash);
      if (isValidHash) {
        return knex
          .select("*")
          .from("users")
          .where("email", "=", email)
          .then( user => res.json(user.at(0)))
          .catch( err => res.status(400).json("unable to get user"));
      } else {
        res.status(400).json("wrong credentials");
      }
    })
    .catch( _ => res.status(400).json("wrong credentials"));
};
