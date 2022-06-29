import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { LyricsTrackType, LyricsType } from "../types/Exported.types";
import Button from '@mui/material/Button';
import BackIcon from '@mui/icons-material/ArrowBack';
import Typography from '@mui/material/Typography';


export const Lyrics = () => {
    const [lyricsTrack, setLyricsTrack] = useState<LyricsTrackType>({} as LyricsTrackType);
    const [lyrics, setLyrics] = useState<LyricsType>({} as LyricsType);
    const [loading, setLoading] = useState(true);

    const id = useParams();

    useEffect(()=>{
        const handleRequest = async () => {
            const response = await fetch(`https://safe-reaches-52312.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${id.id}&apikey=58b1745e8f247488225e2737052da3a4`);
            const res = await response.json();
            
            let lyricsObj = res.message.body.lyrics;
            setLyrics({lyricsObj});
    
            const response2 = await fetch(`https://safe-reaches-52312.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${id.id}&apikey=58b1745e8f247488225e2737052da3a4`);
            const res2 = await response2.json();
    
            let trackObj = res2.message.body.track;
            setLyricsTrack({trackObj});
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
                        <Button><BackIcon/>Back</Button>
                    </Link>
                    <div className="card">
                        <Typography className="card-header" variant="h5" gutterBottom component="div">
                            {lyricsTrack.trackObj?.track_name} {lyricsTrack.trackObj?.track_name ? 'by' : null}{" "}
                            <span>
                                {lyricsTrack.trackObj?.artist_name}
                            </span>
                        </Typography>
                        <div className="card-body">
                            { lyrics.lyricsObj?.lyrics_body ?
                            <Typography variant="subtitle1" gutterBottom component="div">
                                {lyrics.lyricsObj?.lyrics_body}
                            </Typography> : 
                            <Typography className="error" variant="subtitle1" gutterBottom component="div">
                                No lyrics yet
                            </Typography> }
                        </div>
                    </div>

                    <ul>
                        <li>
                            <strong>Album ID</strong>: {lyricsTrack.trackObj?.album_id}
                        </li>
                        <li>
                            <strong>Song Genre</strong>:{" "}
                            {lyricsTrack.trackObj?.primary_genres.music_genre_list[0]
                            ? lyricsTrack.trackObj?.primary_genres.music_genre_list[0].music_genre.music_genre_name
                            : "NO GENRE AVAILABLE"}
                        </li>
                        <li>
                            <strong>Explicit Words</strong>:{" "}
                            {lyricsTrack.trackObj?.explicit === 0 ? "No" : "Yes"}
                        </li>
                    </ul>
                </>
            </div>
        )
    }
}