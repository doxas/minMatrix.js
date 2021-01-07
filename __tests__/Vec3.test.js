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
    test('Vec3.length', () => {
        const source = [1, 1, 1];
        expect(Vec3.length(source)).toBe(Math.sqrt(3));
    });
    test('Vec3.distance', () => {
        const source1 = [0, 0, 0];
        const source2 = [1, 2, 3];
        const target = [1, 2, 3];
        expect(Vec3.distance(source1, source2)).every(target);
    });
    test('Vec3.normalize', () => {
        const source = [10, 0, 0];
        expect(Vec3.normalize(source)).every([1, 0, 0]);
    });
    test('Vec3.add', () => {
        const source1 = [0, 0, 0];
        const source2 = [1, 2, 3];
        const target = [1, 2, 3];
        expect(Vec3.add(source1, source2)).every(target);
    });
    test('Vec3.sub', () => {
        const source1 = [0, 0, 0];
        const source2 = [1, 2, 3];
        const target = [-1, -2, -3];
        expect(Vec3.sub(source1, source2)).every(target);
    });
    test('Vec3.multiply', () => {
        const source1 = [2, 3, 4];
        const source2 = [2, 3, 4];
        const target = [4, 9, 16];
        expect(Vec3.multiply(source1, source2)).every(target);
    });
    test('Vec3.divide', () => {
        const source1 = [8, 27, 64];
        const source2 = [2, 3, 4];
        const target = [4, 9, 16];
        expect(Vec3.divide(source1, source2)).every(target);
    });
    test('Vec3.dot', () => {
        const source1 = [1, 0, 0];
        const source2 = [0, 1, 0];
        const source3 = [-1, 0, 0];
        expect(Vec3.dot(source1, source1)).toBe(1);
        expect(Vec3.dot(source1, source2)).toBe(0);
        expect(Vec3.dot(source1, source3)).toBe(-1);
    });
    test('Vec3.cross', () => {
        const source1 = [1, 0, 0];
        const source2 = [0, 1, 0];
        const target = [0, 0, 1];
        expect(Vec3.cross(source1, source2)).every(target);
    });
    test('Vec3.lerp', () => {
        const source1 = [0, 0, 0];
        const source2 = [2, 2, 2];
        const target = [1, 1, 1];
        expect(Vec3.lerp(source1, source2, 0.5)).every(target);
    });
    test('Vec3.faceNormal', () => {
        const source1 = [1, 0, 0];
        const source2 = [0, 1, 0];
        const source3 = [0, 0, 0];
        const target = [0, 0, 1];
        expect(Vec3.faceNormal(source1, source2, source3)).every(target);
    });
});

