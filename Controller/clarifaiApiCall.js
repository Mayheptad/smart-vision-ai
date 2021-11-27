
const Clarifai = require('clarifai');

const app = new Clarifai.App({
 apiKey: "0562577dd6b74d5f8563dd82c43bebca"
});

exports.handleClarifaiApiCallRoute = (req, res) => {
app.models.predict(Clarifai.FACE_DETECT_MODEL, req.body.imgUrl)
.then( imgData => res.json(imgData))
.catch( err => res.json('error working with Clarifai Api'));
}


/*      if (resp) {
 const entriesOrError = await getOrSendData('http://localhost:3001/image', 'PUT', );
  entriesOrError !== 'Unable to get entries' && typeof Number(entriesOrError) == 'number' ?
  this.setState(Object.assign(this.state.user, {entries: entriesOrError})) : 
  console.log(entriesOrError)
   }else{
	   res.status(400).json('could not get response from clarifai Api')
   }
      }*/
	  
	  //Clarifai.FACE_DETECT_MODEL, 
//'c0c0ac362b03416da06ab3fa36fb58e3',
//'53e1df302c079b3db8a0a36033ed2d15',