function insert(num) {
    document.form.textview.value = document.form.textview.value + num;
}

function clean() {
    document.form.textview.value = "";
}

function equal() {
    let result = "";
    //змінна, якка зберігає результат обчислення
    let exp = document.form.textview.value;
    // зберегли вираз
    if (exp) {
        result = eval(exp);
        //якщо ми шось ввели, то обчислюємо і записуємо результат
    }
    document.form.textview.value = result;
    //
    document.getElementById('history').value = document.getElementById('history').value + exp + " = " + result + "\n";
}

function back() {
    let exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length - 1);
}

function clean_history() {
    document.getElementById('history').value = "";
}
