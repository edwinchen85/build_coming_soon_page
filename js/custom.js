function createProgressBar(progressValue, callback) {
  // Initialize progress bar
  $('#progress-bar').progressbar({ value: progressValue});

  // Callback
  callback();
}

$(document).ready(function() {
  var progress = $('#progress-bar').data('progress-value');
  var progressDescription = $('#progress-bar').data('progress-description');

  // Create the progress bar
  createProgressBar(progress, function() {
  // Append the description to the inner progress bar layer
  $('<div class="progress-description">'+ '<p><strong>'+ progress + '%</strong></p><p>'+ progressDescription +'</p></div>').appendTo(".ui-progressbar-value");
  });
});
