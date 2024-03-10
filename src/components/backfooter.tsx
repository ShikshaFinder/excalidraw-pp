import { Excalidraw } from "@excalidraw/excalidraw";
import { Footer } from "@excalidraw/excalidraw";
import { useHistory } from "react-router-dom";

function FooterBack() {
    const history = useHistory();
  return (
    <div style={{ height: "500px"}}>
      <Excalidraw>
        <Footer>
          <button
            className="custom-footer"
            onClick={() => {history.back}}
          >
            custom footer
          </button>
        </Footer>
      </Excalidraw>
    </div>
  );
}
export default FooterBack;