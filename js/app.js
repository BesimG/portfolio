// https://www.webhostingsecretrevealed.net/blog/featured-articles/15-cool-javascript-sample-snippets/

var date = document.querySelector("#date");

const showDate = function() {
    var d = new Date();
    var curr_date = d.getDate();
    var curr_month = d.getMonth() + 1; //months are zero based
    var curr_year = d.getFullYear();
    document.write(curr_date + "-" + curr_month + "-" + curr_year);
  }

  showDate();