import {Qtn} from '../src/minMatrix.js';

describe('static method in Qtn', () => {
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
    test('Qtn.create instance of Float32Array', () => {
        expect(Qtn.create()).toBeInstanceOf(Float32Array);
    });
    test('Qtn.create', () => {
        expect(Qtn.create()).every(new Array(4).fill(0));
    });
    test('Qtn.identity [omit argument]', () => {
        const target = [0, 0, 0, 1];
        expect(Qtn.identity()).every(target);
    });
    test('Qtn.identity [specify argument]', () => {
        const source = [0, 0, 0, 0];
        const target = [0, 0, 0, 1];
        expect(Qtn.identity(source)).every(target);
    });
    test('Qtn.copy [omit argument]', () => {
        const source = [0, 0, 0, 1];
        const target = [0, 0, 0, 1];
        expect(Qtn.copy(source)).every(target);
    });
    test('Qtn.copy [specify argument]', () => {
        const source = [0, 0, 0, 1];
        const target = [];
        expect(Qtn.copy(source, target) === target).toBeTruthy();
    });
    test('Qtn.inverse [omit argument]', () => {
        const source = [1, 1, 1, 1];
        const target = [-1, -1, -1, 1];
        expect(Qtn.inverse(source)).every(target);
    });
    test('Qtn.inverse [specify argument]', () => {
        const source = [1, 1, 1, 1];
        const target = [];
        expect(Qtn.inverse(source, target) === target).toBeTruthy();
    });
    test('Qtn.normalize', () => {
        const source = [10, 0, 0, 1];
        const target = [1, 0, 0, 1];
        expect(Qtn.normalize(source)).every(target);
    });
    test('Qtn.multiply [omit argument]', () => {
        const source1 = [1, 0, 0, 1];
        const source2 = [0, 1, 0, 1];
        const target = [1, 1, 1, 1];
        expect(Qtn.multiply(source1, source2)).every(target);
    });
    test('Qtn.multiply [specify argument]', () => {
        const source1 = [1, 0, 0, 1];
        const source2 = [0, 1, 0, 1];
        const target = [];
        expect(Qtn.multiply(source1, source2, target) === target).toBeTruthy();
    });
    test('Qtn.rotate [omit argument]', () => {
        const angle = Math.PI * 0.5;
        const axis = [1, 0, 0];
        const target = [0.7071067690849304, 0, 0, 0.7071067690849304];
        expect(Qtn.rotate(angle, axis)).every(target);
    });
    test('Qtn.rotate [specify argument]', () => {
        const angle = Math.PI * 0.5;
        const axis = [1, 0, 0];
        const target = [];
        expect(Qtn.rotate(angle, axis, target) === target).toBeTruthy();
    });
});

