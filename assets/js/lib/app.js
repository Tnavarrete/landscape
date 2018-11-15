$(document).ready(function(){
//Aqui va a ejecutarse el código una vez que este cargado

$('.card').click(function(){
//Aqui agregamos la función que quita o agraga la clase ´card--open'
 $(this).toggleClass('card--open');
});


//like en el corazon

$('.card__like').click(function(event){
	event.preventDefault();
	event.stopPropagation();

 $(this).toggleClass('card__like--red');
});

$('.card__follow-btn').click(function(event){
	event.preventDefault();
	event.stopPropagation();

 $(this).toggleClass('card__follow-btn--following');


 if($(this).text() ===  'Seguir'){
 	$(this).text('Siguiendo');
 }else{
 	$(this).text('Seguir');
 }
});

$('.create__select').change(function(){

	var image = $(this).val();
	$('.create_img').attr('src',image);
	//console.log('change' , $(event.currentTarget).val());
    //console.log('change' , $(this).val());

    $('#image').on('change',function(e){
        $('.create__image .create__img').attr('src','assets/images/squared/'+$(this).val()); 

    })
});



});
