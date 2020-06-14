var a = {};
$.getJSON('../User.json', function (data) {
    $.each(data, function(index,element){
    $('table#tbl TBODY').append('<tr><td>'+element.NAME+'</td><td>'+element.ROLE +
    '</td><td style="text-align:center"><span class="material-icons" >edit</span></td></tr>');
    });
});

