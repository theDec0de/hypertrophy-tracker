const exercise_box = document.getElementById("exercise_box");
const weight_box = document.getElementById("weight_box");
const rep_box = document.getElementById("rep_box");
const set_box = document.getElementById("set_box");

const add_button = document.getElementById("add_button");
const list_container = document.getElementById("list_container");

function create_tracker(exercise = "", weight = "", reps = "", sets = "") {
    let new_div = document.createElement("div");
    let x_button = document.createElement("img");
    x_button.src = "img/x.png";
    x_button.classList.add("x_button");

    let ex_input_box = document.createElement("input");
    ex_input_box.classList.add("item_input_box");
    ex_input_box.placeholder = "Exercise";
    ex_input_box.value = exercise;

    let weight_input_box = document.createElement("input");
    weight_input_box.classList.add("item_input_box");
    weight_input_box.placeholder = "Weight";
    weight_input_box.value = weight;

    let rep_input_box = document.createElement("input");
    rep_input_box.classList.add("item_input_box");
    rep_input_box.placeholder = "Repetitions";
    rep_input_box.value = reps;

    let set_input_box = document.createElement("input");
    set_input_box.classList.add("item_input_box");
    set_input_box.placeholder = "Sets";
    set_input_box.value = sets;

    new_div.appendChild(x_button);
    new_div.appendChild(ex_input_box);
    new_div.appendChild(weight_input_box);
    new_div.appendChild(rep_input_box);
    new_div.appendChild(set_input_box);
    list_container.appendChild(new_div);
}

function clear_fields() {
    exercise_box.value = '';
    weight_box.value = '';
    rep_box.value = '';
    set_box.value = '';
}

function save_data() {
    const trackers = Array.from(list_container.children).map(tracker => {
        return {
            exercise: tracker.children[1].value,
            weight: tracker.children[2].value,
            reps: tracker.children[3].value,
            sets: tracker.children[4].value,
        };
    });
    localStorage.setItem('data', JSON.stringify(trackers));
}

function restore_data() {
    list_container.innerHTML = '';
    const data = JSON.parse(localStorage.getItem('data') || '[]');
    data.forEach(({ exercise, weight, reps, sets }) => {
        create_tracker(exercise, weight, reps, sets);
    });
}

add_button.addEventListener("click", function () {
    create_tracker(exercise_box.value, weight_box.value, rep_box.value, set_box.value);
    clear_fields();
    save_data();
});

list_container.addEventListener("click", function (e) {
    if (e.target.classList.contains("x_button")) {
        e.target.parentElement.remove();
        save_data();
    }
}, false);

list_container.addEventListener("input", function () {
    save_data();
});

function about_clicked() {
    alert("Author: Dec0de\nAbout: An app meant to track your PRs for muscle growth");
}

restore_data();