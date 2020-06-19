$(document).ready(function(){
	var filterizd = $(".filtr-container").filterizr({});
	var filterizd = $(".filtr-container2").filterizr({});

	$(".filterListItem").on('click',function(){
		$(".filterListItem").removeClass("active");
		$(this).addClass("active");
		txt2 = this.innerText
		txt = document.getElementById("myButton");
	    txt.innerText = txt2;


	});
});


function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
} 
function filterFunction() {
	var input, filter, ul, li, a, i;
	input = document.getElementById("myInput");
	filter = input.value.toUpperCase();
	div = document.getElementById("dropdownItem");
	li = div.getElementsByTagName("li");
	for (i = 0; i < li.length; i++) {
		txtValue = li[i].textContent || li[i].innerText;
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
			li[i].style.display = "";
		} else {
			li[i].style.display = "none";
		}
	}
}

function click() {
	alert("Clicked!");
	c = document.getElementsByClassName("secondbtn");
	c.style.display="block";

}

$(document).ready(function () {
	$(".filtr-container").addClass("d-none");
	$(".filtr-container2").addClass("d-none");
	var c = document.querySelector(".secondbtn");
	var k = document.querySelector(".second");
	var j = document.querySelector(".display");
	$('ul.container-fluid li.box').click(function (e) {
		$(".filtr-container").removeClass("d-none");
		$(".filtr-container2").removeClass("d-none");
		c.style.opacity = 100;
		k.style.opacity = 100;
		j.style.opacity = 100; 
	});
});





