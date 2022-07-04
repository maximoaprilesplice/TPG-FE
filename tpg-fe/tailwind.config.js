/** @type {import('tailwindcss').Config} */
function rem(sz) {
    return `${sz / 16}rem`;
}
function withLetterSpacing(sz, lh, ltr) {
    return [
        rem(sz),
        {
            lineHeight: lh ? rem(lh) : 1.5,
            letterSpacing: ltr || '0.03em'
        }
    ];
}

module.exports = {
    mode: 'jit',
    content: ['./src/**/*.{html,js}'],
    purge: {
        options: {
            safelist: [
                /^pb-/,
                /^pt-/,
                /^px-/,
                /^py-/,
                /^mt-/,
                /^mb-/,
                /^my-/,
                /^mx-/,
                /^sm:/,
                /^md:/,
                /^lg:/,
                'pt-16'
            ]
        }
    },
    theme: {
        container: {
            center: true,
            padding: '24px'
        },
        //Breakpoints
        screens: {
            xs: '0px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1296px',
            xxl: { max: '1535px' }
        },
        boxShadow: {
            nav: '0px 9px 9px rgba(0, 0, 0, 0.05);',
            card: ' 0px 8px 48px rgba(0, 0, 0, 0.05);',
            DEFAULT: '0px 4px 24px rgba(0, 0, 0, 0.15);',
            none: 'none'
        },
        fontFamily: {
            tpg: ['MaisonNeue', 'sans-serif'],
            book: ['MaisonNeueBook', 'sans-serif']
        },
        fontWeight: {
            light: 300,
            normal: 400,
            medium: 500,
            semibold: 600,
            bold: 700
        },
        //letter spacing
        letterSpacing: {
            tightest: '-1px',
            tight: '-0.5px',
            0: '0',
            10: '.1px',
            20: '.2px',
            25: '.25px',
            50: '.50px',
            250: '2.5px'
        },
        //colors
        colors: {
            royal: {
                1: '#003973',
                2: '#00468C',
                3: '#0060BF'
            },
            teals: {
                1: '#004047',
                2: '#005862',
                3: '#007987'
            },
            gray: {
                DEFAULT: '#1E1E1E',
                1: '#F4F4F4',
                2: '#E7E7E7',
                3: '#A0A0A0',
                4: '#656565',
                5: '#363636'
            },
            navy: {
                1: '#032A4D',
                2: '#043867'
            },
            black: '#1E1E1E',
            white: '#fff',
            plum: {
                1: '#301C3B',
                2: '#452854',
                3: '#733F8C'
            },
            purple: {
                default: '#301C3B',
                2: '#452854',
                3: '#733F8C'
            },
            rust: {
                1: '#66350A',
                2: '#80420D',
                3: '#A65611'
            },
            gold: {
                1: '#705500',
                2: '#8A6800',
                3: '#B28600'
            },
            olive: {
                1: '#384526',
                2: '#4D5E34',
                3: '#6C8549'
            },

            o: {
                gray: 'rgba(255,255,255,0.2)',
                black: 'rgba(30,30,30,0.2)'
            },
            cobalt: '#0055FF'
        },
        //font size
        fontSize: {
            hero: withLetterSpacing(160, 176, '0.02em'),
            mhero: withLetterSpacing(60, 68, '0.02em'),
            h1: withLetterSpacing(84, 104),
            h2: withLetterSpacing(64, 80),
            h3: withLetterSpacing(48, 60),
            h4: withLetterSpacing(36, 48),
            h5: withLetterSpacing(26, 36),
            lg: withLetterSpacing(20, 30),
            base: withLetterSpacing(16, 24),
            sm: withLetterSpacing(14, 24),
            xs: withLetterSpacing(12, 20),
            label: withLetterSpacing(12, 20, '0.15em'),
            stats: withLetterSpacing(80, 96),
            mstats: withLetterSpacing(60, 64),
            mh1: withLetterSpacing(44, 56),
            mh2: withLetterSpacing(38, 50),
            mh3: withLetterSpacing(32, 44),
            mh4: withLetterSpacing(26, 36),
            mh5: withLetterSpacing(20, 30),
            mlg: withLetterSpacing(18, 26),
            mbase: withLetterSpacing(15, 22),
            msm: withLetterSpacing(13, 20),
            mxs: withLetterSpacing(11, 18),
            mlabel: withLetterSpacing(11, 18, '0.15em')
        },
        //line height
        lineHeight: {
            96: '96px',
            76: '76px',
            56: '56px',
            48: '48px',
            40: '40px',
            38: '38px',
            32: '32px',
            28: '28px',
            26: '26px',
            24: '24px',
            22: '22px',
            20: '20px',
            18: '18px',
            16: '16px'
        },
        borderRadius: {
            none: '0',
            10: '10px',
            20: '20px',
            30: '30px',
            40: '40px',
            50: '50px'
        },
        extend: {
            backgroundSize: {
                '100%': '100%'
            },
            transitionProperty: {
                height: 'height'
            },
            transform: ['hover', 'group-hover']
        }
    }
};
