const {contextBrige} = require('electron');

const os = require('os');

contextBrige.exposeInMainWorld('electron', {
    homeDir: () => os.homedir()
});