import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdSportsCricket } from "react-icons/md";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

const CoachList = () => {
  const [data, setPdata] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const dataget = async () => {
      setIsLoading(true);
      await axios
        .get("http://localhost:4000/coach")
        .then((res) => {
          setIsLoading(false);
          setPdata(res.data);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err.message);
        });
    };
    dataget();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error !== null) {
    return <div>{error}</div>;
  }

  return (
    <>
      <div className="title_div">
        <MdSportsCricket className="cri_icon" />
        <h2>
          <strong>Details</strong> In All Players
        </h2>
      </div>
      <Table bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>FullName</th>
            <th>Born</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.fullName}</td>
              <td>{item.born}</td>
              <td>{item.age}</td>

              <td>
                <Link to={`${item.id}`}>Edit</Link>
                {/* <button onClick={() => handleDelete(item.id)} type="button">
                  delete
                </button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default CoachList;
