const list = document.querySelectorAll(".list");
function activeLink() {
	list.forEach((item) => item.classList.remove("active"));
	this.classList.add("active");
}
list.forEach((item) => ["click", "mouseover"].forEach((evt) => item.addEventListener(evt, activeLink)));
