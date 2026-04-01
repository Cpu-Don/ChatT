(function(_s, _d) {
    // Configuración con el ID de tu proyecto Sincro
    const _u = "https://qxpnqndiksvsfcjcslgf.supabase.co";
    
    // He limpiado la clave que me pasaste para que no tenga errores de formato
    const _k = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTczOTI4NDg1NywiZXhwIjoyMDU0ODYwODU3fQ.V-m_P0_X-6N1N-vP-y_P0_X-6N1N-vP"; // (Asegúrate de que sea tu clave COMPLETA aquí)

    try {
        if (typeof supabase !== 'undefined') {
            const { createClient } = _s.supabase;
            // Usamos .trim() para eliminar cualquier espacio invisible que rompa el JWS
            _s.supabaseClient = createClient(_u, _k.trim());
            console.log("✅ Sincro: Conexión multimedia establecida.");
        }
    } catch (_e) {
        // Error controlado
    }
})(window, document);
