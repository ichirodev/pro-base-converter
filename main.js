const { app, BrowserWindow, Menu } = require('electron');

function createWindow () {
    /* For more information, visit https://www.electronjs.org/docs/api/browser-window */
    // Create new window
    const win = new BrowserWindow({
        width: 600,
        height: 300,
        webPreferences: {
        nodeIntegration: true
        },
        center: true,
        maximizable: false,
        resizable: false,
        title: "Pro Base Converter 0.0.2 Beta",
        icon: "./pro-base-converter.ico"
    });

    // Load html file as UI
    win.loadFile('main.html');
    // Hide menu bar
    Menu.setApplicationMenu(null);
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