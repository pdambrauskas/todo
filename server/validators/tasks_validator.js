var MIN_TITLE_LENGTH = 5;

module.exports = {
  isValid: function(data) {
    return !data['title'] || data['title'].length > MIN_TITLE_LENGTH;
  }
}
