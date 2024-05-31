import { MyComponent } from "./components/MyComponent";
import { MyProvider } from "./contexts/myContext";

export function App() {
   return (
      <MyProvider>
         <MyComponent />
      </MyProvider>
   )
}
