import client from './client';

const movieListFields = `
  name,
  "actor": actor->actor,
  "imageUrl": bilde.asset->url
`;

export const getMovies = async () => {
  const data = await client.fetch(`*[_type == "movie"]{${movieListFields}}`);
  return data;
};

