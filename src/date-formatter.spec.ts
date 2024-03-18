import {it,test,describe,expect} from 'vitest';
import {formatDate} from './date-formatter.js';

describe('date-formatter',()=>{

    describe('formatDate() ',()=>{
        it('new date',()=>{
            expect(formatDate("YYYY-MM-DD")).toBe(new Date().toISOString().split('T')[0]);
        });
        it('Custom date',()=>{
            expect(formatDate("DD-MMM-YY", new Date("2024-03-11"))).toBe("11-Mar-24");
        });
        test('Another format string',()=>{
            expect(formatDate("MMM-D-YYYY", new Date("2026-04-02"))).toBe("Apr-2-2026");
        });
        test('Throw on wrong format string',()=> {
            expect(()=> formatDate("MMM.D.YYYY", new Date())).toThrow("Invalid format string. Use YY, YYYY, MMM, MM, DD, D seperated by '-'");
        });
    });
    
    describe('another func() ',()=>{
        it('Example test stub code',()=> {
            
        });
    });

})