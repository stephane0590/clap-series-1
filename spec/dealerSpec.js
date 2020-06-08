import { dealer } from "../src/dealer";

describe('dealer', () => {
    it('return two array', () => {
        expect(dealer().length).toEqual(2)
    });
});