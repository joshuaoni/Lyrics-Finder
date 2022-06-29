import { Link } from "react-router-dom";
import { TrackProps } from "../types/Exported.types";


export const Track = ({trackDetails}: TrackProps) => {
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <h5>{trackDetails.artist_name}</h5>
                    <p className="card-text">
                        <span>Track: {trackDetails.track_name}</span>
                        <br/>
                        <span>Album: {trackDetails.album_name}</span>
                    </p>
                    <Link to={`lyrics/track/${trackDetails.track_id}`}>
                        Lyrics
                    </Link>
                </div>
            </div>
        </div>
    )
}