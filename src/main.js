import { DoctorClient } from './client.js';
import $ from 'jquery';
import './styles.css';
import 'bootstrap';

 $(document).ready(function(){
  $("#search").submit(function(event) {
    event.preventDefault();
    let name;
    let issue;
    let doctor = new DoctorClient();



    let promise = doctor.getDrByIssue(name, issue);
    promise.then(function(response) {
      let body = JSON.parse(response);
    //  $("#result").empty();
      if(body.data.length === 0) {
        $("#result").append(`No results for the given issue`);
      } else {
          body.data.forEach(function(dr) {
            $("#result").append(`${dr.profile.first_name} ${dr.profile.last_name}  <ul class = ${dr.uid}>`)
            dr.practices.forEach(function(patient){
              let acceptPatient = "No";
              if(patient.accepts_new_patients === true) {
                acceptPatient = "Yes";
              }
              $(`.${dr.uid}`).text(`| Phone: ${dr.practices[0].phones[0].number} | Accepting Patients: ${acceptPatient}`)
            })
      }), function (error) {
        $("#result").text(`Error processing your request: ${error.message}`);
      }
    }
  });
  });
});
//| Website: ${dr.profile.website}
//| Phone: ${dr.practices[0].phones[0].number} | Accepting Patients: ${acceptPatient}
