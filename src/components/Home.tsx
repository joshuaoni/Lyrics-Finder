import { useState } from "react";
import { Search } from "./Search"
import { Tracks } from "./Tracks"
import { TrackState } from "../types/Exported.types";
import './Components.css';


export const Home = () => {
    const [trackList, setTrackList] = useState<TrackState[]>([]);
    const [loading, setLoading] = useState(false);

    const settingTrackList = (arr: TrackState[]) => {
        setTrackList(arr);
    }

    const settingLoading = (bool: boolean) => {
        setLoading(bool);
    }

    return (
        <div className="home">
            <Search settingLoading={settingLoading} settingTrackList={settingTrackList}/>
            <Tracks loading={loading} trackList={trackList}/>
        </div>
    )
}