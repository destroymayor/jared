export type TrackType = {
    title: string;
    artist: string;
    songUrl: string;
    album: {
        name: string;
        image: {
            url: string;
        };
    };
};

export type MaxInt<T extends number> = number extends T ? number : _Range<T, []>;
export type _Range<T extends number, R extends unknown[]> = R['length'] extends T
    ? R[number] | T
    : _Range<T, [R['length'], ...R]>;

export type ItemTypes =
    | 'artist'
    | 'album'
    | 'playlist'
    | 'track'
    | 'show'
    | 'episode'
    | 'audiobook';
export type Market =
    | 'AD'
    | 'AE'
    | 'AG'
    | 'AL'
    | 'AM'
    | 'AO'
    | 'AR'
    | 'AT'
    | 'AU'
    | 'AZ'
    | 'BA'
    | 'BB'
    | 'BD'
    | 'BE'
    | 'BF'
    | 'BG'
    | 'BH'
    | 'BI'
    | 'BJ'
    | 'BN'
    | 'BO'
    | 'BR'
    | 'BS'
    | 'BT'
    | 'BW'
    | 'BY'
    | 'BZ'
    | 'CA'
    | 'CD'
    | 'CG'
    | 'CH'
    | 'CI'
    | 'CL'
    | 'CM'
    | 'CO'
    | 'CR'
    | 'CV'
    | 'CW'
    | 'CY'
    | 'CZ'
    | 'DE'
    | 'DJ'
    | 'DK'
    | 'DM'
    | 'DO'
    | 'DZ'
    | 'EC'
    | 'EE'
    | 'EG'
    | 'ES'
    | 'ET'
    | 'FI'
    | 'FJ'
    | 'FM'
    | 'FR'
    | 'GA'
    | 'GB'
    | 'GD'
    | 'GE'
    | 'GH'
    | 'GM'
    | 'GN'
    | 'GQ'
    | 'GR'
    | 'GT'
    | 'GW'
    | 'GY'
    | 'HK'
    | 'HN'
    | 'HR'
    | 'HT'
    | 'HU'
    | 'ID'
    | 'IE'
    | 'IL'
    | 'IN'
    | 'IQ'
    | 'IS'
    | 'IT'
    | 'JM'
    | 'JO'
    | 'JP'
    | 'KE'
    | 'KG'
    | 'KH'
    | 'KI'
    | 'KM'
    | 'KN'
    | 'KR'
    | 'KW'
    | 'KZ'
    | 'LA'
    | 'LB'
    | 'LC'
    | 'LI'
    | 'LK'
    | 'LR'
    | 'LS'
    | 'LT'
    | 'LU'
    | 'LV'
    | 'LY'
    | 'MA'
    | 'MC'
    | 'MD'
    | 'ME'
    | 'MG'
    | 'MH'
    | 'MK'
    | 'ML'
    | 'MN'
    | 'MO'
    | 'MR'
    | 'MT'
    | 'MU'
    | 'MV'
    | 'MW'
    | 'MX'
    | 'MY'
    | 'MZ'
    | 'NA'
    | 'NE'
    | 'NG'
    | 'NI'
    | 'NL'
    | 'NO'
    | 'NP'
    | 'NR'
    | 'NZ'
    | 'OM'
    | 'PA'
    | 'PE'
    | 'PG'
    | 'PH'
    | 'PK'
    | 'PL'
    | 'PS'
    | 'PT'
    | 'PW'
    | 'PY'
    | 'QA'
    | 'RO'
    | 'RS'
    | 'RW'
    | 'SA'
    | 'SB'
    | 'SC'
    | 'SE'
    | 'SG'
    | 'SI'
    | 'SK'
    | 'SL'
    | 'SM'
    | 'SN'
    | 'SR'
    | 'ST'
    | 'SV'
    | 'SZ'
    | 'TD'
    | 'TG'
    | 'TH'
    | 'TJ'
    | 'TL'
    | 'TN'
    | 'TO'
    | 'TR'
    | 'TT'
    | 'TV'
    | 'TW'
    | 'TZ'
    | 'UA'
    | 'UG'
    | 'US'
    | 'UY'
    | 'UZ'
    | 'VC'
    | 'VE'
    | 'VN'
    | 'VU'
    | 'WS'
    | 'XK'
    | 'ZA'
    | 'ZM'
    | 'ZW';
