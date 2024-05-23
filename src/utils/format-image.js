
const URL_MEDIA = import.meta.env.VITE_URL_MEDIA

export const fImage = (name) => {
    const avtarUrl = name ? `${URL_MEDIA}${name}` : null
    return avtarUrl
}