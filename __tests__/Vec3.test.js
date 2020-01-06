import {Vec3} from '../src/minMatrix.js';

describe('static method in Vec3', () => {
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
    test('Vec3.create instance of Float32Array', () => {
        expect(Vec3.create()).toBeInstanceOf(Float32Array);
    });
    test('Vec3.create', () => {
        expect(Vec3.create()).every(new Array(3).fill(0));
    });
    test('Vec3.copy [omit argument]', () => {
        const source = [1, 1, 1];
        const target = [1, 1, 1];
        expect(Vec3.copy(source)).every(target);
    });
    test('Vec3.copy [specify argument]', () => {
        const source = [1, 1, 1];
        const target = [];
        expect(Vec3.copy(source, target) === target).toBeTruthy();
    });
});

