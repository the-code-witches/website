(function () {
    const canvas = document.getElementById('impressum-canvas');
    const ctx = canvas.getContext('2d');

    function render() {
        const section = document.getElementById('impressum');
        const style = getComputedStyle(section);
        const fontSize = parseFloat(style.fontSize);
        const fontFamily = style.fontFamily;
        const color = style.color;
        const lineHeight = fontSize * 1.85;
        const groupSpacing = fontSize * 1.2;
        const dpr = window.devicePixelRatio || 1;

        const boldFont = `600 ${fontSize}px ${fontFamily}`;
        const normalFont = `${fontSize}px ${fontFamily}`;

        const isXs = window.matchMedia('(max-width: 992px)').matches;

        const groups = [
            [{ text: 'code witches | Sengül & Nawaz GbR', bold: true }],
            isXs
                ? [{ text: 'Vertretungsberechtigt:' }, { text: 'Denise Sengül & Sehera Nawaz' }]
                : [{ text: 'Vertretungsberechtigt: Denise Sengül & Sehera Nawaz' }],
            [{ text: 'Graefestraße 8' }, { text: '10967 Berlin' }],
            [{ text: '+49 179 7913150' }, { text: 'hi@thecodewitches.de' }],
            [{ text: 'USt-IdNr.: DE458227110' }],
            isXs
                ? [
                    { text: 'Verantwortlich für den Inhalt' },
                    { text: 'nach § 18 Abs. 2 MStV:' },
                    { text: 'Denise Sengül & Sehera Nawaz' },
                ]
                : [
                    { text: 'Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:' },
                    { text: 'Denise Sengül & Sehera Nawaz' },
                ],
        ];

        const allLines = groups.flat();
        const maxWidth = Math.max(...allLines.map(l => {
            ctx.font = l.bold ? boldFont : normalFont;
            return ctx.measureText(l.text).width;
        }));

        const totalLines = allLines.length;
        const totalGroupGaps = groups.length - 1;
        const cssWidth = Math.ceil(maxWidth + 10);
        const cssHeight = Math.ceil(
            totalLines * lineHeight + totalGroupGaps * groupSpacing + fontSize * 0.25
        );

        // Size canvas for sharp rendering on high-DPI screens
        canvas.width = cssWidth * dpr;
        canvas.height = cssHeight * dpr;
        canvas.style.width = cssWidth + 'px';
        canvas.style.height = cssHeight + 'px';
        ctx.scale(dpr, dpr);

        ctx.fillStyle = color;
        ctx.textBaseline = 'top';

        let y = 0;
        groups.forEach((group, gi) => {
            group.forEach((line) => {
                ctx.font = line.bold ? boldFont : normalFont;
                ctx.fillStyle = color;
                ctx.fillText(line.text, 0, y);
                y += lineHeight;
            });
            if (gi < groups.length - 1) {
                y += groupSpacing;
            }
        });
    }

    // Debounced resize handler
    let resizeTimer;
    window.addEventListener('resize', function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(render, 150);
    });

    render();
})();
