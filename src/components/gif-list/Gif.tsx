import { FC } from "react";
import { Gif } from "../../hooks/useQuery";
import { FavButton, GifContainer } from "./GifList.styles";

interface Props {
  gif: Gif;
  onClick: (selectedGif: Gif, toBeRemove: boolean) => void;
  isFav: boolean;
}

const GifList: FC<Props> = ({ gif, onClick, isFav }) => {
  const handleClick = (selectedGif: Gif) => {
    if (isFav) {
      onClick(selectedGif, true);
    } else {
      onClick(selectedGif, false);
    }
  };

  return (
    <GifContainer>
      <img key={gif.id} alt="gif" src={gif?.src} />
      <FavButton onClick={() => handleClick(gif)} fav={isFav}>
        {isFav ? "👎" : "👍"}
      </FavButton>
    </GifContainer>
  );
};

export default GifList;
