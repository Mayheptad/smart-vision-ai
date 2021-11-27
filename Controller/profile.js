


exports.handleProfileRoute = (req, res, knex) => {
  const { id } = req.params;
  knex
    .select("*")
    .from("users")
    .where({ id })
    .then((resp) => {
      if (resp.length) res.json(resp.at(0));
      else {
        res.status(400).json("Not found");
        console.log(resp);
      }
    });
};
