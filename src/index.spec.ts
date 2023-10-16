import { htmlTest } from ".";

describe("something", () => {
  it("should pass", () => {
    expect(htmlTest()).toEqual("<h1>Hello, world!</h1>");
  });
});
