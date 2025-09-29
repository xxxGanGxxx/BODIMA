import { createContext, useCallback, useContext, useMemo, useState } from "react";

const SavedListingsContext = createContext(undefined);

function SavedListingsProvider({ children }) {
  const [savedListings, setSavedListings] = useState([]);

  const saveListing = useCallback((listing) => {
    setSavedListings((prev) => {
      if (prev.some((item) => item.id === listing.id)) {
        return prev;
      }
      return [...prev, listing];
    });
  }, []);

  const removeListing = useCallback((listingId) => {
    setSavedListings((prev) => prev.filter((item) => item.id !== listingId));
  }, []);

  const toggleSaved = useCallback((listing) => {
    setSavedListings((prev) => {
      const exists = prev.some((item) => item.id === listing.id);
      if (exists) {
        return prev.filter((item) => item.id !== listing.id);
      }
      return [...prev, listing];
    });
  }, []);

  const isSaved = useCallback(
    (listingId) => savedListings.some((item) => item.id === listingId),
    [savedListings]
  );

  const value = useMemo(
    () => ({ savedListings, saveListing, removeListing, toggleSaved, isSaved }),
    [savedListings, saveListing, removeListing, toggleSaved, isSaved]
  );

  return <SavedListingsContext.Provider value={value}>{children}</SavedListingsContext.Provider>;
}

function useSavedListings() {
  const context = useContext(SavedListingsContext);
  if (context === undefined) {
    throw new Error("useSavedListings must be used within a SavedListingsProvider");
  }
  return context;
}

export { SavedListingsProvider, useSavedListings };
