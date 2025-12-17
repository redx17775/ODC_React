import { SubTitel } from "../components/SubTitel";
import { Title } from "../components/Title";
import { Paragraph } from "../components/Paragraph";
import { EsignatureAppForm } from "../components/EsignatureAppForm";
import { useState } from "react";

export const EsignatureApp = () => {
  const [Ename, setEName] = useState("");
  const [Edate, setEDate] = useState("");
  return (
    <div className="flex flex-col gap-4 w-full p-4">
        <div className="flex flex-col w-full place-items-center gap-4 p-4">
          <Title name={Ename}/>
          <SubTitel date={Edate} />
        </div>
        
        <Paragraph />
        <EsignatureAppForm 
          SetName={setEName} 
          SetDate={setEDate}
        />
    </div>
  )
}
