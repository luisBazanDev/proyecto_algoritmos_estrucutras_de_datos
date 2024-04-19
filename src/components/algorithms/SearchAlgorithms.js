export default function SearchAlgorithms(props) {
    return (
        <div class="search">
            <h2>Search algorythms</h2>
            <input type="text" placeholder="Write the target to search" />
            <label for="search">Select a search algorithm</label>
            <select name="search" id="search">
                <option value="linearSearch">Linear Search</option>
                <option value="binarySearch">Binary Search</option>
                <option value="jumpSearch">Jump Search</option>
                <option value="ternarySearch">Ternary Search</option>
                <option value="fibonacciSearch">Fibonacci Search</option>
            </select>
        </div>
    );
}
