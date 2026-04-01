(function(_0x1a, _0x2b) {
    // SINCRO MD - PROTECCIÓN DE MOTOR MULTIMEDIA
    const _u = [104,116,116,112,115,58,47,47,113,120,112,110,113,110,100,105,107,115,118,115,102,99,106,99,115,108,103,102,46,115,117,112,97,98,97,115,101,46,99,111].map(x => String.fromCharCode(x)).join('');
    
    // REVISA ESTA CLAVE: Asegúrate de que empiece exactamente con eyJ...
    const _k = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF4cG5xbmRpa3N2c2ZjamNzbGdmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUwNTIxMDAsImV4cCI6MjA5MDYyODEwMH0.L0NtangfNGriV3Qg832hEZt1C0geAnKu3awGrwncYNU"; 

    const _startSincro = () => {
        try {
            if (typeof supabase !== 'undefined') {
                // Forzamos limpieza absoluta de la clave
                const _clean = _k.replace(/\s/g, '').trim();
                window.supabaseClient = supabase.createClient(_u, _clean);
                console.log("🛡️ Sincro: Blindaje activo.");
            }
        } catch (e) {}
    };

    if (document.readyState === 'complete') _startSincro();
    else window.addEventListener('load', _startSincro);
})(window, document);
