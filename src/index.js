import { DoctorClient } from './client.js';
import $ from 'jquery';

$(document).ready(function(){
  $('#search').on('submit', function(event) {
    let doctor = new DoctorClient();
    let promise = doctor.getDrByIssue($("."+$(this).attr(`id`)+".search").val());
    promise.then(function(response) {
      let body = JSON.parse(response);
      if(body.data.length === 0) {
        $("#result").text(`<p>No results for the given issue</p>`)
      }
      $(body.data).each(function(dr) {
        $("#result").text(`<li>${dr.profile.first_name} ${dr.profile.last_name}</li>`)
      })
    })
     event.preventDefault();
});
