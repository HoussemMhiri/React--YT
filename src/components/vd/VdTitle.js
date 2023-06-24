import React from "react";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ReplyIcon from "@mui/icons-material/Reply";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import "./Vd.css";

const VdTitle = () => {
  const fcbLogo =
    "https://www.geosuper.tv/assets/uploads/updates/2023-05-05/24290_9349069_updates.jpg";
  const title =
    "Best Goals scored by FC BARCELONA 2022-23 ● English Commentary HD";
  const subsLogo = [
    "https://yt3.googleusercontent.com/4LsB-GvZ0uGrMfQvi1J1tUhkEIBHz5LVaOKIvaiRC9ZxgFHVHCvELs5YqoNeznAXLML82LR6sA=s176-c-k-c0x00ffffff-no-rj",
  ];

  const chan = ["Barca HD", "5.28K subscribers"];

  return (
    <main>
      <div className="theMain">
        <section className="vd-title">
          <img style={{ height: 538, width: 956 }} src={fcbLogo} alt="FCB" />
          <h3 className="titVD">{title}</h3>
        </section>
        <div className="sec-cont">
          <section className="subscribe-like">
            <div class="subs-name">
              <img
                src={subsLogo}
                style={{ width: "40px", height: "40px" }}
                alt="barca"
              />
              <div class="name-subsCount">
                <h4>{chan[0]}</h4>
                <p>{chan[1]}</p>
              </div>
              <button>Subscribe</button>
            </div>
          </section>
          <section class="likes">
            <div class="like-dislike">
              <p className="thumb-up">
                <ThumbUpOffAltIcon />

                <span class="p-border">1.2K</span>
              </p>
              <p className="thumb-down">
                <ThumbDownOffAltIcon />
              </p>
            </div>

            <div class="share">
              <ReplyIcon className="reply" />
              <span>Share</span>
            </div>
            <div class="download">
              <ArrowDownwardOutlinedIcon />
              <span>Download</span>
            </div>
            <MoreHorizOutlinedIcon className="more" />
          </section>
        </div>
      </div>
    </main>
  );
};

export default VdTitle;
