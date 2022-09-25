var btnEnviar = document.getElementById("btnEnviar");

async function sendToNotion(textTitle, link) {
  var databaseId = process.env.DATABASEID;

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

  const xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      console.log(this.responseText);
    }
  });

  var secret = process.env.SECRETKEY;
  xhr.open("POST", "https://api.notion.com/v1/pages");
  xhr.setRequestHeader("Notion-Version", "2022-06-28");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("Authorization", "Bearer " + `${secret}`);

  xhr.send(data);
}

btnEnviar.addEventListener("click", async () => {
  var queryInfo = { active: true, currentWindow: true };
  var tab = await chrome.tabs.query(queryInfo);
  var url = tab[0].url;
  var sname = document.getElementById("txtName");

  sendToNotion(sname.value, url);
});
