import { greet } from "./greet";

describe('greet', () => {
    it('it should include Matthew Blain in the message', () => {
        expect(greet('Matthew Blain')).toContain('Matthew Blain');
    });
});