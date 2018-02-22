import {
    initPage,
    isDialogOpen
} from '../../main/javascript/hello';

import 'jquery-ui/ui/unique-id';
import 'jquery-ui/ui/widgets/button';
import 'jquery-ui/ui/safe-active-element';
import 'jquery-ui/ui/data';
import 'jquery-ui/ui/tabbable';
import 'jquery-ui/ui/focusable';
import 'jquery-ui/ui/safe-blur';

describe('ModalDialog should', () => {
    beforeEach(() => {
        setupDOM();
    });

    afterEach(() => {
        destroyDOM();
    });

    it('be closed on site startup', () => {
        expect(isDialogOpen()).toBe(false);
    });

    it('open on a click at the clickable element', () => {
        document.querySelector('#openDialog').click();
        expect(isDialogOpen()).toBe(true);
    });

    it('close on click at the x button in the modal ', () => {
        $('.ui-button').click();
        expect(isDialogOpen()).toBe(false);
    });

    it('open and close on click at the clickable element', () => {
        $('#openDialog').click();
        expect(isDialogOpen()).toBe(true);
        $('#openDialog').click();
        expect(isDialogOpen()).toBe(false);
    });
});

const setupDOM = () => {
    document.body.innerHTML =
        '<div>' +
        '  <div id="openDialog" >Click</div>' +
        '  <div id="dialog" />' +
        '' +
        '</div>';
    initPage();
};

const destroyDOM = () => {
    document.body.innerHTML = '';
};