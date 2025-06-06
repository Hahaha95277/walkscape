import { useEffect, useState } from 'react';

function App() {
  const [scenes, setScenes] = useState([]);

  useEffect(() => {
    fetch('/data/scenes.json')
      .then((res) => res.json())
      .then(setScenes);
  }, []);

  return (
    <div style={{ padding: '1rem', fontFamily: 'sans-serif' }}>
      <h1>Walkscape 初始場景</h1>
      {scenes.map(scene => (
        <div key={scene.id} style={{ margin: '1rem 0' }}>
          <h2>{scene.name}</h2>
          <p>{scene.description}</p>
          <img src={scene.image} alt={scene.name} style={{ width: '100%', maxWidth: 400 }} />
        </div>
      ))}
    </div>
  );
}

export default App;