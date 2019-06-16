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
     $("#result").empty();
      if(body.data.length === 0) {
        $("#noresult").append(`No results for the given search`);
      } else {
          body.data.forEach(function(dr) {
            dr.practices.forEach(function(patient){
              let acceptPatient = "No";
              if(patient.accepts_new_patients === true) {
                acceptPatient = "Yes";
            $("#result").append(`${dr.profile.first_name} ${dr.profile.last_name}  <ul class = ${dr.uid}>`)
              $(`.${dr.uid}`).text(`Specialty: ${dr.specialties[0].name} | Phone: ${dr.practices[0].phones[0].number} | Accepting Patients: ${acceptPatient}`)
            }
          }), function (error) {
        $("#result").text(`Error processing your request: ${error.message}`);
      }
    });
  }
})
})
})
