import { Route, Routes } from "react-router-dom";
import { Categories } from "./recipes/Categories";
import Recipe from "./recipes/Recipe";
import Recipes from "./recipes/RecipeList";
import RecipeForm from "./recipes/RecipeForm";
import Login from "./security/Login";
import Layout from "./Layout";
import Home from "./Home";
import "./App.css";
import Contact from "./Contact";
import RecipesLayout from "./recipes/RecipesLayout";
import Logout from "./security/Logout";

export default function App() {
  //const auth = useAuth();
  return (
    <Layout>
      <Routes>
        <Route path="*" element={<h2>Not Found</h2>} />
        <Route path="/" element={<Home />} />
        <Route path="/categories/" element={<Categories />} />
        <Route path="/recipes" element={<RecipesLayout />}>
          <Route path=":id" element={<Recipe />} />
          <Route path="test" element={<h1>Test</h1>} />
        </Route>
        <Route path="/add" element={<RecipeForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}
