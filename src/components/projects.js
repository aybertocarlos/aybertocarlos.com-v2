import React from 'react'
const ReactMarkdown = require('react-markdown')

function Projects() {
<<<<<<< HEAD
    const input = "### [puzzlesubs.com](https://puzzlesubs.com/) \n PuzzleSubs çeviri grubunun sitesi ön tarafta **ReactJS**, arka tarafta ise **NodeJS** & **ExpressJS** kullanarak tamamen baştan yazıldı.\n\nŞu anda kapalı bir proje, ancak ilerde gerekli düzenlemeleri yaptıktan sonra projeyi Github üzerinden yayınlamayı planlıyorum. \n\n### [aybertocarlos.com](https://aybertocarlos.com/) \n ㅋㅋㅋㅋㅋㅋ Burayı da **ReactJS** kullanarak hazırladım. Ancak herhangi bir yere bağlı değil, statik bir site. Büyük ihtimalle Github'a yüklemişimdir bu projeyi. Github'dan bakabilirsiniz."
=======
    const input = "### [ForFansubs (FFs)](https://forfansubs.github.io/) \n Mevcutta var olan kötü görünümlü, yavaş ve kullanışsız siteler/sistemler yerine yeni teknolojilerden yararlanan, hızlı, sade, istenileni istenildiği gibi yapan bir servis istiyordum. Bu yüzden ForFansubs'ı hem bu istekler ışığında, hem de bir çeviri grubunun istekleri ve ihtiyaçlarını düşünerek ve birebir görerek hazırladım.\n\n[Buraya tıklayarak proje sitesine ulaşabilirsiniz.](https://forfansubs.github.io/) \n\n### [aybertocarlos.github.com](https://aybertocarlos.github.io/) \n ㅋㅋㅋㅋㅋㅋ Burayı da **ReactJS** kullanarak hazırladım. Ancak herhangi bir yere bağlı değil, statik bir site. [Buraya tıklayarak site dosyalarına ulaşabilirsiniz.](https://github.com/aybertocarlos/aybertocarlos.com-v2)"
>>>>>>> gh-pages

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