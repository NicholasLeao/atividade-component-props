import "./StatusBar.modules.css";

function StatusBar() {
  const amount = 100;
  return (
    <>
      <div class="status-bar">
        
          <h2>Health</h2>
          <span>{amount}/100</span>
        

        <div class="bar-container">
          <div class="bar-content"></div>
        </div>
      </div>
    </>
  );
}

export default StatusBar;
