import PropTypes from "prop-types";

export default function ArtCards({ artworks = [] }) {
  console.log("ARTCARDS", artworks);
  return (
    <ul className="art-cards">
      {artworks.map((artwork) => (
        // console.log("ARTWORK", artwork.artist);
        <li className="art-card" key={artwork.id}>
          <span>{artwork.artist}</span>
          <img src={artwork.post_thumbnail[0]} />
        </li>
      ))}
    </ul>
  );
}

ArtCards.propTypes = {
  artworks: PropTypes.array,
};
