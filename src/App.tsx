/* 2024-01-07 09:32:27

구현되어야 할 것들...
1. 파일 다운로드 버튼과 버튼 클릭 액셔너
2. 파일 다운로드 취소 버튼과 클릭 액셔너
3. 파일 업로드 버튼과 버튼 클릭 액셔너
4. fetch progress status bar with percentage

*/
import "./css/reset.css";
import "./css/app.css";
import Ver01 from "./versions/Ver01";

function App() {
  return (
    <div className="wrapper">
      <div className="innerDiv">
        <Ver01 />
      </div>
    </div>
  );
}

export default App;
