// Configuración exacta con las llaves que me pasaste
const SUPABASE_URL = "https://qxpnqndiksvsfcjcslgf.supabase.co";
const SUPABASE_KEY = "sb_publishable_flb0JlLMeWiggPmLDFM91g_UIhu16kN";

// Verificación de seguridad para que no salga el cartel de error
if (!SUPABASE_URL || !SUPABASE_KEY || SUPABASE_KEY.includes("AQUÍ")) {
    console.error("Error: Las credenciales de Supabase no están listas.");
} else {
    try {
        // Inicialización usando el objeto global 'supabase' de la librería CDN
        const { createClient } = supabase;
        const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);

        // Exportar al objeto global window
        window.supabaseClient = supabaseClient;
        console.log("Sincro: Conexión con Supabase establecida.");
    } catch (err) {
        console.error("Error al inicializar Supabase:", err);
    }
}
