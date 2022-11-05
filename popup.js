import RequesterNotion from "./requester.js";
import Exports from "./exportEnviroments.js";

var btnEnviar = document.getElementById("btnEnviar");

btnEnviar.addEventListener("click", async () => {
  var queryInfo = { active: true, currentWindow: true };
  var tab = await chrome.tabs.query(queryInfo);
  var url = tab[0].url;

  if (document.getElementById("txtName").value.length > 0) {
    var name = document.getElementById("txtName").value;
    sendToNotion(name, url);
    alert(`O link foi salvo com o nome "${name}"`);
  } else {
    alert("Um nome precisa ser digitado..;)");
  }
});

function VerifyIfLinkExists(link) {} //TODO

async function sendToNotion(textTitle, link) {
  var expDatabaseId = new Exports();
  var databaseId = expDatabaseId.GetDatabaseId();

  const data = JSON.stringify({
    parent: {
      database_id: `${databaseId}`,
    },
    icon: {
      emoji: "🌍",
    },
    properties: {
      Name: {
        title: [
          {
            text: {
              content: `${textTitle}`,
            },
          },
        ],
      },
      Link: {
        url: `${link}`,
      },
    },
  });

  var requestNotion = new RequesterNotion();
  requestNotion.CallNotion(data);
}
