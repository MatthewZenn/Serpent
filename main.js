const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow, Menu} = electron;
Menu.setApplicationMenu(null);

let mainWindow;

app.on('ready', function(){
    var screenElectron = electron.screen;
    var mainScreen = screenElectron.getPrimaryDisplay();
    var dimensions = mainScreen.size;
    mainWindow = new BrowserWindow({ width: dimensions.width, height: dimensions.height, resizable: true, frame: false, icon: "Static/Logo.ico"});
    termWindow = new BrowserWindow({ width: 800, height: 600, resizable: false, frame: false, icon: "Static/Logo.ico"});
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'window.html'),
        protocol: 'file:',
        slashes: true
    }));
    termWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'terminal.html'),
        protocol: 'file:',
        slashes: true
    }));
});