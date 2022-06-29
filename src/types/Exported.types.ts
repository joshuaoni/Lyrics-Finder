type TrackState = {
    track: Properties
}

type Properties = {
    artist_name: string;
    album_name: string;
    track_name: string;
    track_id: number
}

type TracksProps = {
    trackList: TrackState[],
    loading: boolean
}

type TrackProps = {
    trackDetails: Properties
}

type SearchProps = {
    settingTrackList: (arr: []) => void;
    settingLoading: (arg: boolean) => void;
}

type LyricsTrackType = {
    trackObj: {
        track_name: string,
        artist_name: string,
        album_id: number,
        explicit: number,
        primary_genres: {
            music_genre_list: [
                {
                    music_genre: {
                        music_genre_name: string
                    }
                }
            ]
        }
    }
}

type LyricsType = {
    lyricsObj: {
        lyrics_body: string
    }
}

export type {TrackState, TracksProps, TrackProps, SearchProps, LyricsTrackType, LyricsType};