function clean(){
    document.form.kolom.value = " ";
}

function del(){
    var number = document.form.kolom.value;
    document.form.kolom.value = number.substring(0, number.length-1);
}

function insert(num){
    document.form.kolom.value = document.form.kolom.value+num;
}

function equal(){
    var number = document.form.kolom.value;
    if(number){
        document.form.kolom.value = eval(number);
    }

}