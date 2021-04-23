var imagenes = [];
imagenes["200"] = "200euros.png";
imagenes["100"] = "100euros.png";
imagenes["50"] = "50euros.png";
imagenes["20"] = "20euros.png";
imagenes["10"] = "10euros.png";
imagenes["5"] = "5euros.png";

class Billete
{
  constructor(v, c)
  {
    this.valor = v;
    this.cantidad = c;
    this.imagen = new Image ();
    this.imagen.src = imagenes[this.valor];
  }
}

// billetes de caja y entregados
var caja = [];
var entregado = [];
caja.push(new Billete(200, 10) )
caja.push(new Billete(100, 5) );
caja.push(new Billete(50, 10) );
caja.push(new Billete(20, 5) );
caja.push(new Billete(10, 10) );
caja.push(new Billete(5, 5) );

contar();

//variables
var reiniciar = document.getElementById("reiniciar");
var resultado = document.getElementById("resultado");
var finalizado = document.getElementById("finalizado");
var enter = document.addEventListener("keyDown", entregarDinero);
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);
var dinero = 0;
var div = 0;
var papeles = 0;

function entregarDinero()
{
  var dibujado = [];
  var t = document.getElementById("dinero");
  dinero = parseInt(t.value);
  if(total >= dinero)
  {
    for(var bi of caja)
    {
      if(dinero > 0)
      {
        div = Math.floor(dinero / bi.valor);
        if(div > bi.cantidad)
        {
          papeles = bi.cantidad;
        }
        else
        {
          papeles = div;
        }
        bi.cantidad = bi.cantidad - papeles;
        for (var i=0; i < papeles; i++)
        {
          dibujado.push( new Billete(bi.valor, 1) );
        }
        dinero -= (bi.valor * papeles);
      }
    }
  }
  if(dinero == 0)
  {
    resultado.innerHTML += "Se ha retirado: <br />";
    for(var e of dibujado)
    {
      resultado.innerHTML += "<img src=" + e.imagen.src + " />";
    }
    resultado.innerHTML += "<hr />";
  contar();
  }
  else
  {
    resultado.innerHTML += "Dinero Insuficiente <hr />";
  }
}

function contar()
{
  total = 0;
  for (var tot of caja)
  {
    total = total + tot.valor * tot.cantidad;
  }
  console.log(total);
}

var n = document.getElementById("reiniciarhd");
n.addEventListener("click", reiniciarCajero);

function reiniciarCajero()
{
  document.location.reload();
}
