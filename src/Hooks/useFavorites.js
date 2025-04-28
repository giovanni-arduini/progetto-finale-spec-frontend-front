function useFavorites() {
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);

  return {
    favorites,
    setFavorites,
    showFavorites,
    setShowFavorites,
  };
}
