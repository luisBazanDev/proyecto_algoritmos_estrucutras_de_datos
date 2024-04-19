export default function SortAlgorithms(props) {
    return (
        <div class="sort">
            <h2>Sort algorythms</h2>
            <label for="sort">Select a sort algorithm</label>
            <select name="sort" id="sort">
                <option value="bubbleSort">Bubble Sort</option>
                <option value="quickSort">Quick Sort</option>
                <option value="mergeSort">Merge Sort</option>
                <option value="insertionSort">Insertion Sort</option>
                <option value="selectionSort">Selection Sort</option>
                <option value="heapSort">Heap Sort</option>
                <option value="shellSort">Shell Sort</option>
                <option value="countingSort">Counting Sort</option>
            </select>

            <input type="text" placeholder="Column" />
        </div>
    );
}
