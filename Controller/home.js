



exports.handleHomeRoute = knex => (req, res) => 
res.send('Hi Bill, Your code seems to be working')
  //knex.select("*")
   // .from("users")
    //.then( user => res.json(user))
    //.catch( _ => res.status(400).json("unable to get user"));
