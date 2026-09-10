export function googleDriveEmbed(url?:string){if(!url)return null;const match=url.match(/\/d\/([^/]+)/)||url.match(/[?&]id=([^&]+)/);return match?`https://drive.google.com/file/d/${match[1]}/preview`:null}
export function isGoogleDriveUrl(url?:string){return !!url&&/^https:\/\/(drive|docs)\.google\.com\//.test(url)}
