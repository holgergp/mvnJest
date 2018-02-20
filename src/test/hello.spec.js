describe('Hello world should', function () {
    function helloWorld() {
        return 'Hello World';
    }

    it('print hello world', function () {
        expect(helloWorld()).toBe('Hello World');
    });
});