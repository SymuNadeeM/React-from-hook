import "./App.css";
import { Routes, Route } from "react-router-dom";
import LayOutPage from "./PageLayout/LayOutPage";
import PlayerList from "./Player/PlayerList";
import PlayersAdd from "./Player/PlayersAdd";
import PlayerEdite from "./Player/PlayerEdite";
import CoachList from "./Coach/CoachList";
import CoachAdd from "./Coach/CoachAdd";
import CoachEdite from "./Coach/CoachEdite";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayOutPage />}>
          <Route path="players">
            <Route index element={<PlayerList />} />
            <Route path="create" element={<PlayersAdd />} />
            <Route path=":id" element={<PlayerEdite />} />
          </Route>
          <Route path="coach">
            <Route index element={<CoachList />} />
            <Route path="added" element={<CoachAdd />} />
            <Route path=":keya" element={<CoachEdite />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
