import {
    initDialog,
    isDialogOpen
} from '../../main/javascript/hello';

import 'jquery-ui/ui/unique-id';
import 'jquery-ui/ui/widgets/button';

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

    it('open on a click at the clickable element', (done) => {

        done.fail();
    });
    it('close on click at the x button in the modal ', (done) => {
        done.fail();
    });

    it('open and close on click at the clickable element', (done) => {
        done.fail();
    });
});

const setupDOM = () => {
    document.body.innerHTML =
        '<div>' +
        '  <div id="openDialog" />' +
        '  <button id="dialog" >' +
        '   TestContent' +
        '</button>' +
        '</div>';
    initDialog();
};

const destroyDOM = () => {
    document.body.innerHTML = '';
};