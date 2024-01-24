import { getCurrencies } from "./getCurrencies";

describe('getCurrencies', () => {
    it('should include USD is in the array', () => {
        expect(getCurrencies()).toContain('USD');
    })
    it('should include GBP is in the array', () => {
        expect(getCurrencies()).toContain('GBP');
    })
    it('should include EUR is in the array', () => {
        expect(getCurrencies()).toContain('EUR');
    })
    it('should not include CAD is in the array', () => {
        expect(getCurrencies()).not.toContain('CAD');
    })
})