import { greet } from "./greet";

describe('greet', () => {
    it('it should include Matthew Blain S00211783 in the message', () => {
        expect(greet('Matthew Blain S0021783')).toContain('Matthew Blain S0021783');
    });
});