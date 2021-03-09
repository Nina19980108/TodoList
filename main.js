// 初始變數
let list = document.querySelector('#my-todo')
let addBtn = document.querySelector('#addBtn')
let input = document.querySelector('#newTodo')
let doneList = document.querySelector('#done')

// 資料
const todos = ['Hit the gym', 'Read a book', 'Buy eggs', 'Organize office', 'Pay bills']
for (let todo of todos) {
  addItem(todo)
}


// 函式
function addItem(text) {
  let newItem = document.createElement('li')
  newItem.innerHTML = `
    <label for="todo">${text}</label>
    <i class="delete fa fa-trash"></i>
  `
  list.appendChild(newItem)
}

// function put item in doneList

function done(event) {
  let doneItem = document.createElement('li')
  doneList.appendChild(doneItem)
  doneItem.innerHTML = `<label for="done" class='checked'>${event.target.innerText}</label>
    <i class="delete fa fa-trash"></i>`
}

// function add new item

function addAItem() {
  let inputValue = input.value
  if ((inputValue.length > 0) && (inputValue !== ' '.repeat(inputValue.length))) {
    addItem(inputValue)
  }
  input.value = ''
}

// function delete item
function deleteItem(target) {
  let parentElement = target.parentElement
  parentElement.remove()
}

// click add button
addBtn.addEventListener('click', addAItem)

// press enter on add button
input.addEventListener('keypress', function (event) {
  if (event.keyCode === 13) { addAItem() }
})


list.addEventListener('click', function (event) {
  let target = event.target

  // delete a item
  if (target.classList.contains('delete')) {
    deleteItem(target)

    // move item from Todo to Done
  } else if (target.tagName === 'LABEL') {
    done(event)
    target.parentElement.remove()
  }
})

doneList.addEventListener('click', function (event) {
  let target = event.target

  // move item from Done to Todo
  if (target.tagName === 'LABEL') {
    addItem(target.innerText)
    target.parentElement.remove()

    // delete item
  } else if (target.classList.contains('delete')) {
    deleteItem(target)
  }
})