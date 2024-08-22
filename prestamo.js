function gen_table(){
    document.getElementById("tab").innerHTML="";
    // Obtener valores ingresados por el usuario: capital, cuotas e interés
    let n=Number(document.getElementById("capital").value);
    let n2=Number(document.getElementById("couta").value);
    let n3=Number(document.getElementById("interes").value);
    // Verificar si el capital es mayor a 0
    if(n>0){   
        for(i=1;i<=n2;i++){
            // Calcular el capital por cuota
            ca=n/n2;
            d1=ca.toFixed(2);
            i2=((n*n3)/100)/n2;
            d2=i2.toFixed(2);
            // Calcular el importe total a pagar por cuota (capital + interés)
            r=ca+i2;
            d3=r.toFixed(2);
            // Añadir fila con los datos calculados a la tabla
            document.getElementById("tab").innerHTML=document.getElementById("tab").innerHTML+
                    `<tr>
                        <td> ${i}</td>
                        <td> ${d1}</td>
                        <td> ${d2}</td>
                        <td> ${d3}</td>
                    </tr>`;
        }
        // Calcular el total de capital prestado (sólo para mostrarlo)
        n1=n.toFixed(2);
        // Calcular el total de interés generado (i2 * número de cuotas)
        t_i=i2*n2;
        d4=t_i.toFixed(2);
        // Calcular el total a pagar (capital + interés)
        t_p=r*n2;
        d5=t_p.toFixed(2);
        // Mostrar los totales en la fila del pie de la tabla
        document.getElementById("t1").innerHTML=n1;
        document.getElementById("t2").innerHTML=d4;
        document.getElementById("t3").innerHTML=d5;        
    }else{
        // Mostrar alerta si el capital es 0 o no se han rellenado los campos
        alert("¡ Rellene todos los campos !");
    }
}
