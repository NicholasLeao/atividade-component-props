import "./StatusBar.modules.css";

function StatusBar(props) {
  return (
    <>
      <div class="status-bar">
        
          <h2>{props.name}</h2>
          <span>{props.amount.slice(0,2)}/100</span>
        

        <div class="bar-container">
        <div className="bar-content" style={{ backgroundColor: props.color, width: props.amount}}></div>
        </div>
      </div>
    </>
  );
}

export default StatusBar;
