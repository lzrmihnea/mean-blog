/**
 * Created by Mihnea on 5/2/2015.
 */

module.exports = function (email) {
    var hash = crypto.createHash('sha512');
    hash.update(pass, 'utf8');
    hash.update(salt, 'utf8');
    return hash.digest('base64');
}