import { searchByArtist } from './discogs'

test('searchByArtist returns results', () => {
  searchByArtist('3182820')
    .then((response) => {
      expect(response.data.results).toBeDefined()
    })
});
