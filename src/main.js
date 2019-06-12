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
      // if(body.data.length === 0) {
      //   $("#result").append(`<p>No results for the given issue</p>`);
      // } else {
          body.data.forEach(function(dr) {
            $("#result").append(`<p>${dr.profile.first_name} ${dr.profile.last_name}</p>`);
      })
    }
    );
  });
});
