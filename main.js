function clickNewColors() {
    let symbols, color;
    symbols = "0123456789ABCDEF";

    color = "#"
    for (let i = 0; i < 8; i++) {
        color = color +symbols[Math.floor(Math.random() *10)];
}
document.body.style.background=color
}
