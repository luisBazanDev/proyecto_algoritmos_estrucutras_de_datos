import Table from "./components/content/Table";
import UpperBar from "./components/algorithms/UpperBar";

function App() {
    return (
        <div className="App">
            <header>
                <h1>Sorter and Searcher v1.0</h1>
            </header>
            <main>
                <UpperBar />
                <Table />
            </main>
            <footer></footer>
        </div>
    );
}

export default App;
