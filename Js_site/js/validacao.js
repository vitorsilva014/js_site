function validacao(){

    let nomecompleto=document.getElementById("i_nomecompleto");
    let email=document.getElementById("i_email");
    let data=document.getElementById("i_data");
    let senha=document.getElementById("i_senha");

    input_style (nomecompleto);
    input_style (data);
    input_style (senha);
    input_style (email);

}

function input_style(input){

    if(!input.checkValidity()){
        input.style.border = "2px solid red";
        input.style.backgroundColor = "#fdc1c1";
    }else{
        input.style.border = "1px solid gray";
        input.style.backgroundColor = "white";
    }

    return input.style.border;
}