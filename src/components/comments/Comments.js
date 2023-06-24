import React from "react";
import "./Comment.css";

const Comments = () => {
  const myImg =
    "https://yt3.ggpht.com/yti/AHyvSCDuuIK7JqK49_3RvWo1jNox3kKWmizWM7lHCa9Esw=s88-c-k-c0x00ffffff-no-rj";
  const myCom = "Add a comment...";
  const allComm = [
    {
      imgUrl:
        "https://yt3.ggpht.com/ahevURanvWoVRJnXmV2tbTi7UGM1ErFEL4o9UpoH-wcUdWNK6Vk0Fccu5GXscF46IH216-QXnQ=s88-c-k-c0x00ffffff-no-rj",
      nameofUser: "@superior9782",
      date: "4 weeks ago",
      theComm:
        "Lewandowski delivered what Messi couldn't last time... Barca get a title again!",
      like: "thumb_up_off_alt ",
      dislike: "thumb_down_off_alt",
      reply: "Reply",
    },
    {
      imgUrl:
        "https://yt3.ggpht.com/ahevURanvWoVRJnXmV2tbTi7UGM1ErFEL4o9UpoH-wcUdWNK6Vk0Fccu5GXscF46IH216-QXnQ=s88-c-k-c0x00ffffff-no-rj",
      nameofUser: "@superior9782",
      date: "4 weeks ago",
      theComm:
        "Lewandowski delivered what Messi couldn't last time... Barca get a title again!",
      like: "thumb_up_off_alt",
      dislike: "thumb_down_off_alt",
      reply: "Reply",
    },
    {
      imgUrl:
        "https://yt3.ggpht.com/ahevURanvWoVRJnXmV2tbTi7UGM1ErFEL4o9UpoH-wcUdWNK6Vk0Fccu5GXscF46IH216-QXnQ=s88-c-k-c0x00ffffff-no-rj",
      nameofUser: "@superior9782",
      date: "4 weeks ago",
      theComm:
        "Lewandowski delivered what Messi couldn't last time... Barca get a title again!",
      like: "thumb_up_off_alt",
      dislike: "thumb_down_off_alt",
      reply: "Reply",
    },
    {
      imgUrl:
        "https://yt3.ggpht.com/ahevURanvWoVRJnXmV2tbTi7UGM1ErFEL4o9UpoH-wcUdWNK6Vk0Fccu5GXscF46IH216-QXnQ=s88-c-k-c0x00ffffff-no-rj",
      nameofUser: "@superior9782",
      date: "4 weeks ago",
      theComm:
        "Lewandowski delivered what Messi couldn't last time... Barca get a title again!",
      like: "thumb_up_off_alt",
      dislike: "thumb_down_off_alt",
      reply: "Reply",
    },
    {
      imgUrl:
        "https://yt3.ggpht.com/ahevURanvWoVRJnXmV2tbTi7UGM1ErFEL4o9UpoH-wcUdWNK6Vk0Fccu5GXscF46IH216-QXnQ=s88-c-k-c0x00ffffff-no-rj",
      nameofUser: "@superior9782",
      date: "4 weeks ago",
      theComm:
        "Lewandowski delivered what Messi couldn't last time... Barca get a title again!",
      like: "thumb_up_off_alt",
      dislike: "thumb_down_off_alt",
      reply: "Reply",
    },
    {
      imgUrl:
        "https://yt3.ggpht.com/ahevURanvWoVRJnXmV2tbTi7UGM1ErFEL4o9UpoH-wcUdWNK6Vk0Fccu5GXscF46IH216-QXnQ=s88-c-k-c0x00ffffff-no-rj",
      nameofUser: "@superior9782",
      date: "4 weeks ago",
      theComm:
        "Lewandowski delivered what Messi couldn't last time... Barca get a title again!",
      like: "thumb_up_off_alt",
      dislike: "thumb_down_off_alt",
      reply: "Reply",
    },
    {
      imgUrl:
        "https://yt3.ggpht.com/ahevURanvWoVRJnXmV2tbTi7UGM1ErFEL4o9UpoH-wcUdWNK6Vk0Fccu5GXscF46IH216-QXnQ=s88-c-k-c0x00ffffff-no-rj",
      nameofUser: "@superior9782",
      date: "4 weeks ago",
      theComm:
        "Lewandowski delivered what Messi couldn't last time... Barca get a title again!",
      like: "thumb_up_off_alt",
      dislike: "thumb_down_off_alt",
      reply: "Reply",
    },
    {
      imgUrl:
        "https://yt3.ggpht.com/ahevURanvWoVRJnXmV2tbTi7UGM1ErFEL4o9UpoH-wcUdWNK6Vk0Fccu5GXscF46IH216-QXnQ=s88-c-k-c0x00ffffff-no-rj",
      nameofUser: "@superior9782",
      date: "4 weeks ago",
      theComm:
        "Lewandowski delivered what Messi couldn't last time... Barca get a title again!",
      like: "thumb_up_off_alt",
      dislike: "thumb_down_off_alt",
      reply: "Reply",
    },
    {
      imgUrl:
        "https://yt3.ggpht.com/ahevURanvWoVRJnXmV2tbTi7UGM1ErFEL4o9UpoH-wcUdWNK6Vk0Fccu5GXscF46IH216-QXnQ=s88-c-k-c0x00ffffff-no-rj",
      nameofUser: "@superior9782",
      date: "4 weeks ago",
      theComm:
        "Lewandowski delivered what Messi couldn't last time... Barca get a title again!",
      like: "thumb_up_off_alt",
      dislike: "thumb_down_off_alt",
      reply: "Reply",
    },
    {
      imgUrl:
        "https://yt3.ggpht.com/ahevURanvWoVRJnXmV2tbTi7UGM1ErFEL4o9UpoH-wcUdWNK6Vk0Fccu5GXscF46IH216-QXnQ=s88-c-k-c0x00ffffff-no-rj",
      nameofUser: "@superior9782",
      date: "4 weeks ago",
      theComm:
        "Lewandowski delivered what Messi couldn't last time... Barca get a title again!",
      like: "thumb_up_off_alt",
      dislike: "thumb_down_off_alt",
      reply: "Reply",
    },
  ];
  return (
    <section className="all-comm-cont">
      <div className="myComment">
        <img
          style={{ height: 40, width: 40, borderRadius: "50%" }}
          src={myImg}
          alt="logo"
        />

        <p>{myCom}</p>
      </div>
      <div className="other-comm-cont">
        {allComm.map((el) => (
          <div className="user-comm-cont">
            <img
              style={{ height: 40, width: 40, borderRadius: "50%" }}
              src={el.imgUrl}
              alt="user-Img"
            />
            <div className="words-cont">
              <p className="userInfo">
                <span className="userName">{el.nameofUser}</span>
                <span className="userDate">{el.date}</span>
              </p>
              <p className="userComm">{el.theComm}</p>
              <div className="li-di">
                <span class="material-icons">{el.like} </span>
                <span class="material-icons">{el.dislike}</span>
                <span className="theReply">{el.reply}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Comments;
