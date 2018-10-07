
var templateViewConstants = {
  "newJob":"./views/templates/recruiter/candidateApplied.jade",
  "updateCandidateStatus":"./views/templates/seeker/applicationUpdate.jade",
  "jobApplied":"./views/templates/seeker/successfullyApplied.jade"
};

var templateSubjectsConstants = {
  "newJob":"A new job has been posted!",
  "updateCandidateStatus":"The status of your application has been changed",
  "jobApplied":"Successfuly applied!"
}

exports.templateConstants = {
  "templateViewConstants":templateViewConstants,
  "templateSubjectsConstants":templateSubjectsConstants
};
