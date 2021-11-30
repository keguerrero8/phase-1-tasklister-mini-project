document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector("#create-task-form")

  //form.addEventListener("submit", (e) => e.preventDefault())
  form.addEventListener("submit", function (e) {
    //console.log(e.target.new_task_description.value)
    handleSubmit(e.target.new_task_description.value)
    e.preventDefault()
  }) 

});


function handleSubmit(todo) {
  let p = document.createElement("p")
  let button = document.createElement("button")
  button.addEventListener("click", handleDelete)
  p.textContent = `${todo}  `
  button.textContent = "x"
  document.querySelector("#tasks").append(p)
  p.appendChild(button)
}

function handleDelete (e) {
  e.target.parentNode.remove()
}


// const form = document.querySelector("#create-task-form")

// form.addEventListener("submit", function (e) {
//   e.preventDefault()
// })
