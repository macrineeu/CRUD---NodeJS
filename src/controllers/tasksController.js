const getAll = (req, res) => {
    return res.status(200).json({
        message: 'Controller rodando'
    });
}

module.exports = {
    getAll
}