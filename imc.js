var idade = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var female = document.getElementById("f");
var male = document.getElementById("m");

document.getElementById("submit").addEventListener("click", validadeForm);
 
function validadeForm()
{
var weight = document.getElementById("weight");
    if(idade.value == '' ||  height.value == '' || weight.value == '' || (female.checked == false && male.checked == false) )
    {
        alert("Preencha todos os campos!");

        document.getElementById("submit").removeEventListener("click", calculateIMC);
    }
    
    else
    {
        calculateIMC();
    }
    
    function calculateIMC()
    {
        var arrayPessoas = [idade.value, height.value, weight.value];
        if(male.checked)
        {
            arrayPessoas.push("male");
        }
        else if(female.checked)
        {
            arrayPessoas.push("female");
        }

        var imc = Number( arrayPessoas[2]) / (Number (arrayPessoas[1]) /100 * Number (arrayPessoas[1]) /100);
        
        var result = '';
        if(imc<18.5)
        {
            result = 'Magro';
        }
        else if(18.5<=imc && imc<=24.9)
        {
            result = 'Normal';
        }
        else if (24.9<=imc && imc<=30)
        {
            result = 'Obeso';
        }
        else if (imc>30)
        {
            result = 'Obesidade além do limite';
        }

        var h1 = document.createElement('h1');
        var h2 = document.createElement('h2');

        var t = document.createTextNode(result);
        var b = document.createTextNode('IMC: ');
        var r = document.createTextNode(parseFloat(imc).toFixed(2) + ' kg/m²');

        h1.appendChild(t);
        h2.appendChild(b);
        h2.appendChild(r);

        document.body.appendChild(h1);
        document.body.appendChild(h2);

        document.getElementById("submit").removeEventListener("click", calculateIMC);
        document.getElementById("submit").removeEventListener("click", validadeForm);
    }

    document.getElementById("submit").addEventListener("click" , calculateIMC);
} 