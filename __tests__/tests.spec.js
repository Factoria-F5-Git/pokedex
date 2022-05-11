import fs from 'fs';
const html = fs.readFileSync(path.resolve(root, '../index.html'), 'utf8');

test("1 + 1 should be 2", () => {
    expect(1+1).toBe(2);
});

describe('pokedex test', () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
    });
    afterEach(() => {
        jest.resetModules();
    });

    describe('test header section', () => {
        let header = {}
    })
})