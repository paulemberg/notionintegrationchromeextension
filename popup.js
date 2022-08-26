// Initialize button with user's preferred color
let changeColor = document.getElementById("changeColor");
let color = chrome.storage.sync.get("color");
let name = document.getElementById('txtName');

changeColor.addEventListener("click", async () => {

	let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
	//console.log(name.value + '\n' + tab.url);	
	console.log(tab.url);	
	console.log(name.value);

 });

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});










