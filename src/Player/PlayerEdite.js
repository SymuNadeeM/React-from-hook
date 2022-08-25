import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { MdSportsCricket } from "react-icons/md";
import * as yup from "yup";
import "./style.css";
import axios from "axios";

const schema = yup.object().shape({
  fullName: yup.string().required("Full Name should be required please"),
  born: yup.string().required(),
  age: yup.number().positive().integer().required(),
  battingStyle: yup.string().required(),
  bowlingStyle: yup.string().required(),
  playingrole: yup.string().required(),
  team: yup.string(),
  description: yup.string().required(),
});

const PlayerEdite = () => {
  const { id } = useParams();
  let navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    axios
      .get(`http://localhost:4000/player/${id}`)
      .then((res) => {
        setIsLoading(false);
        setValue("fullName", res.data.fullName);
        setValue("born", res.data.born);
        setValue("age", res.data.age);
        setValue("battingStyle", res.data.battingStyle);
        setValue("bowlingStyle", res.data.bowlingStyle);
        setValue("playingrole", res.data.playingrole);
        setValue("team", res.data.team);
        setValue("description", res.data.description);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  }, [id, setValue]);

  const submitForm = (data) => {
    axios
      .put(`http://localhost:4000/player/${id}`, data)
      .then((res) => {
        navigate("/players");
        alert("player updated successfully!");
      })
      .catch((err) => console.log(err));
    console.log(data);
  };

  return (
    <>
      <div className="title_div">
        <MdSportsCricket className="cri_icon" />
        <h2>
          <strong>Add</strong> Players {id}
        </h2>
      </div>

      <form onSubmit={handleSubmit(submitForm)}>
        <div className="row">
          <div className="col-lg-6">
            <div className="childen_div">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                name="fullName"
                {...register("fullName")}
                placeholder="First Name..."
              />
              <p> {errors.fullName?.message} </p>
            </div>

            <div className="childen_div">
              <label htmlFor="born">Born</label>
              <input
                type="text"
                name="born"
                {...register("born")}
                placeholder="Birthaday"
              />
              <p> {errors.born?.message} </p>
            </div>

            <div className="childen_div">
              <label htmlFor="age">Age</label>
              <input
                type="text"
                name="age"
                {...register("age")}
                placeholder="Age"
              />
              <p> {errors.age?.message} </p>
            </div>

            <div className="childen_div">
              <label htmlFor="battingStyle">Batting Style</label>
              <input
                type="text"
                name="battingStyle"
                {...register("battingStyle")}
                placeholder="Batting Style"
              />
              <p> {errors.battingStyle?.message} </p>
            </div>
            <div className="childen_div">
              <label htmlFor="Bowli">Bowling Style</label>
              <input
                type="text"
                name="bowlingStyle"
                {...register("bowlingStyle")}
                placeholder="Bowling Style"
              />
              <p> {errors.bowlingStyle?.message} </p>
            </div>
          </div>
          <div className="col-6">
            <div className="childen_div">
              <label htmlFor="playingrole">Playing Role</label>
              <input
                type="text"
                name="playingrole"
                {...register("playingrole")}
                placeholder=" Playing Role "
              />
              <p> {errors.playingrole?.message} </p>
            </div>

            <div className="childen_div">
              <label htmlFor="team">Team</label>
              <input
                type="text"
                name="team"
                {...register("team")}
                placeholder="Team"
              />
              <p> {errors.team?.message} </p>
            </div>

            <div className="childen_div descrip">
              <label htmlFor="Des">Description</label>
              <textarea
                name="description"
                {...register("description")}
                placeholder="description"
                cols="30"
                rows="7"
              />

              <p> {errors.description?.message} </p>
            </div>
          </div>
          <div className="submit_button">
            <input type="submit" id="submit" />
          </div>
        </div>
      </form>
    </>
  );
};

export default PlayerEdite;
