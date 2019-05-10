import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

function Footer() {
    return (
        <>
            <footer>
                <h2>Linkler</h2>
                <a className="footer-item" href="https://github.com/aybertocarlos" target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon icon={faGithub} />.Github</a>
                <a className="footer-item" href="https://puzzlesubs.com" target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon icon={faGlobe} />.PuzzleSubs</a>
            </footer>
        </>
    )
}

export default Footer;