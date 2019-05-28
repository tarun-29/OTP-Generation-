const admin = require('firebase-admin')

module.exports = function(req, res){
    if(!req.body.phone){  
        //verify the provided phone number
        return res.status(422).send({error: 'Bad Input'})
    }

        //format the phone number to remove dashes and parens
        const phone = String(req.body.phone).replace(/[^\d]/g,"");
        //create a new account using that phone number
        admin.auth().createUser({ uid: phone })
        .then(user=>res.send(user))
        .catch(error=>res.status(422).send({error: error}))
        //respond to user request, saying account was made
}