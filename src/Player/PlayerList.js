import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdSportsCricket } from "react-icons/md";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

const PlayerList = () => {
  const limit = 5;
  const [data, setPdata] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDelete = (id) => {
    if (window.confirm("are you sure?")) {
      axios.delete(`http://localhost:4000/player/${id}`);
      window.location.reload();
    }
  };

  useEffect(() => {
    const dataaxios = async () => {
      setIsLoading(true);
      await axios
        .get(`http://localhost:4000/player?_page=${page}&_limit=${limit}`)
        .then((res) => {
          setIsLoading(false);
          setPdata(res.data);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err.message);
        });
    };
    dataaxios();
  }, [page, limit]);

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
            <th>Batting Style</th>
            <th>Bowling Style</th>
            <th>Playing Role</th>
            <th>Team</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.fullName}</td>
              <td>{item.born}</td>
              <td>{item.age}</td>
              <td>{item.battingStyle}</td>
              <td>{item.bowlingStyle}</td>
              <td>{item.playingrole}</td>
              <td>{item.team}</td>
              <td>{item.description}</td>
              <td>
                <Link to={`${item.id}`}>Edit</Link>
                <button onClick={() => handleDelete(item.id)} type="button">
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <button type="buttton" className="page-link">
              Previous
            </button>
          </li>
          <li className="page-item">
            <button
              onClick={() => setPage(1)}
              type="button"
              className="page-link"
            >
              1
            </button>
          </li>
          <li className="page-item">
            <button
              onClick={() => setPage(2)}
              type="button"
              className="page-link"
            >
              2
            </button>
          </li>
          <li className="page-item">
            <button
              onClick={() => setPage(3)}
              type="button"
              className="page-link"
            >
              3
            </button>
          </li>
          <li className="page-item">
            <button type="button" className="page-link">
              Next
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default PlayerList;
