import React from 'react';
import './App.css';
import ContentList from './components/ContentList';


const App: React.FC = () => {
  const urlSearchString = window.location.pathname;

  return (
    <div>
      <ContentList pathName={urlSearchString} />
    </div>
  );
}

export default App;
