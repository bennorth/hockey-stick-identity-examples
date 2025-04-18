(() => {
    const table = document.querySelector("table");
    table.style.width = "12rem";
    table.style.marginLeft = table.style.marginRight = "auto";
    console.log("table", table);
    const blue = "#56b4e9";
    const yellow = "#f0e442";
    for (const hd of [[2, 6, blue], [3, 5, blue], [4, 4, blue], [5, 5, yellow]]) {
	const td = table.querySelector(
	    `:scope tr:nth-child(${hd[0]}) > td:nth-child(${hd[1]})`
	);
	td.style.backgroundColor = hd[2];
    }
})();
