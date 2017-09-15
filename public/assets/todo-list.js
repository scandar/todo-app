$(document).ready(function(){

  $('form').on('submit', function(){
      var item = $('form input');
      var todo = {item: item.val()};


      $.ajax({
        type: 'POST',
        url: '/todo',
        data: todo,
        success: function(data){
          // append item value to list
          $('ul').append(`<li>${item.val()}</li>`);
          // empty input field
          $('form input').val('');
        }
      });

      return false;

  });

  $('li').on('click', function(){
      var li = $(this);
      var item = $(this).text().replace(/ /g, "-");
      $.ajax({
        type: 'DELETE',
        url: '/todo/' + item,
        success: function(data){
            // remove item from list
            li.remove();
        }
      });
  });

});
