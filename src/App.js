import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import FormTwo from "./components/wizard/FormTwo";
import { Form } from "usetheform";
import Woman from "../src/assets/woman_image.png";
import axios from "axios";

// import "bulma";
import "./styles.css";
import "./style.css";

function App() {
  const [details, setDetails] = useState({
    startdate: "",
    lengthofperiod: "",
    periodofovulation: "",
  });

const [event, setEvent] = useState([]);
  const getData = () => {
    var data = JSON.stringify({
      lmpp: details.startdate,
      cycle: details.lengthofperiod,
      periodLen: details.periodofovulation,
    });

    var config = {
      method: "post",
      url: "https://gentle-sea-37009.herokuapp.com/api/cycle-info",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        setEvent(response.data.payload)
        console.log(typeof(response.data.payload))
        localStorage.setItem("event", JSON.stringify(response.data.payload));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const submitForm = () => {
    setPage(2)
    getData();
  };
  const [currentPage, setPage] = useState(1);
  const nextPage = () => setPage(2);
  const prevPage = () => setPage(1);

  
  // const onSubmitWizard = () => console.log(getWizardState());


  return (
    <div className="App">
      <div
        class="container"
        style={{ marginTop: "5%", backgroundColor: "#F0F8FF" }}
      >
        <Card className="text-center">
          <Card.Body>
            <Card.Text>
              {currentPage === 1 && (
                <Form    
                 style={{ width: "50%", margin: "auto" }} nextPage={nextPage}
                 >
                  <img src={Woman} style={{ width: "50%" }} alt={'woman'}></img>
                  <div className="form-group">
                    <label for="exampleInputEmail1">
                      What's the start date of your last period?
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
                  <div className="form-group mt-2">
                    <label for="exampleInputPassword1">
                      What is the average time beween the first days of your
                      periods?
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
                  <div classNameName="control" style={{ marginTop: "2%" }}>
                    <button
                      type="submit"
                      onClick={submitForm}
                      required
                      className="btn btn-primary"
                      style={{ marginRight: "2%" }}
                    >
                      Calculate
                    </button>
                  
                   
                  </div>
                </Form>
              )}
              
              {event && currentPage === 2 && (
                <FormTwo
                  name="form2"
                  prevPage={prevPage}
                  // onSubmit={onSubmitWizard}
                  event={event}
                />
              )}
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted">
            Hormonious Flo Technical Challenge
          </Card.Footer>
        </Card>
      </div>
    </div>
  );
}

export default App;
