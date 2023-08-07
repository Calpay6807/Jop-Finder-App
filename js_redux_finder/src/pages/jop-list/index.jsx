import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setJops } from "../../redux/jopsSlice";
import Filter from "./components/filter";

const JopList = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  useEffect(() => {
    axios
      .get("http://localhost:3030/jops", { timeout: 5000 })
      .then((res) => dispatch(setJops(res.data)))
      .catch((err) => {
        if ((err.code = "ECONNABORTED")) {
          alert("Bağlanti Zaman Aşimina Uğradi");
        }
      });
  }, []);
  return (
    <>
      <Filter />
      <h3 className="jop-count">
        Bulunan ({state.jops.length}) iş arasından ({state.filteredJops.length})
        tanesini görüntülüyorsunuz
      </h3>
      <section className="list-section">
        {!state.initialized ? (
          <p>Loading..</p>
        ) : (
          state.filteredJops.map((jop) => (
            <div className="jop-card" key={jop.id}>
              <div className="head">
                <div className="letter">
                  <p>{jop.company[0]}</p>
                </div>
                <div className="info">
                  <p>{jop.position}</p>
                  <p>{jop.company}</p>
                </div>
              </div>
              <div className="body">
                <div className="field">
                  <img src="/images/map.png" alt="" />
                  <p>{jop.location}</p>
                </div>

                <div className="field">
                  <img src="/images/calendar.png" alt="" />
                  <p>{jop.date}</p>
                </div>

                <div className="field">
                  <img src="/images/bag.png" alt="" />
                  <p>{jop.type}</p>
                </div>

                <div className="status">
                  <span className={jop.status}>{jop.status}</span>
                </div>
              </div>
            </div>
          ))
        )}
      </section>
    </>
  );
};

export default JopList;
