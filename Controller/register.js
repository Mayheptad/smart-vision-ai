


exports.handleRegisterRoute = (bcrypt, knex, validateEmail, validateName, validatePassword) => (req, res) => {

  const { email, name, password } = req.body;
  const hash = bcrypt.hashSync(password);
  
 validateName(name) && validateEmail(email) && validatePassword(password) ? 

   knex.transaction( trx => {
      trx
        .insert({ hash, email })
        .into("login")
        .returning("email")
        .then( loginEmail =>
          trx("users")
            .returning("*")
            .insert({ email: loginEmail.at(0), name, joined: new Date() })
            .then( user => res.json(user.at(0)))
        )
        .then(trx.commit)
        .catch(trx.rollback);
    })
    .catch( err => res.status(400).json("unable to register"))
	
	: res.status(400).json("Look like something is wrong with your input data, please try again");
};
