import Exports from "./exportEnviroments.js";

export default class RequesterNotion {
  CallNotion(data) {
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === this.DONE) {
        console.log(this.responseText);
      }
    });

    var expSecret = new Exports();
    xhr.open("POST", "https://api.notion.com/v1/pages");
    xhr.setRequestHeader("Notion-Version", "2022-06-28");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader(
      "Authorization",
      "Bearer " + `${expSecret.GetSecret()}`
    );

    xhr.send(data);
  }
}
