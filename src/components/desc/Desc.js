import React from "react";
import "./Descr.css";
import SortOutlinedIcon from "@mui/icons-material/SortOutlined";

const Desc = () => {
  const parag = [
    "69K views  4 months ago",
    " #gavi #pedri #lewandowski",
    "#barcelona #xavi #lewandowski #pedri #gavi #goals",
    "barcelona vs man united barcelona vs man united streaming barcelona vs man united tv usa barcelona vs man united prediction barcelona ",
    "Show more",
  ];
  return (
    <>
      <section className="desc-container">
        {parag.map((el) =>
          el.startsWith("#") ? (
            <span
              style={{ color: "#065fd4", display: "flex", fontWeight: 400 }}
            >
              {el}
            </span>
          ) : el.startsWith(" ") ? (
            <span style={{ color: "#606060", fontWeight: 500 }}>{el}</span>
          ) : (
            <span>{el}</span>
          )
        )}
      </section>
      <div className="num-comm">
        <p className="comm">20 Comments</p>
        <p className="sort">
          <SortOutlinedIcon />
          <span>Sort by</span>
        </p>
      </div>
    </>
  );
};

export default Desc;
