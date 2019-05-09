import React from 'react'
const ReactMarkdown = require('react-markdown')

function Projects() {
    const input = "### [puzzlesubs.com](https://puzzlesubs.com/) \n PuzzleSubs çeviri grubunun sitesi ön tarafta **ReactJS**, arka tarafta ise **NodeJS** & **ExpressJS** kullanarak tamamen baştan yazıldı.\n\nŞu anda kapalı bir proje, ancak ilerde gerekli düzenlemeleri yaptıktan sonra projeyi Github üzerinden yayınlamayı planlıyorum. \n\n### [aybertocarlos.com](https://aybertocarlos.com/) \n ㅋㅋㅋㅋㅋㅋ Burayı da **ReactJS** kullanarak hazırladım. Ancak herhangi bir yere bağlı değil, statik bir site. Büyük ihtimalle Github'a yüklemişimdir bu projeyi. Github'dan bakabilirsiniz."

    return (
        <>
            <section className="projects">
                <h2>Projelerim</h2>
                <ReactMarkdown
                    source={input}
                    renderers={{ link: props => <a href={props.href} target="_blank" rel="noopener noreferrer">{props.children}</a> }}
                />
            </section>
        </>
    )
}

export default Projects;