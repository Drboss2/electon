const { app, BrowserWindow } = require('electron');
const path = require('path');


function createWindow () {
  const win = new BrowserWindow({
    width: 1400,
    height: 800,
    resizable: false,      // 🔒 Prevent resizing
    minimizable: false,    // ❌ No minimize
    maximizable: false,    // ❌ No maximize
    icon: path.join(__dirname, 'assets', 'favicon.ico'), // ✅ uses assets/icon.ico
    webPreferences: {
      nodeIntegration: false, // needed to use Electron in HTML
      contextIsolation: false
    }
   
  });

  win.loadURL('https://traderoom.tcgliveweb.app/');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});