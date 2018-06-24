/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {
    $('#lookup_id').click(function () {
        var input = $(':input#input_id').val();
//        alert(input);
        $.ajax({
            type: 'POST',
            url: "dictServlet",
//            contentType: "application/json",
            dataType: 'json',
            data: {input: input},
            success: function (data) {
                var txt="";
                $.each(data, function (i, obj) {
                    txt += "<li>" + "(" + obj.wordtype + ") ::" + obj.definition + "</li><br>";
                });
                $('#display_id').html("<ol>"+txt+"</ol>");
            },
            error: function (jqXHR, textStatus, errorThrown) {

            }
        });
    });
});

