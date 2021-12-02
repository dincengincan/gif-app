import { FC } from "react";
import { Gif } from "../../hooks/useQuery";
import GifItem from "./Gif";
import { GifListContainer } from "./GifList.styles";

interface Props {
  gifs: Gif[];
  onClick: (selectedGif: Gif, toBeRemove: boolean) => void;
}

const GifList: FC<Props> = ({ gifs, onClick }) => {
  return (
    <GifListContainer>
      {gifs?.map((gif: Gif) => {
        const state = localStorage.getItem("favs");
        const parsedState = state ? JSON.parse(state) : [];

        const isFav = parsedState?.some((favGif: Gif) => favGif.id === gif.id);

        return (
          <GifItem isFav={isFav} key={gif.id} onClick={onClick} gif={gif} />
        );
      })}
    </GifListContainer>
  );
};

export default GifList;
