(function() {
    // Datos ofuscados (Base64)
    const _0x1a = "aHR0cHM6Ly9xeHBuYW5kaWtzdnNmY2pjc2xnZi5zdXBhYmFzZS5jbw==";
    const _0x2b = "c2JfcHVibGlzaGFibGVfZmxiMEpsTE1lV2lnZ1BtTERGTTkxZ19VSWh1MTZrTg==";

    // Función de decodificación
    const decode = (str) => atob(str);

    // Inicialización global
    window.supabase = supabase.createClient(decode(_0x1a), decode(_0x2b));
})();
