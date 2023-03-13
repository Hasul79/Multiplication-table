let p = +prompt("Write your number to see the multiplication table ")
for(let i = 1; i <= p; i++){
    document.write("<div>")
    for(let j = 1; j <= 9; j++){
        let result = i * j
        document.write(`<h5> ${i} x ${j} = ${result}</h5>`)
    } 
    document.write("</div>")
} 