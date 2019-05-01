window.onload = function() {
  const message = document.getElementById("message")
  document.getElementById("button").addEventListener("click", () => {
    console.log("hello", message)
    fetch("/.netlify/functions/hello-world?name=" + "Netlify")
      .then((data) => data.json())
      .then(({ msg }) => console.log(msg) || (message.innerHTML = msg))
  })
}
