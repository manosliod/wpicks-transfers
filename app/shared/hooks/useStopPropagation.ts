import React, { useCallback } from 'react';

export const useStopPropagation = (fn: (e: React.SyntheticEvent) => void) => {
  return useCallback(
    (e: React.SyntheticEvent) => {
      e.stopPropagation();
      fn(e);
    },
    [fn]
  );
};
