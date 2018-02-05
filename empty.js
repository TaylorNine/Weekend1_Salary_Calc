$('#submitBtn').click(function() {
  var output = $('#studentList');
  output.empty();
  var outputString = $('#studentName').val();
  output.append(outputString).val();