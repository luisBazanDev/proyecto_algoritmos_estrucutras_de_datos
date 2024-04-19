import SortAlgorithms from "./SortAlgorithms";
import SearchAlgorithms from "./SearchAlgorithms";
import Controls from "./Controls";

export default function UpperBar() {
    return (
        <div class="upperbar">
            <SortAlgorithms />
            <SearchAlgorithms />
            <Controls />
        </div>
    );
}
