const head = document.body;
let rows = 16;
let cols = 16

const create_div_block = function(style) {
    const new_div = document.createElement("div");
    new_div.className = style;
    new_div.addEventListener("mouseover", function() {
        if (!new_div.classList.contains("block_filled")) {
            new_div.classList.add("block_filled")
        }
    })
    return new_div;
};

const create_row = function(elems) {
    const new_row = document.createElement("div");
    new_row.className = "row";
    for (let i = 0; i < elems; i++) {
        new_row.appendChild(create_div_block("block_size"));
    }
    return new_row;
}

const build_grid = function(rows, cols) {
    const grid = document.createElement("div");
    grid.className = "grid";
    for (let i = 0; i < rows; i++) {
        grid.appendChild(create_row(cols));
    }
    return grid;
}

const reset_grid = function() {
    const filled = document.getElementsByClassName("block_filled");
    if (filled != null) {
        for (let i = 0; i < filled.length - 1; i++) {
            do {
                if (filled.item(i).classList != null) {
                    filled.item(i).classList.remove("block_filled");
                }
            } while (filled.item(i).classList.contains("block_filled"))
        }
    }
    return 0;
}

const resize_grid = function() {
    const grid = document.getElementsByClassName("grid");
    const parent = document.getElementsByClassName("main");
    parent[0].removeChild(grid[0]);
    parent[0].appendChild(build_grid(rows, cols));
    return;
}

const main_container = function() {

    const container = document.createElement("div");
    container.style.cssText = "display: flex; justify-content: center;";
    container.className = "main";

    const control_ui = document.createElement("div");

    const reset_button = document.createElement("button");
    reset_button.textContent = "Reset";

    const slider = document.createElement("input");
    slider.type = "range";
    slider.min = "1";
    slider.max = "100";
    slider.value = "16";
    slider.className = "slider";
    slider.oninput = function() {
        rows = Number.parseInt(this.value);
        cols = Number.parseInt(this.value);
        resize_grid();
    }

    const grid = build_grid(16, 16);


    control_ui.appendChild(reset_button);
    control_ui.appendChild(slider);
    container.appendChild(control_ui);
    container.appendChild(grid);

    reset_button.onclick = reset_grid;

    return container;
}

const header = function() {
    const h1 = document.createElement("h1");
    h1.textContent = "Sketch Book"
    return h1;
}


head.appendChild(header());
head.appendChild(main_container());