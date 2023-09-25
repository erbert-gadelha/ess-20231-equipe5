

import Header from "./app/home/components/header/index";
import CreateTest from "./app/home/pages/CreateTest";
import ListTests from "./app/home/pages/ListTests";
import EmAlta from "./app/home/pages/EmAlta";
import maisVistos from "./app/home/pages/maisVistos";
import maisBemAvaliados from "./app/home/pages/maisBemAvaliados";
import PostPage from "./app/home/pages/postPage";
import AnaliseTendencias from "./app/home/pages/AnaliseTendencias";
import Search from "./app/home/pages/Search";
import CreatePost from "./app/home/pages/CreatePost";
import CreateComment from "./app/home/pages/CreateComment";
//import TelaInicial from "./app/home/pages/TelaInicial";
import TelaInicial2 from "./app/home/pages/TelaInicial2";

import { createBrowserRouter } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom" 


const router = createBrowserRouter([
  {
    path: "*",
    Component: TelaInicial2,
  },
  {
    path: "/create-test",
    Component: CreateTest,
  },
  {
    path: "/tests",
    Component: ListTests,
  },
  {
    path: "/emalta",
    Component: EmAlta,
  },
  {
    path: "/emalta/:query",
    Component: EmAlta,
  },
  {
    path: "/mais-vistos",
    Component: maisVistos,
  },
  {
    path: "/mais-bem-avaliados",
    Component: maisBemAvaliados,
  },
  {
    path: "/post/:postId",
    Component: PostPage,
  },
  {
    path: "/post/new_post",
    Component: CreatePost,
  },
  {
    path: "/comments/:postId/new_comment",
    Component: CreateComment,
  },
  {
    path: "/analise-de-tendencias",
    Component: AnaliseTendencias,
  },
  {
    path: "/search",
    Component: Search,
  }
]);

export default function App() {

  return (
    <Router>
      <Header>
          <Routes>
          {router.routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={route.element}
            />
          ))}
          </Routes>
      </Header>
    </Router>);
}
