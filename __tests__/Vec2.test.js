import {Vec2} from '../src/minMatrix.js';

describe('static method in Vec2', () => {
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
    test('Vec2.create instance of Float32Array', () => {
        expect(Vec2.create()).toBeInstanceOf(Float32Array);
    });
    test('Vec2.create', () => {
        expect(Vec2.create()).every(new Array(2).fill(0));
    });
    test('Vec2.copy [omit argument]', () => {
        const source = [1, 1];
        const target = [1, 1];
        expect(Vec2.copy(source)).every(target);
    });
    test('Vec2.copy [specify argument]', () => {
        const source = [1, 1];
        const target = [];
        expect(Vec2.copy(source, target) === target).toBeTruthy();
    });
    test('Vec2.length', () => {
        const source = [1, 1];
        expect(Vec2.length(source)).toBe(Math.sqrt(2));
    });
    test('Vec2.distance', () => {
        const source1 = [0, 0];
        const source2 = [1, 2];
        const target = [1, 2];
        expect(Vec2.distance(source1, source2)).every(target);
    });
    test('Vec2.normalize', () => {
        const source = [10, 0];
        expect(Vec2.normalize(source)).every([1, 0]);
    });
    test('Vec2.dot', () => {
        const source1 = [1, 0];
        const source2 = [0, 1];
        const source3 = [-1, 0];
        expect(Vec2.dot(source1, source1)).toBe(1);
        expect(Vec2.dot(source1, source2)).toBe(0);
        expect(Vec2.dot(source1, source3)).toBe(-1);
    });
    test('Vec2.cross', () => {
        const source1 = [1, 0];
        const source2 = [0, 1];
        const source3 = [0, -1];
        expect(Vec2.cross(source1, source2)).toBe(1);
        expect(Vec2.cross(source1, source3)).toBe(-1);
    });
});

