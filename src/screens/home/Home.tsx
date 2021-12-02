import { FC, useEffect, useState } from "react";

import GifList from "../../components/gif-list/GifList";
import SearchInput from "../../components/SearchInput";
import Select from "../../components/Select";

import { useDebounce } from "../../hooks/useDebounce";
import { Gif, useQuery } from "../../hooks/useQuery";
import useScroll from "../../hooks/useScroll";

import { getUrl, ITEM_LIMIT } from "../../utils/textUtils";
import { Body, Header } from "./Home.styles";

const Home: FC = () => {
  const [selectValue, setSelectValue] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const [page, setPage] = useState(0);
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [favGifs, setFavGifs] = useState<Gif[]>(() => {
    const initialState = localStorage.getItem("favs");
    return initialState ? JSON.parse(initialState) : [];
  });

  const isScrolledBottom = useScroll();
  const debouncedSearchValue = useDebounce(searchValue, 500);
  const {
    callAPI: fetchGifs,
    res: { data: gifResponse, pageLoading, scrollLoading, error },
  } = useQuery();

  const startingItem = page * ITEM_LIMIT;

  useEffect(() => {
    setGifs((prevState) => [...prevState, ...gifResponse]);
  }, [gifResponse]);

  useEffect(() => {
    if (isScrolledBottom) {
      fetchGifs(getUrl(searchValue || selectValue, startingItem), true);
      setPage((prevState) => prevState + 1);
    }
  }, [isScrolledBottom, fetchGifs]);

  useEffect(() => {
    if (debouncedSearchValue.length > 3) {
      fetchGifs(getUrl(debouncedSearchValue, startingItem), false);
      setPage((prevState) => prevState + 1);
    }
  }, [debouncedSearchValue, fetchGifs]);

  const handleSearchChange = (receivedSearchValue: string) => {
    setPage(0);
    setGifs([]);
    setSearchValue(receivedSearchValue);
    setSelectValue("");
  };

  const handleSelectChange = (selectValue: string) => {
    setPage(0);
    setGifs([]);
    setSelectValue(selectValue);
    setSearchValue("");

    fetchGifs(getUrl(selectValue, startingItem), false);
    setPage((prevState) => prevState + 1);
  };

  const handleFavClick = (selectedGif: Gif, toBeRemove: boolean) => {
    let newFavGifs: Gif[] = [];

    if (toBeRemove) {
      newFavGifs = favGifs.filter((gif) => gif.id !== selectedGif.id);
    } else {
      newFavGifs = !!favGifs.length ? [...favGifs, selectedGif] : [selectedGif];
    }

    localStorage.setItem("favs", JSON.stringify(newFavGifs));

    setFavGifs(newFavGifs);
  };

  if (pageLoading) return <h2>Loading</h2>;
  if (error) return <div>Error</div>;
  return (
    <>
      <Header>
        <SearchInput onChange={handleSearchChange} value={searchValue} />
        <Select onChange={handleSelectChange} value={selectValue} />
      </Header>
      <Body>
        <GifList onClick={handleFavClick} gifs={gifs} />
      </Body>
      {scrollLoading && <h2>Scroll loading</h2>}
    </>
  );
};

export default Home;
