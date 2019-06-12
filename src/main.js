import { DoctorClient } from './client.js';
import $ from 'jquery';

 $(document).ready(function(){
  $("#search").submit(function(event) {
    event.preventDefault();
    let name;
    let issue;
    let doctor = new DoctorClient();
    let promise = doctor.getDrByIssue(name, issue);
    promise.then(function(response) {
      let body = JSON.parse(response);
      if(body.data.length === 0) {
        $("#result").append(`<p>No results for the given issue</p>`);
      } else {
          body.data.forEach(function(dr) {
            $("#result").append(`<p>${dr.profile.first_name} ${dr.profile.last_name}</p><br><p>${dr.practices[0].phones[0].number}</p><br>
        <p>  Website: ${dr.profile.website}</p>`);
      }), function (error) {
        $("#result").text(`<p>Error processing your request: ${error.message}`);
      }
    }
  });
  });
});
