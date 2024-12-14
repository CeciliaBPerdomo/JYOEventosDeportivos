const Correo = () => {
    return (
        <div
            className="mr-1"
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '34px', height: '33px' }}
        >
            {/* Cuadrado de fondo */}
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="33" viewBox="0 0 34 33" fill="none" >
                <rect width="34" height="33" fill="url(#paint0_linear_266_2)" />
                <defs>
                    <linearGradient id="paint0_linear_266_2" x1="33.9148" y1="16.3074" x2="0" y2="16.5108" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#00B6D2" />
                        <stop offset="1" stopColor="#005E6C" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Ícono del sobre */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17" viewBox="0 0 24 17" fill="none" style={{ position: 'absolute' }}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M21.0528 0.0109863C21.7188 0.0109863 22.3102 0.313319 22.6824 0.780952L11.8744 9.36449L1.16267 0.936821C1.52082 0.38159 2.16679 0.0109863 2.90416 0.0109863H21.0528ZM0.86499 14.2998V2.45994L8.55093 8.50702L0.880834 14.5416C0.870379 14.4624 0.86499 14.3817 0.86499 14.2998ZM1.56792 15.7584C1.92579 16.0526 2.39301 16.2307 2.90416 16.2307H21.0528C21.4921 16.2307 21.899 16.0991 22.2319 15.8753L14.0647 9.38907L12.596 10.5555C12.1806 10.8854 11.5755 10.8867 11.1586 10.5586L9.66772 9.38568L1.56792 15.7584ZM15.1754 8.50702L23.0362 14.75C23.0727 14.6055 23.092 14.4548 23.092 14.2998V2.21976L15.1754 8.50702Z"
                    fill="white"
                />
            </svg>
        </div>
    );
};

export default Correo;
