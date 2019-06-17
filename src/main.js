import { DoctorClient } from './client.js';
import $ from 'jquery';
import './styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
$(document).ready(function(){
  $("#search").submit(function(event) {
    event.preventDefault();
    $("#result").empty();
    let name = $("#name").val();
    let issue = $("#issue").val();
    let doctor = new DoctorClient();
    let promise = doctor.getDrByIssue(name, issue);
    promise.then(function(response){
      let body = JSON.parse(response);
      if ($('#name').val() == "" && $('#issue').val() == "") {
        $('#result').text(`Please enter a doctor name or health issue`);
      } else if (body.data.length === 0) {
        $('#result').text(`No results for the given search`);



      } else {
        body.data.forEach(function(dr) {
          let acceptsPatients = "";
          if (dr.practices[0].accepts_new_patients === true) {
            acceptsPatients = "Yes";
          } else {
            acceptsPatients = "No";
          }
          $("#result").append(`${dr.profile.first_name} ${dr.profile.last_name}  <ul class = ${dr.uid}>`)
          $(`.${dr.uid}`).text(`Specialty: ${dr.specialties[0].name} | Phone: ${dr.practices[0].phones[0].number} | Accepting Patients: ${acceptsPatients} | Address: ${dr.practices[0].visit_address.street}, ${dr.practices[0].visit_address.city}, ${dr.practices[0].visit_address.state}, ${dr.practices[0].visit_address.zip} | Website: ${dr.practices[0].website}` );

        }, function(error) {
          $('#noresult').text(`Error processing your request: ${error.message}`);
        });
      }
    });
  });
});
