import './App.scss';
import { YoGirl } from './YoGirl';
import { picArray } from './pics/pics'

function App() {
  return (
    <div className="App">
        <YoGirl />
        <div class="fadecycle">
            {
                picArray.map((pic, index) => {
                    return <img src={pic} alt={index} />
                })
            }
        </div>
    </div>
  );
}

export default App;
