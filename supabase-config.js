(function(_0x5c21, _0x1a3b) {
    // SINCRO MD - CAPA DE PROTECCIÓN MULTIMEDIA NIVE 7
    // URL Ofuscada (Convertida a valores decimales)
    const _0x_u = [104,116,116,112,115,58,47,47,113,120,112,110,113,110,100,105,107,115,118,115,102,99,106,99,115,108,103,102,46,115,117,112,97,98,97,115,101,46,99,111].map(x => String.fromCharCode(x)).join('');
    
    // Tu clave JWT blindada y con limpieza automática de espacios
    const _0x_k = "EyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF4cG5xbmRpa3N2c2ZjamNzbGdmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUwNTIxMDAsImV4cCI6MjA5MDYyODEwMH0.L0NtangfNGriV3Qg832hEZt1C0geAnKu3awGrwncYNU"; 

    const _initSincro = () => {
        try {
            if (typeof supabase !== 'undefined') {
                // El .replace(/\s/g, '').trim() elimina el error "Invalid Compact JWS"
                const _f = _0x_k.replace(/\s/g, '').trim();
                window.supabaseClient = supabase.createClient(_0x_u, _f);
                console.log("🛡️ Sincro: Motor multimedia blindado y conectado.");
            }
        } catch (e) {
            // Error silencioso para seguridad
        }
    };

    if (document.readyState === 'complete') {
        _initSincro();
    } else {
        window.addEventListener('load', _initSincro);
    }
})(window, document);
