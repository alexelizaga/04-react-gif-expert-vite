// Generated by https://quicktype.io

export interface GifsResponse {
    data:       Datum[];
    pagination: Pagination;
    meta:       Meta;
}

export interface Datum {
    type:                       Type;
    id:                         string;
    url:                        string;
    slug:                       string;
    bitly_gif_url:              string;
    bitly_url:                  string;
    embed_url:                  string;
    username:                   string;
    source:                     string;
    title:                      string;
    rating:                     Rating;
    content_url:                string;
    source_tld:                 SourceTLD;
    source_post_url:            string;
    is_sticker:                 number;
    import_datetime:            string;
    trending_datetime:          string;
    images:                     Images;
    user:                       User;
    analytics_response_payload: string;
    analytics:                  Analytics;
}

export interface Analytics {
    onload:  Onclick;
    onclick: Onclick;
    onsent:  Onclick;
}

export interface Onclick {
    url: string;
}

export interface Images {
    original:                 { [key: string]: string };
    downsized:                The480_WStill;
    downsized_large:          The480_WStill;
    downsized_medium:         The480_WStill;
    downsized_small:          The4_K;
    downsized_still:          The480_WStill;
    fixed_height:             { [key: string]: string };
    fixed_height_downsampled: { [key: string]: string };
    fixed_height_small:       { [key: string]: string };
    fixed_height_small_still: The480_WStill;
    fixed_height_still:       The480_WStill;
    fixed_width:              { [key: string]: string };
    fixed_width_downsampled:  { [key: string]: string };
    fixed_width_small:        { [key: string]: string };
    fixed_width_small_still:  The480_WStill;
    fixed_width_still:        The480_WStill;
    looping:                  { [key: string]: string };
    original_still:           The480_WStill;
    original_mp4:             The4_K;
    preview:                  The4_K;
    preview_gif:              The480_WStill;
    preview_webp:             The480_WStill;
    hd?:                      The4_K;
    "480w_still":             The480_WStill;
    "4k"?:                    The4_K;
}

export interface The480_WStill {
    height: string;
    width:  string;
    size:   string;
    url:    string;
}

export interface The4_K {
    height:   string;
    width:    string;
    mp4_size: string;
    mp4:      string;
}

export enum Rating {
    G = "g",
    PG13 = "pg-13",
}

export enum SourceTLD {
    ClipsTwitchTv = "clips.twitch.tv",
    Empty = "",
    TiktokCOM = "tiktok.com",
    TwitterCOM = "twitter.com",
    WWWTwitchTv = "www.twitch.tv",
    WWWYoutubeCOM = "www.youtube.com",
    YoutuBe = "youtu.be",
}

export enum Type {
    GIF = "gif",
}

export interface User {
    avatar_url:    string;
    banner_image:  string;
    banner_url:    string;
    profile_url:   string;
    username:      string;
    display_name:  string;
    description:   string;
    instagram_url: string;
    website_url:   string;
    is_verified:   boolean;
}

export interface Meta {
    status:      number;
    msg:         string;
    response_id: string;
}

export interface Pagination {
    total_count: number;
    count:       number;
    offset:      number;
}
