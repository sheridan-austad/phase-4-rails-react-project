// import NavBar from "./NavBar";
import { Switch, Route } from "react-router-dom";
// import NewRecipe from "../pages/NewRecipe";
import PetList from "../pages/PetList";

function OwnerPage({ user }) {
console.log("Owner page")
console.log(user)
  return (
    <>
    <main>
      <Switch>
        <Route path="/new">
          {/* <NewRecipe user={user} /> */}
        </Route>
        <Route path="/">
          <PetList user={user}/>
        </Route>
      </Switch>
    </main>
  </>
  )
}

export default OwnerPage