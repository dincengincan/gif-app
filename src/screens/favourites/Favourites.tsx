import { FC, useEffect, useState } from "react";

import GifList from "../../components/gif-list/GifList";
import { Gif } from "../../hooks/useQuery";

const Favourites: FC = () => {
  const [favGifs, setFavGifs] = useState(() => {
    const initialState = localStorage.getItem("favs");
    return initialState ? JSON.parse(initialState) : [];
  });

  const handleRemove = (selectedGif: Gif) => {
    const newGifs = favGifs.filter((gif: Gif) => gif.id !== selectedGif.id);

    localStorage.setItem("favs", JSON.stringify(newGifs));
    setFavGifs(newGifs);
  };

  return (
    <div>
      <GifList gifs={favGifs} onClick={handleRemove} />
    </div>
  );
};

export default Favourites;
