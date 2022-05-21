exports.getToken = (req, res) => {
    const accessT = req.accessToken;
    res.status(200).json(accessT);
}

