import React, { useState, useEffect } from "react";
import { Form } from "usetheform";
import Text from "./../fields/Text";
import GenderSelection from "./../fields/GenderSelection";
import Reset from "./../buttons/Reset";
import Woman from "../../assets/woman_image.png";
import axios from "axios";

export default function FormOne(props) {
  const [details, setDetails] = useState({
    startdate: "",
    lengthofperiod: "",
    periodofovulation: "",
  });

  const getData = () => {
    var data = JSON.stringify({
      lmpp: details.startdate,
      cycle: details.lengthofperiod,
      periodLen: details.periodofovulation,
    });

    var config = {
      method: "post",
      url: "http://localhost:5000/api/cycle-info",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        localStorage.setItem("event", JSON.stringify(response.data.payload));
        // setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const retrievedObject = localStorage.getItem("domesticData");
  const newdata = JSON.parse(retrievedObject);

  const submitForm = () => {
    getData();
  };

  return (
    <Form {...props} style={{ width: "50%", margin: "auto" }}>
      <img src={Woman} style={{ width: "50%" }}></img>
      <div className="form-group">
        <label for="exampleInputEmail1">
          What's the start date of your last period
        </label>
        <input
          type="date"
          value={details.startdate}
          className="form-control"
          name="startdate"
          onChange={(e) => {
            setDetails({
              ...details,
              startdate: e.target.value,
            });
          }}
          aria-describedby="emailHelp"
          placeholder="Last Period"
        />
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">
          On average,how many days does your period last?
        </label>
        <input
          type="text"
          value={details.lengthofperiod}
          className="form-control mt-2"
          required

          onChange={(e) => {
            setDetails({
              ...details,
              lengthofperiod: e.target.value,
            });
          }}
          id="exampleInputPassword1"
          placeholder="Length of Period"
        />
      </div>
      <div className="form-group mt-2" >
        <label for="exampleInputPassword1">
          What is the average time beween the first days of your periods?
        </label>
        <input
          type="text"
          value={details.periodofovulation}
          className="form-control"
          required
          onChange={(e) => {
            setDetails({
              ...details,
              periodofovulation: e.target.value,
            });
          }}
          id="exampleInputPassword1"
          placeholder="Length of Cycle"
        />
      </div>

      <div classNameName="control" style={{marginTop:"2%"}}>
        <button
          type="submit"
          onClick={submitForm}
          required
          className="btn btn-primary"
          style={{marginRight:"2%"}}
        >
          Calculate
        </button>
      </div>
    </Form>
  );
}
