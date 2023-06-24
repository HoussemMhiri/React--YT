import React from "react";
import "./Aside.css";

const Aside = () => {
  const asideinfo = [
    {
      imgUrl:
        "https://i.ytimg.com/vi/FeXbX7nPQc4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCzoonrMxu5qt_6a3GK_jGQbO3teA",
      title: "CHIDORI 【千鳥】☯ Japanese Trap & Oriental Beats ☯ Trap &...",
      chanName: "Mr_MoMo Music",
      viewsAdate: "360K views ● 2 years ago",
    },
    {
      imgUrl:
        "https://i.ytimg.com/vi/FeXbX7nPQc4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCzoonrMxu5qt_6a3GK_jGQbO3teA",
      title: "CHIDORI 【千鳥】☯ Japanese Trap & Oriental Beats ☯ Trap &...",
      chanName: "Mr_MoMo Music",
      viewsAdate: "360K views ● 2 years ago",
    },
    {
      imgUrl:
        "https://i.ytimg.com/vi/FeXbX7nPQc4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCzoonrMxu5qt_6a3GK_jGQbO3teA",
      title: "CHIDORI 【千鳥】☯ Japanese Trap & Oriental Beats ☯ Trap &...",
      chanName: "Mr_MoMo Music",
      viewsAdate: "360K views ● 2 years ago",
    },
    {
      imgUrl:
        "https://i.ytimg.com/vi/FeXbX7nPQc4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCzoonrMxu5qt_6a3GK_jGQbO3teA",
      title: "CHIDORI 【千鳥】☯ Japanese Trap & Oriental Beats ☯ Trap &...",
      chanName: "Mr_MoMo Music",
      viewsAdate: "360K views ● 2 years ago",
    },
    {
      imgUrl:
        "https://i.ytimg.com/vi/FeXbX7nPQc4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCzoonrMxu5qt_6a3GK_jGQbO3teA",
      title: "CHIDORI 【千鳥】☯ Japanese Trap & Oriental Beats ☯ Trap &...",
      chanName: "Mr_MoMo Music",
      viewsAdate: "360K views ● 2 years ago",
    },
    {
      imgUrl:
        "https://i.ytimg.com/vi/FeXbX7nPQc4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCzoonrMxu5qt_6a3GK_jGQbO3teA",
      title: "CHIDORI 【千鳥】☯ Japanese Trap & Oriental Beats ☯ Trap &...",
      chanName: "Mr_MoMo Music",
      viewsAdate: "360K views ● 2 years ago",
    },
    {
      imgUrl:
        "https://i.ytimg.com/vi/FeXbX7nPQc4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCzoonrMxu5qt_6a3GK_jGQbO3teA",
      title: "CHIDORI 【千鳥】☯ Japanese Trap & Oriental Beats ☯ Trap &...",
      chanName: "Mr_MoMo Music",
      viewsAdate: "360K views ● 2 years ago",
    },
    {
      imgUrl:
        "https://i.ytimg.com/vi/FeXbX7nPQc4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCzoonrMxu5qt_6a3GK_jGQbO3teA",
      title: "CHIDORI 【千鳥】☯ Japanese Trap & Oriental Beats ☯ Trap &...",
      chanName: "Mr_MoMo Music",
      viewsAdate: "360K views ● 2 years ago",
    },
    {
      imgUrl:
        "https://i.ytimg.com/vi/FeXbX7nPQc4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCzoonrMxu5qt_6a3GK_jGQbO3teA",
      title: "CHIDORI 【千鳥】☯ Japanese Trap & Oriental Beats ☯ Trap &...",
      chanName: "Mr_MoMo Music",
      viewsAdate: "360K views ● 2 years ago",
    },
    {
      imgUrl:
        "https://i.ytimg.com/vi/FeXbX7nPQc4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCzoonrMxu5qt_6a3GK_jGQbO3teA",
      title: "CHIDORI 【千鳥】☯ Japanese Trap & Oriental Beats ☯ Trap &...",
      chanName: "Mr_MoMo Music",
      viewsAdate: "360K views ● 2 years ago",
    },
    {
      imgUrl:
        "https://i.ytimg.com/vi/FeXbX7nPQc4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCzoonrMxu5qt_6a3GK_jGQbO3teA",
      title: "CHIDORI 【千鳥】☯ Japanese Trap & Oriental Beats ☯ Trap &...",
      chanName: "Mr_MoMo Music",
      viewsAdate: "360K views ● 2 years ago",
    },
    {
      imgUrl:
        "https://i.ytimg.com/vi/FeXbX7nPQc4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCzoonrMxu5qt_6a3GK_jGQbO3teA",
      title: "CHIDORI 【千鳥】☯ Japanese Trap & Oriental Beats ☯ Trap &...",
      chanName: "Mr_MoMo Music",
      viewsAdate: "360K views ● 2 years ago",
    },
  ];
  return (
    <aside>
      {asideinfo.map((el) => (
        <div className="vd-side-cont">
          <img style={{ height: 95, width: 168 }} src={el.imgUrl} alt="music" />
          <div className="vd-info-cont">
            <h5>{el.title}</h5>
            <p className="chaine">
              {el.chanName}
              <span class="material-icons">check_circle</span>
            </p>
            <p className="views">{el.viewsAdate}</p>
          </div>
        </div>
      ))}
    </aside>
  );
};

export default Aside;