export type CountryCodeA2 =
    | 'AD'
    | 'AE'
    | 'AF'
    | 'AG'
    | 'AI'
    | 'AL'
    | 'AM'
    | 'AO'
    | 'AQ'
    | 'AR'
    | 'AS'
    | 'AT'
    | 'AU'
    | 'AW'
    | 'AX'
    | 'AZ'
    | 'BA'
    | 'BB'
    | 'BD'
    | 'BE'
    | 'BF'
    | 'BG'
    | 'BH'
    | 'BI'
    | 'BJ'
    | 'BL'
    | 'BM'
    | 'BN'
    | 'BO'
    | 'BQ'
    | 'BR'
    | 'BS'
    | 'BT'
    | 'BV'
    | 'BW'
    | 'BY'
    | 'BZ'
    | 'CA'
    | 'CC'
    | 'CD'
    | 'CF'
    | 'CG'
    | 'CH'
    | 'CI'
    | 'CK'
    | 'CL'
    | 'CM'
    | 'CN'
    | 'CO'
    | 'CR'
    | 'CU'
    | 'CV'
    | 'CW'
    | 'CX'
    | 'CY'
    | 'CZ'
    | 'DE'
    | 'DJ'
    | 'DK'
    | 'DM'
    | 'DO'
    | 'DZ'
    | 'EC'
    | 'EE'
    | 'EG'
    | 'EH'
    | 'ER'
    | 'ES'
    | 'ET'
    | 'FI'
    | 'FJ'
    | 'FK'
    | 'FM'
    | 'FO'
    | 'FR'
    | 'GA'
    | 'GB'
    | 'GD'
    | 'GE'
    | 'GF'
    | 'GG'
    | 'GH'
    | 'GI'
    | 'GL'
    | 'GM'
    | 'GN'
    | 'GP'
    | 'GQ'
    | 'GR'
    | 'GS'
    | 'GT'
    | 'GU'
    | 'GW'
    | 'GY'
    | 'HK'
    | 'HM'
    | 'HN'
    | 'HR'
    | 'HT'
    | 'HU'
    | 'ID'
    | 'IE'
    | 'IL'
    | 'IM'
    | 'IN'
    | 'IO'
    | 'IQ'
    | 'IR'
    | 'IS'
    | 'IT'
    | 'JE'
    | 'JM'
    | 'JO'
    | 'JP'
    | 'KE'
    | 'KG'
    | 'KH'
    | 'KI'
    | 'KM'
    | 'KN'
    | 'KP'
    | 'KR'
    | 'KW'
    | 'KY'
    | 'KZ'
    | 'LA'
    | 'LB'
    | 'LC'
    | 'LI'
    | 'LK'
    | 'LR'
    | 'LS'
    | 'LT'
    | 'LU'
    | 'LV'
    | 'LY'
    | 'MA'
    | 'MC'
    | 'MD'
    | 'ME'
    | 'MF'
    | 'MG'
    | 'MH'
    | 'MK'
    | 'ML'
    | 'MM'
    | 'MN'
    | 'MO'
    | 'MP'
    | 'MQ'
    | 'MR'
    | 'MS'
    | 'MT'
    | 'MU'
    | 'MV'
    | 'MW'
    | 'MX'
    | 'MY'
    | 'MZ'
    | 'NA'
    | 'NC'
    | 'NE'
    | 'NF'
    | 'NG'
    | 'NI'
    | 'NL'
    | 'NO'
    | 'NP'
    | 'NR'
    | 'NU'
    | 'NZ'
    | 'OM'
    | 'PA'
    | 'PE'
    | 'PF'
    | 'PG'
    | 'PH'
    | 'PK'
    | 'PL'
    | 'PM'
    | 'PN'
    | 'PR'
    | 'PS'
    | 'PT'
    | 'PW'
    | 'PY'
    | 'QA'
    | 'RE'
    | 'RO'
    | 'RS'
    | 'RU'
    | 'RW'
    | 'SA'
    | 'SB'
    | 'SC'
    | 'SD'
    | 'SE'
    | 'SG'
    | 'SH'
    | 'SI'
    | 'SJ'
    | 'SK'
    | 'SL'
    | 'SM'
    | 'SN'
    | 'SO'
    | 'SR'
    | 'SS'
    | 'ST'
    | 'SV'
    | 'SX'
    | 'SY'
    | 'SZ'
    | 'TC'
    | 'TD'
    | 'TF'
    | 'TG'
    | 'TH'
    | 'TJ'
    | 'TK'
    | 'TL'
    | 'TM'
    | 'TN'
    | 'TO'
    | 'TR'
    | 'TT'
    | 'TV'
    | 'TW'
    | 'TZ'
    | 'UA'
    | 'UG'
    | 'UM'
    | 'US'
    | 'UY'
    | 'UZ'
    | 'VA'
    | 'VC'
    | 'VE'
    | 'VG'
    | 'VI'
    | 'VN'
    | 'VU'
    | 'WF'
    | 'WS'
    | 'YE'
    | 'YT'
    | 'ZA'
    | 'ZM'
    | 'ZW';

export type TrackItem = Track;

export interface AccessToken {
    access_token: string;
    token_type: string;
    expires_in: number;
    refresh_token: string;
    expires?: number;
}

interface AlbumBase {
    album_type: string;
    available_markets: string[];
    copyrights: Copyright[];
    external_ids: ExternalIds;
    external_urls: ExternalUrls;
    genres: string[];
    href: string;
    id: string;
    images: Image[];
    label: string;
    name: string;
    popularity: number;
    release_date: string;
    release_date_precision: string;
    restrictions?: Restrictions;
    total_tracks: number;
    type: string;
    uri: string;
}

export interface SimplifiedAlbum extends AlbumBase {
    album_group: string;
    artists: SimplifiedArtist[];
}

