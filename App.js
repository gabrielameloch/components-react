import React from "react";
import "./style.css";
import Icon from "./icon";
import NovoIcon from "./novoicon";
import IconEnrolados from "./iconEnrolados";
import bella from "./components/bella.jpg";
import boo from "./components/boo.jpg";
import enrolados from "./components/enrolados.jpg";
import ActionButton from "./ActionButton";
import Card from "./card";

function App() {
  return (
    <div>
      <div className="icon-container">
        <div className="icon-bella">
          <Icon src={bella} alt={"icon bella"} />
        </div>
        <div className="icon-boo">
          <NovoIcon src={boo} alt={"icon boo"} />
        </div>
        <div className="icon-stitch">
          <IconEnrolados src={enrolados} alt={"icon-enrolados"} />
        </div>
      </div>
      <ActionButton label="click me" onClick={() => alert("ola!")} />
      <ActionButton label="click me" onClick={() => alert("hello!")} />
      <ActionButton label="click me" onClick={() => alert("ciao!")} />
      <div className="card-container">
        <Card
          title="One day at a time"
          description=""
          image="https://i.pinimg.com/564x/0d/0d/0c/0d0d0c549d10a4d178b3eeccbdbb61ec.jpg"
        />
        <Card
          title="..................."
          description=""
          image="https://i.pinimg.com/736x/da/bb/68/dabb68118525f2f5822966cd964c6bed.jpg"
        />
        <Card
          title="It is all part of the process"
          description=""
          image="https://i.pinimg.com/564x/5c/b6/f2/5cb6f2a46c845d58d4e47b66f1e9b3cd.jpg"
        />
      </div>
    </div>
  );
}

export default App;
