module.exports = function unchMe (robot) {
  robot.respond(/(unch)( me)? (.*)/i, function (msg) {
    msg.send('http://unch.it/' + msg.match[3] + '.gif');
  });
};
