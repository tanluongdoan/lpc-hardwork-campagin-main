
$(function(){
	let modal = document.getElementById("modal");
	let modalOpens = document.getElementsByClassName("modal-open");
	let modalCloses = document.getElementsByClassName("modal-close");

	for (let modalOpen of modalOpens) {
		modalOpen.onclick = function () {
			modal.style.display = "flex";
			modal.ass
		};
	}
	for (let modalClose of modalCloses) {
		modalClose.onclick = function () {
			modal.style.display = "none";
		};
	}
});