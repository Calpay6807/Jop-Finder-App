import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { statusOptions, type } from "../../constants";
import { v4 } from "uuid";
import { addJop } from "../../redux/jopsSlice";
import { useDispatch } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";

const AddJops = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    /* jsenin verdiği FormData classı ile değerlere ulaşıyoruz */
    const formData = new FormData(e.target);
    /* veriyi objeye çevirme */
    const data = Object.fromEntries(formData.entries());
    /* uuid kütüphanesi kullanarak benzersiz kütüphane oluşturma */
    data.id = v4();
    /* Date Oluşturma */
    data.date = new Date().toLocaleDateString();

    /* 1.adim api gğncelleme yapmak için axios ile postluycaz*/
    axios.post(" http://localhost:3030/jops", data).then(() => {
      //store güncelleme
      dispatch(addJop(data));
      //anasayfaya yönlendirme
      navigate("/");

      //bildirim

      toast.success("🦄 Dostum Sen Bir Harikasin Hey Men..!", {
        position: "top-right",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    });

    // dispatch(addJop(data));
  };
  return (
    <div className="container">
      <h2>Add Jops</h2>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label>Pozisyon</label>
          <input name="position" type="text" />
        </div>
        <div className="field">
          <label>Şİrket</label>
          <input name="company" type="text" />
        </div>
        <div className="field">
          <label>Locaksyon</label>
          <input name="location" type="text" />
        </div>
        <div className="field">
          <label>Durum</label>
          <select name="state">
            {statusOptions.map((states, i) => (
              <option key={i}>{states.label}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label>Tür</label>
          <select name="type">
            {type.map((states, i) => (
              <option key={i}>{states.label}</option>
            ))}
          </select>
        </div>
        <button>Ekle</button>
      </form>
    </div>
  );
};

export default AddJops;
