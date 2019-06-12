export class DoctorClient {
  getDrByIssue(name, issue) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `http://api.betterdoctor.com/2016-03-01/doctors?name=${name}&query=${issue}location=or-portland,10&skip=2&limit=10&user_key=${process.env.exports.apiKey}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.StatusText));
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
}
