import { useState, useEffect } from 'react';
import Cover from './Cover.jsx';
import GamePage from './GamePage.jsx';
function App() {
  const [isGamePage, setPage] = useState(true);
  const handlePageView = () => {
    setPage(prevState => !prevState);
  }
  return (
    <>
      {isGamePage
        ? <GamePage handeler={handlePageView} />
        : <Cover handeler={handlePageView} />}
    </>
  );
}

export default function main() {
  return (
    <App />
  );
}