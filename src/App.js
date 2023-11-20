import "./App.css";
import AccountMenu from "./Components/AccountMenu";
import ColorButtons from "./Components/ColorButtons";
import CustomizedAccordions from "./Components/CustomizedAccordions";
import ResponsiveAppBar from "./Components/ResponsiveAppBar";
import SplitButton from "./Components/SplitButton";
import StandardImageList from "./Components/StandardImageList";

function App() {
    return <div className="App">
        <ResponsiveAppBar />
        <CustomizedAccordions />
        <StandardImageList />
        <ColorButtons />
        <SplitButton />
    </div>;
}

export default App;
