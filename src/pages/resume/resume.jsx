import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { PDFViewer } from "@react-pdf/renderer";
import "./resume.css";
import ResumePDF from "../../components/resumePDF/resumePDF";

function Resume() {
  const data = useSelector((state) => state.resume);
  const [sendData, setSendData] = useState(data);
  const [update, setUpdate] = useState(false);
  const handleUpdate = () => {
    setSendData(data);
  };
  useEffect(() => {
    setUpdate(true);
    setTimeout(() => {
      setUpdate(false);
    }, 1000);
  }, [update]);
  return (
    <div>
      <h1 className="resume-header">Resume</h1>
      <button className="update-btn" onClick={handleUpdate}>
        Güncelle
      </button>
      <div className="resume-pdf">
        <PDFViewer width={700} height={896}>
          <ResumePDF props={sendData} />
        </PDFViewer>
      </div>
    </div>
  );
}

export default Resume;
