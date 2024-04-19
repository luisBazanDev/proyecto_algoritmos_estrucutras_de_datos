import React from "react";

function Table(props) {
    return (
        <div class="visualizer-box">
            {props.csvData != null ? (
                <table>
                    <thead>
                        <tr>
                            {props.csvData[0].map((header, index) => {
                                return <th key={index}>{header}</th>;
                            })}
                        </tr>
                    </thead>
                </table>
            ) : (
                <div class="container">
                    <div class="upload">
                        <input type="file" id="fileInput" accept=".csv" />
                        &nbsp;&nbsp;
                        <button id="upload">Upload</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Table;
