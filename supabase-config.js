// Configuración de Supabase para el proyecto Sincro
const SUPABASE_URL = "https://qxpnqndiksvsfcjcslgf.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_flb0JlLMeWiggPmLDFM91g_UIhu16kN";

// Inicialización del cliente
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Exportar para usar en index.html u otros archivos
window.supabaseClient = supabase;
