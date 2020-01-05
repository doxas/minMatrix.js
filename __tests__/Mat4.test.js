import {Mat4} from '../src/minMatrix.js';

describe('static method in Mat4', () => {
    expect.extend({
        every: (received, argument) => {
            let flag = true;
            for(let i = 0; i < argument.length; ++i){
                flag = flag && received[i] === argument[i];
            }
            if(flag === true){
                return {
                    message: () => {
                        return 'every matched';
                    },
                    pass: true
                };
            }else{
                return {
                    message: () => {
                        return 'not matched';
                    },
                    pass: false
                };
            }
        },
    });
    test('Mat4.create instance of Float32Array', () => {
        expect(Mat4.create()).toBeInstanceOf(Float32Array);
    });
    test('Mat4.create', () => {
        expect(Mat4.create()).every(new Array(16).fill(0.0));
    });
    test('Mat4.identity', () => {
        const target = [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ];
        expect(Mat4.identity()).every(target);
    });
});
