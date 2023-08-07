import React from "react";
import { sortOptions, type, statusOptions } from "../../../../constants";
import {
  filterBySearc,
  filteredByStatus,
  filteredByType,
} from "/src/redux/jopsSlice.js";
import { useDispatch } from "react-redux";
const Filter = () => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    e.preventDefault();
    dispatch(filterBySearc(e.target.value));
  };

  const handleSearch = (e) => {
    dispatch(filteredByStatus(e.target.value));
  };

  const handleType = (e) => {
    dispatch(filteredByType(e.target.value));
  };
  return (
    <section className="filter-sec">
      <h2>Filtreleme Formu</h2>
      <form>
        <div className="field">
          <label>Arama</label>
          <input
            onChange={handleChange}
            placeholder="Lütfen Doldurunuz.."
            type="text"
          />
        </div>
        <div className="field">
          <label>Durum</label>
          <select onChange={handleSearch}>
            <option hidden>Seçiniz</option>
            {statusOptions.map((op, i) => (
              <option key={i}>{op.label}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label>Tip</label>

          <select onChange={handleType}>
            <option hidden>Seçiniz</option>

            {type.map((op, i) => (
              <option key={i}>{op.label}</option>
            ))}
          </select>
        </div>{" "}
        <div className="field">
          <label>Sırala</label>

          <select>
            {sortOptions.map((op, i) => (
              <option key={i}>{op}</option>
            ))}
          </select>
        </div>
        <button>Temizle</button>
      </form>
    </section>
  );
};

export default Filter;
