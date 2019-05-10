import React, { Component } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLastfm } from '@fortawesome/free-brands-svg-icons'

const link = "https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=aybertocarlos&api_key=4a9f5581a9cdf20a699f540ac52a95c9&limit=2&format=json&callback=?"

class NowPlaying extends Component {
    constructor(props) {
        super(props)
        this.state = {
            interval: "",
            titleSong: {
                title: "",
                group: ""
            },
            loading: true
        }
        this.handleInterval = this.handleInterval.bind(this)
    }

    componentDidMount() {
        axios.get(link).then(res => {
            const data = JSON.parse(res.data.slice(2, -2))
            if (data.recenttracks.track["0"]["@attr"] && data.recenttracks.track["0"]["@attr"].nowplaying === "true") {
                const music = data.recenttracks.track["0"]
                const titleSong = {
                    title: music.name, group: music.artist["#text"]
                }
                this.setState({ titleSong: titleSong, loading: false })
            }
            else this.setState({ loading: false })
        }).catch(err => {
            this.setState({ loading: false })
        })

        const intervalId = setInterval(this.handleInterval, 10000);
        this.setState({ interval: intervalId })
    }

    componentWillUnmount() {
        clearInterval(this.state.interval)
    }

    handleInterval() {
        axios.get(link).then(res => {
            const data = JSON.parse(res.data.slice(2, -2))
            if (data.recenttracks.track["0"]["@attr"] && data.recenttracks.track["0"]["@attr"].nowplaying === "true") {
                const music = data.recenttracks.track["0"]
                const titleSong = {
                    title: music.name, group: music.artist["#text"]
                }
                this.setState({ titleSong: titleSong })
            }
            else this.setState({
                titleSong: {
                    title: "",
                    group: ""
                }
            })
        }).catch(_ => this.setState({
            titleSong: {
                title: "",
                group: ""
            }
        }))
    }

    render() {
        return (
            <>
                <section className="now-playing">
                    <h4>Now playing:</h4>
                    {this.state.titleSong.title
                        ?
                        <blockquote>{this.state.titleSong.group} - {this.state.titleSong.title}</blockquote>
                        :
                        this.state.loading ?
                            <blockquote>Yükleniyor...</blockquote>
                            :
                            <blockquote>Nothing...</blockquote>
                    }
                    <h4 style={{ marginLeft: "10px" }}>Gerçek zamanlı veri (10sn'de bir) - LastFM <FontAwesomeIcon icon={faLastfm} /></h4>
                </section>
            </>
        )
    }
}

export default NowPlaying;