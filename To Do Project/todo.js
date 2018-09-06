$("ul").on("click","li",
function(){ if($(this).css("color")=="rgb(102, 102, 102)")
	{$(this).css('text-decoration', 'line-through');
$(this).css('color', 'gray');

}
else {
$(this).css('color', '#666');
$(this).css('text-decoration', 'none');
}	})


$("ul").on("click","span",function(e){e.stopPropagation();
$(this).parent().fadeOut(500,function(){$(this).remove();});
})



$("input[type='text']").on("keypress",function(event){
	if (event.which===13){
		var todoText=$(this).val();
		$(this).val("")
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+todoText+"</li>");


	}
})
$(".fa-plus").on("click",function(){
	$("input[type='text']").fadeToggle();
})