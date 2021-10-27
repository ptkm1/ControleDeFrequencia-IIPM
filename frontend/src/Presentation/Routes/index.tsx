import FrequenciaScreen from "Presentation/Screens/Frequencia.Screen";
import FrequenciaDoFuncionarioScreen from "Presentation/Screens/FrequenciaDoFuncionario.Screen";
import ListarFuncionarioScreen from "Presentation/Screens/ListarFuncionario.Screen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EditarFuncionarioScreen from "../Screens/EditarFuncionario.Screen";
import HomeScreen from "../Screens/Home.Screen";
import ListPostoScreen from "../Screens/ListPosto.Screen";
import PostosScreen from "../Screens/Postos.Screen";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/frequencia">
          <FrequenciaScreen />
        </Route>
        <Route path="/funcionario/editar/:id">
          <EditarFuncionarioScreen />
        </Route>
        <Route path="/funcionario/frequencia/:id">
          <FrequenciaDoFuncionarioScreen />
        </Route>
        <Route path="/postos/tipo/:tipoposto">
          <PostosScreen />
        </Route>
        <Route path="/postos/:id">
          <ListPostoScreen />
        </Route>
        <Route path="/funcionario/:id">
          <ListarFuncionarioScreen />
        </Route>
        <Route path="/">
          <HomeScreen />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
