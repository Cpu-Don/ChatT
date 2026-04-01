(function() {
    // Array con tus llaves protegidas
    const _0x5f21 = [
        "aHR0cHM6Ly9xeHBuYW5kaWtzdnNmY2pjc2xnZi5zdXBhYmFzZS5jbw==", 
        "c2JfcHVibGlzaGFibGVfZmxiMEpsTE1lV2lnZ1BtTERGTTkxZ19VSWh1MTZrTg=="
    ];

    try {
        // Creamos la conexión global con el nombre oculto
        window['sincroDB'] = supabase.createClient(atob(_0x5f21[0]), atob(_0x5f21[1]));
        console.log("Sincro Engine: Ready");
    } catch (e) {
        console.error("Sincro Engine: Connection Error");
    }
})();
