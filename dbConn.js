

exports.dbConn = {
  client: "pg",
  connection: {
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
      }
}
  }


/*     host: "127.0.0.1",
    user: "postgres",
    password: "postgres",
    database: "smartbrain", */
	
	
	{
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
}