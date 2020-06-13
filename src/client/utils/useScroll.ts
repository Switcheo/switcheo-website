import { useEffect, useState } from "react";

export interface ScrollListenerOptions {
  defaultState?: boolean;
  rangeStart?: number;
  rangeEnd?: number;
  onChange?: (offsetY: number) => {};
  granularity?: number;
  debounce?: number;
}

export default function useScroll({ defaultState = false, rangeStart, rangeEnd, onChange, debounce = 100 }: ScrollListenerOptions) {
  const [inRange, setInRange] = useState(defaultState);
  const [debounceTimeoutId, setDebounceTimeoutId] = useState<NodeJS.Timeout>();
  const [lastTimestamp, setLastTimestamp] = useState(0);

  const processScrollChange = () => {
    const timestamp = new Date().getTime();
    setLastTimestamp(timestamp);

    const bodyOffset = document.body.getBoundingClientRect();
    const offsetY = -bodyOffset.top;

    if (
      (rangeStart !== undefined && rangeStart > offsetY)
      || (rangeEnd !== undefined && rangeEnd < offsetY)
    ) {
      setInRange(false);
      return;
    }

    setInRange(true);
    if (typeof onChange === "function") {
      onChange(offsetY);
    }
  };

  const onScrollChange = () => {
    const timestamp = new Date().getTime();
    if (lastTimestamp + debounce > timestamp) {
      if (debounceTimeoutId)
        clearTimeout(debounceTimeoutId);

      const timeoutId = setTimeout(processScrollChange, lastTimestamp + debounce - timestamp);
      setDebounceTimeoutId(timeoutId);
    } else {
      processScrollChange();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScrollChange);
    return () => window.removeEventListener("scroll", onScrollChange);
  });

  return [inRange];
}