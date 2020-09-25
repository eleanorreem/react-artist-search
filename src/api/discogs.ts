import axios from 'axios';

const authSecretAndKey = {
  key: process.env.REACT_APP_CONSUMER_KEY,
  secret: process.env.REACT_APP_CONSUMER_SECRET
}
export const searchByArtist = (query: string) => 
  axios.get(`https://api.discogs.com/database/search`, {
    params: {
      q: query,
      type: 'artist',
      ...authSecretAndKey
    } 
  })

export const getArtistReleases = (artistId: number, sortCriteria: string = "year") => 
  axios.get(`https://api.discogs.com/artists/${artistId}/releases`, {
    params: {
      sort: sortCriteria,
      ...authSecretAndKey
    } 
  })

  export const getArtist = (artistId: number) => 
  axios.get(`https://api.discogs.com/artists/${artistId}`, {
    params: authSecretAndKey
  })

  