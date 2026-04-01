// supabase-config.js
(function() {
    const check = setInterval(() => {
        if (typeof supabase !== 'undefined') {
            clearInterval(check);
            const _0x = ["aHR0cHM6Ly9xeHBuYW5kaWtzdnNmY2pjc2xnZi5zdXBhYmFzZS5jbw==", "c2JfcHVibGlzaGFibGVfZmxiMEpsTE1lV2lnZ1BtTERGTTkxZ19VSWh1MTZrTg=="];
            try {
                window['sincroDB'] = supabase.createClient(atob(_0x[0]), atob(_0x[1]));
                console.log("✅ Sincro Engine: Conectado");
            } catch (e) {
                console.error("❌ Error en conexión");
            }
        }
    }, 100); // Revisa cada 100ms si la librería ya cargó
})();
