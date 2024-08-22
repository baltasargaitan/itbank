function convert() {
    const monto = document.getElementById('money').value;
    const deMoneda = document.getElementById('divisa1').value;
    const aMoneda = document.getElementById('divisa2').value;

    const tasaCambios = {
        'ARS': {
            'USD': 0.0007,
            'GBP': 0.0005,
            'BRL': 0.004
        },
        'USD': {
            'ARS': 1400,
            'GBP': 0.80,
            'BRL': 5.50
        },
        'GBP': {
            'USD': 1.31,
            'ARS': 1800,
            'BRL': 7.20
        },
        'BRL': {
            'USD': 0.20,
            'GBP': 0.14,
            'ARS': 240
        }
    };


 
    const res = monto * tasaCambios[deMoneda][aMoneda];

 
    document.getElementById('r').textContent = `Resultado: ${res.toFixed(2)} ${aMoneda}`;
}