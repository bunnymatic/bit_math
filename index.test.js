import { square } from "index"

describe("square", function() {
  it("squares the number", () => {
    expect(square(3)).toEqual(9);
  });
});

