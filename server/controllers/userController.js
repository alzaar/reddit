import model from '../model/index.js'

const userController = {}

userController.post = ( req, res) => {
    const { username, password } = req.body

    const user = new model.User({
        username, 
        password
    })

    user.save().then((newUser) => {
        res.status(200).json({
            msg: 'Success',
            data: newUser
        })
    }).catch(error => {
        // console.log(err)
        res.status(500).json({
            msg: error
        })
    })
}

export default userController