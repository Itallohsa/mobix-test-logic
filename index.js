let Hourglass = (size, inc, dec) => {
    let interval = setInterval(function () {
        console.clear()
        let x = 0
        let y = size
        let string = ''
        let i, j;

        for (i = 1; i <= size; i++) {
            for ( j = 1; j <= x; j++) {
                string += " "
            };
            for (j = 1; j <= y; j++) {
                if (i <= dec + 1 && i > size / 2 && i < size && j > 1 && j < y) {
                    string += " "
                } else if (i < inc && i < size / 2 + 1 && i > 1 && j > 1 && j < y) {
                    string += " "
                } else {
                    string += "*"
                }
            };
            if (i <= size / 2) {
                y -= 2;
                x++;
            } else {
                y += 2;
                x--;
            }
            console.log(string)
            string = ''
        };
        inc++
        dec--

        if(dec == 0){
            clearInterval(interval);
        };

    }, 1000)
};

let size = 21 // definir tamanho aqui
let dec = size - 1
let inc = 1

Hourglass(size, inc, dec);