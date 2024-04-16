import { useContext, useEffect } from "react";
import AppContext from "../contexts/AppContext";

function TableComponent() {
  const { data } = useContext(AppContext);

  useEffect(() => {
    // Fetch data from API
  }, []);

  // data is a array of objects
  return (
    <div>
      <table>
        <thead>
          <tr>
            {data.length === 0 ? (
              <th>No data</th>
            ) : (
              // Object.keys(data[0]) returns an array of keys from the first object in the data array
              Object.keys(data[0]).map((item, index) => (
                <th key={index}>{item}</th>
              ))
            )}
          </tr>
        </thead>
        <tbody>
          {
            // data is an array of objects
            data.map((item, index) => (
              <tr key={index}>
                {
                  // Object.values(item) returns an array of values from the object
                  Object.values(item).map((value, index) => (
                    <td key={index}>{value}</td>
                  ))
                }
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default TableComponent;
