function sendAnime(req, res) {
    res.json({
        status: 'ok',
        data: res.locals.animes || res.locals.anime
    });
}

function sendErrResp(err, req, res, next) {
    console.log(err);
    res.json({
        status: 'err',
        msg: err.message
    });
}

module.exports = {
    sendAnime,
    sendErrResp
};