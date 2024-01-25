const {app , BrowserWindow} = require('electron');

const url = require('url');

const path = require('path');

function createMainWindow () {

    const mainWindow = new BrowserWindow({
        title: 'electron',
        width: 1000,
        height: 600,
        webPreferences: {
            contextIsolation: true,
            nodeIntegration: true,
            preload: path.join(__dirname, './preload.js'),
        }
    });

    mainWindow.webContents.openDevTools();

    const startURL = url.format({
        pathname: path.join(__dirname, './app/build/index.html'),
        protocol: 'file'
    });

    mainWindow.loadURL(startURL);
}

app.whenReady().then(createMainWindow);