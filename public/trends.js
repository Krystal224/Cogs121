// jQuery convention for running when the document has been fully loaded:
$(document).ready(() => {
  $.ajax({
    url: 'trends/',
    type: 'GET',
    dataType: 'json',
    success: (data) => {
      data = data.map(data => {
        const tag = $('<button id="data">' + data + '</button>');
        tag.appendTo('#trends');
      })
    }
  });
});
