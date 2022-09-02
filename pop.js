fetch("https://icanhazdadjoke.com/slack")
  .then((response) => response.json())
  .then((response) => {
    const jokeSetup = response.attachments[0].text;
    const SetupElement = document.getElementById("SetupElement");
    SetupElement.innerHTML = jokeSetup;
  })
  .catch((err) => console.error(err));
