/**
 * Copyright (c) 2020 Wakers.cz
 * @author Jiří Zapletal (https://www.wakers.cz, zapletal@wakers.cz)
 */

Blockly.Blocks['move-to'] = {
    init: function() {
        this.appendValueInput("steps")
            .setCheck("Number")
            .appendField(new Blockly.FieldLabelSerializable("Posunout"), "NAME")
            .appendField(new Blockly.FieldDropdown([["Nahoru","1"], ["Doprava","2"], ["Dolů","3"], ["Doleva","4"]]), "directionCode")
            .appendField("počet kroků:");
        this.setInputsInline(true);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['move-to'] = function(block) {
    var directionCode = block.getFieldValue('directionCode');
    var steps = Blockly.JavaScript.valueToCode(block, 'steps', Blockly.JavaScript.ORDER_ATOMIC);

    return 'hero.goto('+ directionCode +', ' + steps + ')';
};