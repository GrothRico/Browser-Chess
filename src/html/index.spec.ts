import { html } from "."

describe('html', () => {
    it('should create a html string literal with parameters', () => {
        const message = "Hello, world!";
        const actual = html`
        <div>
            <span>
                ${message}
            </span>
        </div>`;
        expect(actual.indexOf("<div>")).toEqual(0);
        console.log(actual.indexOf("span"));
    })
})