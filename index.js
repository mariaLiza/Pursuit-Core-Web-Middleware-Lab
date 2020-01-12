let div = document.querySelector("div")
let input = document.querySelector("input")
let button = document.querySelector("button")

button.addEventListener("click", () => {
  let ul = document.createElement("ul")
  ul.innerHTML = ""
  res.data.forEach(el => {
      axios.get(`http://localhost:3000/animals/`).then(res => {
        let li = document.createElement("li");
        li.innerText = el.type
        ul.appendChild(li);
        div.appendChild(ul);
    })
})
})
