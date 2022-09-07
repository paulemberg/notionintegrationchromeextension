var btnEnviar = document.getElementById("btnEnviar");

async function sendToNotion() {
  //TODO:
}

btnEnviar.addEventListener("click", async () => {
  var queryInfo = { active: true, currentWindow: true };
  var tab = await chrome.tabs.query(queryInfo);
  var url = tab[0].url;
  var sname = document.getElementById("txtName");

  console.log(url);
  console.log(sname.value);

  alert(`Enviado para o Notion\nurl: ${url}\nNome: ${sname.value}`);
});
