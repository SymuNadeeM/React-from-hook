import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { MdSportsCricket } from "react-icons/md";
import * as yup from "yup";
import "../Player/style.css";
import axios from "axios";

const schema = yup.object().shape({
  fullName: yup.string().required("Full Name should be required please"),
  born: yup.string().required(),
  age: yup.number().positive().integer().required(),
});

const PlayersAdd = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (data) => {
    axios
      .post("http://localhost:4000/coach", data)
      .then((res) => {
        alert("player create successfully!");
        setValue("fullName", "");
        setValue("born", "");
        setValue("age", "");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="title_div">
        <MdSportsCricket className="cri_icon" />
        <h2>
          <strong>Add</strong> Players
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
          </div>
          <div className="submit_button">
            <input type="submit" id="submit" />
          </div>
        </div>
      </form>
    </>
  );
};

export default PlayersAdd;

// import React from "react";

// const CoachAdd = () => {
//   return (
//     <div>
//       <h2>Coach Add</h2>
//     </div>
//   );
// };

// export default CoachAdd;
