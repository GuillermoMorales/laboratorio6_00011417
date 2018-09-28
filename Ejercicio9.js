var valor = prompt("Ingrese el valor: ");
var mensaje;

function adivinanza(numero)
{
    let array =[1,2,3,4,5];
    for(let i=0;i<=array.length-1;i++)
    {
        if(numero == array[i])
        {
            mensaje = ("Has ganado");
            break;
        }
        else
        {
            mensaje =("Has perdido");
        }
    }
    return mensaje;
}

console.log(adivinanza(valor));