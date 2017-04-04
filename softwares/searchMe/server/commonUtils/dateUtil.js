/**
 * Created by shravya on 3/4/17.
 */
var commonUtil ={
    getDate :getDate
};
function getDate(date) {
    var dateUp = new Date(date);
    return dateUp;
}
module.exports = commonUtil;