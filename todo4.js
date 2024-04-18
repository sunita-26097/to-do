let input = document.querySelector('input')
let ul = document.querySelector('#my_ul')
getData()

function getSavedData() {
    let data = localStorage.getItem("table");

    if (data == null) return []
    return JSON.parse(data)
}

function addTask() {
    let arr = getSavedData()
    arr.push(input.value)
    localStorage.setItem("table", JSON.stringify(arr))
    getData()
}

function getData() {
    let list = getSavedData()
    let html = ""
    for (let i = 0; i < list.length; i++) {
        html += `<li>${list[i]}<span class="cross" onclick="removeItem(${i})">X</span></li>`


    }
    ul.innerHTML = html
}

function removeItem(index) {
    let arr = getSavedData()
    if (arr.length == 0) return
    arr.splice(index, 1)
    localStorage.setItem('table', JSON.stringify(arr))
    getData()

}





