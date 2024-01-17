import './App.css';
import ImagesList from './components/ImagesList';
import UploadForm from './components/UploadForm';

function App() {
  return (
    <div className="App">
      <h1 className="title">your picture</h1>
      <UploadForm />
      <ImagesList />
    </div>
  );
}

export default App;
