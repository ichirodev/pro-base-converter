const { app, BrowserWindow } = require('electron');

function createWindow () {
    // Create new window
    const win = new BrowserWindow({
        width: 600,
        height: 300,
        webPreferences: {
        nodeIntegration: true
        }
    });

    // Load html file as UI
    win.loadFile('main.html');
}

app.whenReady().then(createWindow);

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
});