export interface SavedAlbum {
    added_at: string;
    album: Album;
}

export interface Album extends AlbumBase {
    artists: Artist[];
    tracks: Page<SimplifiedTrack>;
}

export interface Albums {
    albums: Album[];
}

export interface NewReleases {
    albums: Page<SimplifiedAlbum>;
}

export interface Copyright {
    text: string;
    type: string;
}

export interface ExternalIds {
    upc: string;
}

export interface Page<TItemType> {
    href: string;
    items: TItemType[];
    limit: number;
    next: string | null;
    offset: number;
    previous: string | null;
    total: number;
}

export interface PlaylistedTrack<Item extends TrackItem = TrackItem> {
    added_at: string;
    added_by: AddedBy;
    is_local: boolean;
    primary_color: string;
    track: Item;
}

export interface AddedBy {
    external_urls: ExternalUrls;
    href: string;
    id: string;
    type: string;
    uri: string;
}

export interface LinkedFrom {
    external_urls: ExternalUrls;
    href: string;
    id: string;
    type: string;
    uri: string;
}

export interface SimplifiedTrack {
    artists: SimplifiedArtist[];
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    episode: boolean;
    explicit: boolean;
    external_urls: ExternalUrls;
    href: string;
    id: string;
    is_local: boolean;
    name: string;
    preview_url: string | null;
    track: boolean;
    track_number: number;
    type: string;
    uri: string;
    is_playable?: boolean;
    linked_from?: LinkedFrom;
    restrictions?: Restrictions;
}

export interface SavedTrack {
    added_at: string;
    track: Track;
}

export interface ExternalIds {
    isrc: string;
    ean: string;
    upc: string;
}

export interface Track extends SimplifiedTrack {
    album: SimplifiedAlbum;
    external_ids: ExternalIds;
    popularity: number;
}

export interface Tracks {
    tracks: Track[];
}

export interface SimplifiedArtist {
    external_urls: ExternalUrls;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
}

export interface Artist extends SimplifiedArtist {
    followers: Followers;
    genres: string[];
    images: Image[];
    popularity: number;
}

export interface Artists {
    artists: Artist[];
}

export interface FollowedArtists {
    artists: Page<Artist>;
}

export interface Followers {
    href: string | null;
    total: number;
}

export interface ExternalUrls {
    spotify: string;
}

export interface ArtistSearchResult {
    href: string;
    items: ArtistSearchResultItem[];
}

export interface ArtistSearchResultItem {
    id: string;
    name: string;
    popularity: number;
    genres: string[];
}

export interface TopTracksResult {
    tracks: Track[];
}

export interface Image {
    url: string;
    height: number;
    width: number;
}

export interface Markets {
    markets: string[];
}

export interface Category {
    href: string;
    icons: Icon[];
    id: string;
    name: string;
}

export interface Icon {
    height?: number;
    url: string;
    width?: number;
}

export interface Author {
    name: string;
}

export interface SimplifiedChapter {
    id: string;
    description: string;
    chapter_number: number;
    duration_ms: number;
    explicit: boolean;
    images: Image[];
    languages: string[];
    name: string;
    audio_preview_url: string;
    release_date: string;
    release_date_precision: string;
    resume_point: ResumePoint;
    html_description: string;
    available_markets: Market[];
    type: string;
    uri: string;
    external_urls: ExternalUrls;
    href: string;
    is_playable: boolean;
    restrictions?: Restrictions;
}

export interface Restrictions {
    reason: string;
}

export interface ResumePoint {
    fully_played: boolean;
    resume_position_ms: number;
}

export interface SimplifiedShow {
    available_markets: string[];
    copyrights: Copyright[];
    description: string;
    html_description: string;
    explicit: boolean;
    external_urls: ExternalUrls;
    href: string;
    id: string;
    images: Image[];
    is_externally_hosted: boolean;
    languages: string[];
    media_type: string;
    name: string;
    publisher: string;
    type: string;
    uri: string;
    total_episodes: number;
}

export interface SavedShow {
    added_at: string;
    show: SimplifiedShow;
}

export interface TrackReference {
    href: string;
    total: number;
}

export interface PlaybackState {
    device: Device;
    repeat_state: string;
    shuffle_state: boolean;
    context: Context | null;
    timestamp: number;
    progress_ms: number;
    is_playing: boolean;
    item?: TrackItem;
    currently_playing_type: string;
    actions: Actions;
}

export interface Device {
    id: string | null;
    is_active: boolean;
    is_private_session: boolean;
    is_restricted: boolean;
    name: string;
    type: string;
    volume_percent: number | null;
}

export interface Devices {
    devices: Device[];
}

export interface Context {
    type: string;
    href: string;
    external_urls: ExternalUrls;
    uri: string;
}

export interface Actions {
    interrupting_playback?: boolean;
    pausing?: boolean;
    resuming?: boolean;
    seeking?: boolean;
    skipping_next?: boolean;
    skipping_prev?: boolean;
    toggling_repeat_context?: boolean;
    toggling_shuffle?: boolean;
    toggling_repeat_track?: boolean;
    transferring_playback?: boolean;
}
