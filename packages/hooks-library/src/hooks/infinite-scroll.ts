import { useEffect } from "react";

const useInfiniteScroll = ({
  containerId,
  hasNextPage,
  isFetchingNextPage,
  fetchNextPage,
}: {
  containerId: string;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  fetchNextPage: () => void;
}) => {
  useEffect(() => {
    const scrollableDiv = document.getElementById(containerId);

    if (!scrollableDiv) return;

    const handleScroll = () => {
      if (!scrollableDiv) return;

      const { scrollHeight, clientHeight, scrollTop } = scrollableDiv;

      if (scrollTop + clientHeight + 1 >= scrollHeight) {
        if (hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      }
    };

    scrollableDiv.addEventListener("scroll", handleScroll);

    return () => {
      scrollableDiv.removeEventListener("scroll", handleScroll);
    };
  }, [containerId, fetchNextPage, hasNextPage, isFetchingNextPage]);
};

export default useInfiniteScroll;
