const basicController = {}

basicController.get = (req, res) => {
    res.json({
        msg: 'Hello World'
    })
}

export default basicController