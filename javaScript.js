function captura(){
    var peso = document.getElementById("peso").value;
    let gravedadTierra = 9.8;
    let pesoMercurio = parseInt(peso * 3.7 / gravedadTierra);
    let pesoVenus  = parseInt(peso * 8.87 / gravedadTierra); 
    let pesoTierra = parseInt(peso * 1);
    let pesoMarte  = parseInt(peso * 3.721 / gravedadTierra); 
    let pesoJupiter= parseInt(peso * 24.79 / gravedadTierra); 
    let pesoSaturno= parseInt(peso * 10.44 / gravedadTierra); 
    let pesoUrano  = parseInt(peso * 8.87 / gravedadTierra); 
    let pesoNeptuno= parseInt(peso * 11.15 / gravedadTierra) ;
    let pesoPluton = parseInt(peso * 0.62 / gravedadTierra);
    document.getElementById("pesoMercurio").innerHTML=
    "Tu peso en Mercurio es : " + pesoMercurio + " kilos";
    document.getElementById("pesoVenus").innerHTML=
    "Tu peso en Venus es : " + pesoVenus + " kilos";
    document.getElementById("pesoTierra").innerHTML=
    "Tu peso en la Tierra es : " + pesoTierra + " kilos";
    document.getElementById("pesoMarte").innerHTML=
    "Tu peso en Marte es : " + pesoMarte + " kilos";
    document.getElementById("pesoJupiter").innerHTML=
    "Tu peso en Jupiter es : " + pesoJupiter + " kilos";
    document.getElementById("pesoSaturno").innerHTML=
    "Tu peso en Saturno es : " + pesoSaturno + " kilos";
    document.getElementById("pesoUrano").innerHTML=
    "Tu peso en Urano es : " + pesoUrano + " kilos";
    document.getElementById("pesoNeptuno").innerHTML=
    "Tu peso en Neptuno es : " + pesoNeptuno + " kilos";
    document.getElementById("pesoPluton").innerHTML=
    "Tu peso en Plutón es : " + pesoPluton + " kilos";
}
