import React, { useContext } from "react";
import { Data } from "./App";

export default function Records() {
  const DataUpdate = useContext(Data);
  return (
    <div>
      <h1>JSON Data using Axios and useEffect in ReactJS </h1>
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>STATE</th>
            <th>CONFIRMED</th>
            <th>RECOVERED</th>
            <th className="text-danger">DEATHS</th>
            <th>ACTIVE</th>
            <th>UPDATED</th>
          </tr>
        </thead>
        <tbody>
          {DataUpdate.map((Elem, index) => {
            return (
              <>
                <tr>
                  <th className="bg-primary">{Elem.state}</th>
                  <td>{Elem.confirmed}</td>
                  <td>{Elem.recovered}</td>
                  <td className="bg-danger">{Elem.deaths}</td>
                  <td>{Elem.active}</td>
                  <td>{Elem.lastupdatedtime}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
