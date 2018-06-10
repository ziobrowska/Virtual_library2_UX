$(document).ready(() => {

    $("#goToAdvancedSearch").click(() => {

        $("#szukaj1").hide();
        $("#szukaj1_advanced").show();
    });

    $("#goToSimpleSearch").click(() => {

        $("#szukaj1").show();
        $("#szukaj1_advanced").hide();
    });


    $('#szukaj1_advanced').on('click', '.removeSearchCondition', (event) => {
        $(event.target).closest(".input-group").remove();
    });

    $("#addNextSearchTag").click(() => {

        $(".input-group:last").after(`<div class="input-group">

            <select name="search_for" class="form-control">
                <option value="title">tytuł</option>
                <option value="author">autor</option>
                <option value="category">kategoria</option>
                <option value="series">seria</option>
            </select>

            <input type="search" name="find_item" class="form-control" placeholder="Wpisz szukaną frazę" aria-label="Szukaj">

            <span class="btn btn-info removeSearchCondition" >
                <i class="fa fa-close"></i>
            </span>

            <select name="search_condition" class="form-control btn search_condition">
                <option value="AND">ORAZ</option>
                <option value="OR">LUB</option>
            </select>
        </div>`)

    });

    $('#ratingForm').on('submit', function (event) {
        event.preventDefault(); // Stop the form from causing a page refresh.
        console.log( $('#ratingSelect').val())

        // todo?

    });


    $( "#addPict" ).submit(function(event) {
        event.preventDefault();
        var photo = $('#USERPhoto').get(0).files.length;
    
        if(photo === 0)
        {
            var mess='Wybierz zdjęcie.';
            if($('#ZdAErr').length == 0){
                $('.USERErr').append('<div id="ZdAErr" class="alert alert-danger" role="alert"><span>'+mess+'</span></div>');
            } else {
                $('#ZdAErr span').text(mess);
            }
        }else{
            if($('#ZdAErr').length != 0) {
                $('#ZdAErr').remove();
            }
        }
    
        if(photo != 0){
            var formData = new FormData(this);
            $.ajax({
            type: 'POST',
            url: '/dodajZdiecie',
            data: formData,
            processData: false,
            contentType: false,
            success: function(response){
                document.location.reload(); 
                },
            error: function(response) {
                alert(response);
                console.log(response);
                }
            });
        }
    });

});