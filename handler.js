const exercise_box = document.getElementById("exercise_box")
const weight_box = document.getElementById("weight_box")
const rep_box = document.getElementById("rep_box")
const set_box = document.getElementById("set_box")

const add_button = document.getElementById("add_button")
const list_container = document.getElementById("list_container")

function create_tracker() {
    // create the elements 
    let new_div = document.createElement("div");
    let x_button = document.createElement("img");
    x_button.src = "img/x.png";
    x_button.classList.add("x_button");

    let ex_input_box = document.createElement("input");
    ex_input_box.classList.add("item_input_box")
    ex_input_box.placeholder = "Exercise"
    ex_input_box.value = exercise_box.value;

    let weight_input_box = document.createElement("input");
    weight_input_box.classList.add("item_input_box")
    weight_input_box.placeholder = "Weight"
    if (weight_box.value === '') {
        weight_input_box.value = '';
    } else {
        weight_input_box.value = weight_box.value + " Lbs";
    }
    
    let rep_input_box = document.createElement("input");
    rep_input_box.classList.add("item_input_box")
    rep_input_box.placeholder = "Repititions"
    rep_input_box.value = rep_box.value;
    
    let set_input_box = document.createElement("input");
    set_input_box.classList.add("item_input_box");
    set_input_box.placeholder = "Sets"
    set_input_box.value = set_box.value;

    new_div.appendChild(x_button);
    new_div.appendChild(ex_input_box);
    new_div.appendChild(weight_input_box);
    new_div.appendChild(rep_input_box);
    new_div.appendChild(set_input_box);
    list_container.appendChild(new_div);

    // get rid of the text in the fields
    clear_fields();
    // don't forget to save
    save_data();
}

function clear_fields() {
    exercise_box.value = ''
    rep_box.value = ''
    weight_box.value = ''
    set_box.value = ''
}

list_container.addEventListener("click", function(e){
    if (e.target.classList.contains("x_button")) {
        e.target.parentElement.remove();
        save_data();
    } else {
        save_data();
    }
}, false);

function save_data() {
    localStorage.setItem('data', list_container.innerHTML);
}

function restore_data() {
    list_container.innerHTML = localStorage.getItem("data");
}

restore_data()