import React from 'react'
const ReactMarkdown = require('react-markdown/with-html')

function About() {
    const input = "PuzzleSubs Anime & Manga çeviri grubunda encoder **ve/veya** site sorumlusuyum. Ayrıca KoreanTürk Çeviri Grubunda da çevirmenlik yapmışlığım var (Yaklaşık 2 bölüm)."

    return (
        <>
            <section className="about">
                <h2>Hakkımda</h2>
                <ReactMarkdown
                    source={input}
                    escapeHtml={false}
                />
            </section>
        </>
    )
}

export default About;