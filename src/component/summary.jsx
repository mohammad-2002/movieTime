import React, { useState } from "react";
import { useId } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Summary = ({ shows }) => {
  const params = useParams();
  const name = params.name;

  const output = shows.filter(function (show) {
    return show.show.name === name;
  });
  const id = useId();
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [ticketsCount, setTicketsCount] = useState(1);

  const navigate = useNavigate();
  const TicketsHandler = (e) => {
    e.preventDefault();
    // console.log(time);
    const total = ticketsCount * 100;
    localStorage.setItem(
      "show",
      JSON.stringify([name, date, time, ticketsCount, total])
    );
    navigate("/summary/tickets");
  };
  return (
    <div className="container bg-dark" key={id}>
      <h1 className="mb-5">Summary</h1>
      {output.map((show) => (
        <div>
          <div className="row mx-auto my-5" key={show.score}>
            <div className="col-lg-6 d-flex justify-content-center">
              <img src={show.show.image.medium} alt={show.show.name} />
            </div>

            <div className="col-lg-6 pe-4" style={{ color: "white" }}>
              <p>
                {show.show.genres}- <span>{show.show.rating.average}/10</span>
              </p>
              <h3>{show.show.name}</h3>

              {show.show.summary}
              <br />
              <button
                type="button"
                className="btn btn-info mt-4"
                data-bs-toggle="modal"
                data-bs-target="#bookTickets"
              >
                Book Tickets
              </button>
            </div>
          </div>
          {/* tickets booking form */}
          <div
            className="modal fade"
            id="bookTickets"
            tabIndex="-1"
            aria-labelledby="bookTicketsLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <form onSubmit={TicketsHandler}>
                  <div className="modal-header">
                    <h5 className="modal-title" id="bookTicketsLabel">
                      Book tickets of {show.show.name}
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <div className="mb-3">
                      <label htmlFor="showDate" className="form-label">
                        show Date
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="showDate"
                        placeholder="  /  /"
                        onChange={(e) => setDate(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="showTime" className="form-label">
                        show Time
                      </label>
                      <select
                        className="form-select form-select-sm"
                        aria-label=".form-select-sm example"
                        onChange={(e) => setTime(e.target.value)}
                        required
                      >
                        <option>Select show time</option>
                        <option value="4:00pm - 7:00pm">4:00pm - 7:00pm</option>
                        <option value="7:00pm - 10:00pm">
                          7:00pm - 10:00pm
                        </option>
                        <option value="10:00pm - 1:00pm">
                          10:00pm - 1:00pm
                        </option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="showTickets" className="form-label">
                        show Tickets
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="showDate"
                        placeholder="Enter no. of tickets"
                        onChange={(e) => setTicketsCount(e.target.value)}
                        required
                      />
                    </div>
                    <div className="d-flex justify-content-end">
                      Total : $ {ticketsCount * 90}
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button type="submit" className="btn btn-info">
                      Book Ticket
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Summary;
