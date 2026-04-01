(function(_0x5a21,_0x3f1b){
    // Configuración Blindada de Supabase para Sincro
    const _0x1a = [104,116,116,112,115,58,47,47,113,120,112,110,113,110,100,105,107,115,118,115,102,99,106,99,115,108,103,102,46,115,117,112,97,98,97,115,101,46,99,111].map(c => String.fromCharCode(c)).join('');
    
    // AQUÍ: Pega tu clave que empieza por eyJ entre las comillas
    const _0x4b = "TU_CLAVE_AQUÍ_SIN_ESPACIOS"; 

    const _init = () => {
        try {
            if (typeof supabase !== 'undefined') {
                // El .trim() es VITAL para que el video no dé error de JWS
                const _k = _0x4b.trim();
                window.supabaseClient = supabase.createClient(_0x1a, _k);
                console.log("Sincro: Motor listo.");
            }
        } catch (e) {}
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', _init);
    } else {
        _init();
    }
})(window, document);
