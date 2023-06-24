import React from "react";
import MicIcon from "@mui/icons-material/Mic";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import "./Head.css";
import { Button, Dropdown, Nav, Offcanvas } from "react-bootstrap";
import { useState } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const Entete = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const listItems = [
    "Home",
    "Short",
    "Subscriptions",
    "Library",
    "History",
    "Your Videos",
    "Watch Later",
    "Downloads",
    "Your clips",
    "Show more",
    "Online Tutorials",
    "Fabrizio Romano",
    "FC Barcelona",
    "Andrew Huberman",
    "Andrew Huberman",
  ];
  const dropItems = [
    ["Your channel", "Youtube Studio", "Switch account", "Sign out"],
    ["Purchase and memberships", "Your data in Youtube"],
    [
      "Appearance:Light",
      "Language:English",
      "Restricted Mode: Off",
      "Location: Tunisia",
      "Keyboard shortcuts",
    ],
    ["Settings"],
    ["Help", "Send feedback"],
  ];
  const logo =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/768px-YouTube_Logo_2017.svg.png?20220605194644";
  return (
    <header>
      <div className="left-side">
        <Button variant="none" onClick={handleShow}>
          <MenuOutlinedIcon />
        </Button>

        <Offcanvas style={{ width: 250 }} show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <Button variant="none" onClick={handleShow}>
                <MenuOutlinedIcon />
                <img
                  style={{ width: 90, height: 20, marginLeft: 20 }}
                  src={logo}
                  alt="yt"
                />
              </Button>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <nav>
              <ul className="ul">
                {listItems.map((el) =>
                  el !== "Subscriptions" ? (
                    <Nav.Link style={{ margin: "0.8em 0" }} href="#home">
                      {el}
                    </Nav.Link>
                  ) : (
                    <>
                      <Nav.Link href="#home">Subscriptions</Nav.Link>
                      <hr />
                    </>
                  )
                )}
              </ul>
            </nav>
          </Offcanvas.Body>
        </Offcanvas>

        <img style={{ width: 90, height: 20 }} src={logo} alt="yt" />
      </div>
      <div className="mid-side">
        <input type="text" name="" id="" placeholder="Search" />
        <button className="btn-search">
          <SearchIcon className="search-logo" />
        </button>
        <MicIcon className="mic-logo" />
      </div>
      <div className="right-side">
        <VideoCallOutlinedIcon className="icons" />
        <NotificationsNoneOutlinedIcon className="icons" />

        <Dropdown>
          <Dropdown.Toggle variant="none" id="dropdown-basic">
            <AccountCircleOutlinedIcon className="icons" />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {dropItems.map((el) => (
              <>
                <div>
                  {el.map((elo) => (
                    <Dropdown.Item href="#/action-1">{elo}</Dropdown.Item>
                  ))}
                </div>
                <hr />
              </>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </header>
  );
};

export default Entete;
