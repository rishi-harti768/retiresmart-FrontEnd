import React from "react";
import "./page.css";
import Default from "@/components/default/Default";
import ViewAnalysis from "./ViewAnalysis";
import NewAnalysis from "./NewAnalysis";
import axios from "axios";

const backend = process.env.BACKEND_URL;
interface User {
  id: number;
  name: string;
  age: number;
}

const Page = async () => {
  const response = await axios.post(`${backend}/ai/history`);
  const tableData = response.data;
  // console.log(backend);

  return (
    <>
      <Default current="Dashboard">
        <div className="container">
          <div className="dashboard">
            <h1 className="dashboard-title">Retirement Analysis Dashboard</h1>
            <table className="user-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Analysis</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((user: User) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td>
                      <ViewAnalysis id={user.id} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <NewAnalysis />
          </div>
        </div>
      </Default>
    </>
  );
};

export default Page;
