/**
 * Copyright (c) 2020 Wakers.cz
 * @author Jiří Zapletal (https://www.wakers.cz, zapletal@wakers.cz)
 */

var hero = {
    goto: function (directionCode, steps = 1) {
        switch (directionCode) {
            case 2:
                hero.gotoRight(steps);
                break;
            case 3:
                hero.gotoBottom(steps);
                break;
            case 4:
                hero.gotoLeft(steps);
                break;
            default:
                hero.gotoUp(steps);
                break;
        }
    },

    gotoUp: function (steps) {
        console.log('gotoUp', steps);
    },

    gotoLeft: function (steps) {
        console.log('gotoLeft', steps);
    },

    gotoBottom: function (steps) {
        console.log('gotoBottom', steps);
    },

    gotoRight: function (steps) {
        console.log('gotoRight', steps);
    }
};