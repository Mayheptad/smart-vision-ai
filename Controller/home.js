



exports.handleHomeRoute = knex => (req, res) => 
  knex.select("*")
    .from("users")
    .then( user => res.json(user))
    .catch( _ => res.status(400).json("unable to get user"));
