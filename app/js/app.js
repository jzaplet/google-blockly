/**
 * Copyright (c) 2020 Wakers.cz
 * @author Jiří Zapletal (https://www.wakers.cz, zapletal@wakers.cz)
 */

var workspace = Blockly.inject('blockly-div', {
    media: './node_modules/blockly/media/',
    toolbox: document.getElementById('blockly-toolbox')
});

document.getElementById('run-code').addEventListener('click', function () {
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    try { eval(code); } catch (e) { alert(e);}
});