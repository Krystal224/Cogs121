// jQuery convention for running when the document has been fully loaded:
$(document).ready(() => {
  $.ajax({
    url: 'trends',
    type: 'GET',
    dataType: 'json',
    success: (data) => {
      data = data.map (data => {
        return data;
      });
      $('#trends').html(data);
    }
  })
});
