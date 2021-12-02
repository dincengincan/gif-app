import { useCallback, useEffect, useState } from "react";

export interface Gif {
  src: string;
  id: string;
}

interface State {
  data: Gif[];
  error: string | null;
  pageLoading: boolean;
  scrollLoading: boolean;
}

interface MutationType {
  callAPI: (url: string, fetchOnScroll: boolean) => void;
  res: State;
}

export const useQuery = (): MutationType => {
  const [res, setRes] = useState<State>({
    data: [],
    error: null,
    pageLoading: false,
    scrollLoading: false,
  });

  const callAPI = useCallback(async (url: string, fetchOnScroll = false) => {
    setRes((prevState) => ({
      ...prevState,
      ...(fetchOnScroll ? { scrollLoading: true } : { pageLoading: true }),
    }));
    // eslint-disable-next-line react-hooks/rules-of-hooks

    try {
      const result = await fetch(url);

      const { data } = await result.json();

      const mappedData = data.map((item: any) => ({
        src: item.images.original.url,
        id: item.id,
      }));

      setRes({
        data: mappedData,
        pageLoading: false,
        error: null,
        scrollLoading: false,
      });
    } catch (error: any) {
      setRes({ data: [], scrollLoading: false, error, pageLoading: false });
    }
  }, []);
  return { callAPI, res };
};
