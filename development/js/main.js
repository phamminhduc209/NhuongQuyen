$(".search-item-selectbox").each(function(){
	if(($(this).find(".search-ops-selectbox option:selected").val())!="All"){
		var selectvaluename=$(this).find(".search-ops-selectbox option:selected").html();
		$(this).find(".select-value").html(selectvaluename);
	}
})