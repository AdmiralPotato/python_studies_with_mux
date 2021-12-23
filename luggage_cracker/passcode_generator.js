var seed = function(s) {
  var mask = 0xffffffff;
  var m_w  = (123456789 + s) & mask;
  var m_z  = (987654321 - s) & mask;

  return function() {
    m_z = (36969 * (m_z & 65535) + (m_z >>> 16)) & mask;
    m_w = (18000 * (m_w & 65535) + (m_w >>> 16)) & mask;

    var result = ((m_z << 16) + (m_w & 65535)) >>> 0;
    result /= 4294967296;
    return result;
  }
}

var now = new Date();
var isoString = now.toISOString()
// formatted like: '2021-12-22T18:04:47.275Z'
var dateSegments = isoString.split(':')
// now an array of ['2021-12-22T18', '04', '47.275Z']
dateSegments[2] = '00'
// now an array of ['2021-12-22T18', '04', '00'], we just rounded down to the start of the current minute
var startOfMinuteString = dateSegments.join(':')
// '2021-12-22T18:04:00' now it's a single string again
var startOfMinute = new Date(startOfMinuteString)
var startOfMinuteAsAnInterNumberOfMilisecondsSinceJan1st1970 = startOfMinute.getTime()

var rng = seed(startOfMinuteAsAnInterNumberOfMilisecondsSinceJan1st1970)

var sequence = ''

for (var i = 0; i < 4; i++) {
  sequence += Math.floor(rng() * 10)
}

console.log(`passcode for this minute: ${sequence}`)
