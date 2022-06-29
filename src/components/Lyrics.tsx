import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import { LyricsTrackType, LyricsType } from "../types/Exported.types";
import Button from '@mui/material/Button';


export const Lyrics = () => {
    const [lyricsTrack, setLyricsTrack] = useState<LyricsTrackType>({} as LyricsTrackType);
    const [lyrics, setLyrics] = useState<LyricsType>({} as LyricsType);
    const [loading, setLoading] = useState(true);

    const id = useParams();

    useEffect(()=>{
        const handleRequest = async () => {
            const response = await fetch(`https://safe-reaches-52312.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${id.id}&apikey=1ad8558fb899b0890b2418751281e416`)
            const res = await response.json();
            
            let lyricsObj = res.message.body.lyrics;
            setLyrics({lyricsObj});
    
            const response2 = await fetch(`https://safe-reaches-52312.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${id.id}&apikey=1ad8558fb899b0890b2418751281e416`)
            const res2 = await response2.json();
    
            let trackObj = res2.message.body.track;
            setLyricsTrack({trackObj});
            console.log({lyricsObj:lyricsObj})
        }
        handleRequest();
        setLoading(false);
      }, [id.id]);


    if (loading) {
        return <h2>Loading...</h2>
    } else {
        return (
            <div className="lyrics">
                <>
                    <Link to="/" className="back">
                        <Button>Back</Button>
                    </Link>
                    <div className="card">
                    <h5 className="card-header">
                        {lyricsTrack.trackObj?.track_name} by{" "}
                        <span className="text-secondary">{lyricsTrack.trackObj?.artist_name}</span>
                    </h5>
                    <div className="card-body">
                        
                        {lyrics.lyricsObj?.lyrics_body ? <p className="card-text">{lyrics.lyricsObj?.lyrics_body}</p> : <p className="error">No lyrics yet</p>}
                    </div>
                    </div>

                    <ul className="list-group mt-3">
                    <li className="list-group-item">
                        <strong>Album ID</strong>: {lyricsTrack.trackObj?.album_id}
                    </li>
                    <li className="list-group-item">
                        <strong>Song Genre</strong>:{" "}
                        {lyricsTrack.trackObj?.primary_genres.music_genre_list[0]
                        ? lyricsTrack.trackObj?.primary_genres.music_genre_list[0].music_genre.music_genre_name
                        : "NO GENRE AVAILABLE"}
                    </li>
                    <li className="list-group-item">
                        <strong>Explicit Words</strong>:{" "}
                        {lyricsTrack.trackObj?.explicit === 0 ? "No" : "Yes"}
                    </li>
                    </ul>
                </>
            </div>
        )
    }
}