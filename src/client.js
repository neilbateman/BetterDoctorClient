export class DoctorClient {
  getDrByIssue(issue) {
    return new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();
      let url = `http://api.betterdoctor.com/2016-03-01/doctors?location=or-portland,10&skip=2&limit=10&user_key=${process.env.exports.apiKey}&=${issue}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.StatusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}

















//   let api_key = [process.env.exports.apiKey];
//
//   let resource_url = 'https://api.betterdoctor.com/2016-03-01/practices?location=37.773,-122.413,10&skip=2&limit=10&user_key=' + api_key;
//
//
//   $.get(resource_url, function (data) {
//       // data: { meta: {<metadata>}, data: {<array[Practice]>} }
//       var template = Handlebars.compile(document.getElementById('docs-template').innerHTML);
//       document.getElementById('content-placeholder').innerHTML = template(data);
//   });
// }
