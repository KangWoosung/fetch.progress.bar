import Cancel from "./components/Cancel";
import Download from "./components/Download";
import Upload from "./components/Upload";
import ProgressBar from "./components/ProgressBar";

const Ver01 = () => {
  return (
    <>
      <h1>Fetch Progress bar</h1>
      <h3>Ver01</h3>
      <Download />
      <Cancel />
      <Upload />
      <ProgressBar />
    </>
  );
};

export default Ver01;
