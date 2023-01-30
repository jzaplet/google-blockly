/**
 * Copyright (c) 2023 Strategio Digital s.r.o.
 * @author Jiří Zapletal (https://strategio.digital, jz@strategio.digital)
 */

const workspace = Blockly.inject('blocklyDiv', {toolbox: document.getElementById('toolbox')});

const input = document.getElementById('input');
const code = document.getElementById('code');

const exportButton = document.getElementById('exportButton')
const importButton = document.getElementById('importButton');
const clearButton = document.getElementById('clearButton');
const showCodeButton = document.getElementById('showCodeButton');

exportButton.addEventListener('click', () => {
    const xml = Blockly.Xml.workspaceToDom(workspace);
    input.value = new XMLSerializer().serializeToString(xml);
})

importButton.addEventListener('click', () => {
    workspace.clear();
    const xml = Blockly.Xml.textToDom(input.value);
    Blockly.Xml.domToWorkspace(xml, workspace);
})

clearButton.addEventListener('click', () => {
    workspace.clear();
    input.value = '';
})

showCodeButton.addEventListener('click', () => {
    code.innerText = Blockly.JavaScript.workspaceToCode(workspace);
})