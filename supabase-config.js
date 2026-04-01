(function(_0x1a2b, _0x3c4d) {
    // Configuración Protegida de Supabase para Sincro
    const _u = "https://qxpnqndiksvsfcjcslgf.supabase.co";
    
    // AQUÍ DEBES PEGAR TU CLAVE COMPLETA (LA QUE EMPIEZA POR eyJ)
    const _k = "TU_CLAVE_LARGA_AQUÍ"; 

    try {
        if (typeof supabase !== 'undefined') {
            const { createClient } = supabase;
            // Inicialización global sin simplificar la lógica de conexión
            window.supabaseClient = createClient(_u, _k);
            console.log("Sincro: Motor de datos vinculado.");
        } else {
            console.error("Error: Librería de Supabase no detectada.");
        }
    } catch (e) {
        // Error silencioso para no dar pistas en consola si algo falla
    }
})(window, document);
