/* Author: 

*/
$(document).ready(function() {
    $('.filter-btn').click(function() {
        var val = $(this).attr('data-filter');
        if (val == "all") {
            $('.filter').show('1000');
        } else {
            $('.filter').not('.' + val).hide(1000);
            $('.filter').filter('.' + val).show(1000);
        }
    })
});