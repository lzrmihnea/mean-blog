/**
 * Created by Mihnea on 5/17/2015.
 */

module.exports = function isLoggedIn(req, res, next) {
    if(!(req.session && member)) {
        return res.redirect('/login');
    }
    next();
}