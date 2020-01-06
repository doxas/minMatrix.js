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
        expect(Mat4.create()).every(new Array(16).fill(0));
    });
    test('Mat4.identity [omit argument]', () => {
        const target = [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ];
        expect(Mat4.identity()).every(target);
    });
    test('Mat4.identity [specify argument]', () => {
        const source = [
            0, 0, 0, 0,
            0, 0, 0, 0,
            0, 0, 0, 0,
            0, 0, 0, 0
        ];
        const target = [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ];
        expect(Mat4.identity(source)).every(target);
    });
    test('Mat4.copy [omit argument]', () => {
        const source = [
            1, 1, 1, 1,
            1, 1, 1, 1,
            1, 1, 1, 1,
            1, 1, 1, 1
        ];
        const target = [
            1, 1, 1, 1,
            1, 1, 1, 1,
            1, 1, 1, 1,
            1, 1, 1, 1
        ];
        expect(Mat4.copy(source)).every(target);
    });
    test('Mat4.copy [specify argument]', () => {
        const source = [
            1, 1, 1, 1,
            1, 1, 1, 1,
            1, 1, 1, 1,
            1, 1, 1, 1
        ];
        const target = [];
        expect(Mat4.copy(source, target) === target).toBeTruthy();
    });
    test('Mat4.multiply [omit argument]', () => {
        const source = [
            1, 2, 3, 4,
            5, 6, 7, 8,
            1, 2, 3, 4,
            5, 6, 7, 8,
        ];
        const copied = Mat4.copy(source);
        const target = [
            34,  44,  54,  64,
            82, 108, 134, 160,
            34,  44,  54,  64,
            82, 108, 134, 160
        ];
        expect(Mat4.multiply(source, copied)).every(target);
    });
    test('Mat4.multiply [specify argument]', () => {
        const source = [
            1, 2, 3, 4,
            5, 6, 7, 8,
            1, 2, 3, 4,
            5, 6, 7, 8,
        ];
        const copied = Mat4.copy(source);
        const target = [];
        expect(Mat4.multiply(source, copied, target) === target).toBeTruthy();
    });
    test('Mat4.scale [omit argument]', () => {
        const source = [
            1, 2, 3, 4,
            5, 6, 7, 8,
            1, 2, 3, 4,
            5, 6, 7, 8,
        ];
        const vector = [1, 2, 3];
        const target = [
             1,  2,  3,  4,
            10, 12, 14, 16,
             3,  6,  9, 12,
             5,  6,  7,  8,
        ];
        expect(Mat4.scale(source, vector)).every(target);
    });
    test('Mat4.scale [specify argument]', () => {
        const source = [
            1, 2, 3, 4,
            5, 6, 7, 8,
            1, 2, 3, 4,
            5, 6, 7, 8,
        ];
        const vector = [1, 2, 3];
        const target = [];
        expect(Mat4.scale(source, vector, target) === target).toBeTruthy();
    });
    test('Mat4.translate [omit argument]', () => {
        const source = [
            1, 2, 3, 4,
            5, 6, 7, 8,
            1, 2, 3, 4,
            5, 6, 7, 8,
        ];
        const vector = [1, 2, 3];
        const target = [
             1,  2,  3,  4,
             5,  6,  7,  8,
             1,  2,  3,  4,
            19, 26, 33, 40
        ];
        expect(Mat4.translate(source, vector)).every(target);
    });
    test('Mat4.translate [specify argument]', () => {
        const source = [
            1, 2, 3, 4,
            5, 6, 7, 8,
            1, 2, 3, 4,
            5, 6, 7, 8,
        ];
        const vector = [1, 2, 3];
        const target = [];
        expect(Mat4.translate(source, vector, target) === target).toBeTruthy();
    });
    test('Mat4.rotate [omit argument]', () => {
        const source = Mat4.identity();
        const angle = Math.PI * 0.5;
        const axis = [1, 0, 0];
        const target = [
            1,                     0,                     0, 0,
            0, 6.123234262925839e-17,                     1, 0,
            0,                    -1, 6.123234262925839e-17, 0,
            0,                     0,                     0, 1
        ];
        expect(Mat4.rotate(source, angle, axis)).every(target);
    });
    test('Mat4.rotate [specify argument]', () => {
        const source = Mat4.identity();
        const angle = Math.PI * 0.5;
        const axis = [1, 0, 0];
        const target = [];
        expect(Mat4.rotate(source, angle, axis, target) === target).toBeTruthy();
    });
    test('Mat4.lookAt [omit argument]', () => {
        const eye    = [0, 0, 1];
        const center = [0, 0, 0];
        const up     = [0, 1, 0];
        const target = [
            1,  0,  0,  0,
            0,  1,  0,  0,
            0,  0,  1,  0,
            0,  0, -1,  1
        ];
        expect(Mat4.lookAt(eye, center, up)).every(target);
    });
    test('Mat4.lookAt [specify argument]', () => {
        const source = Mat4.identity();
        const eye    = [0, 0, 1];
        const center = [0, 0, 0];
        const up     = [0, 1, 0];
        expect(Mat4.lookAt(eye, center, up, source) === source).toBeTruthy();
    });
    test('Mat4.perspective [omit argument]', () => {
        const fovy   = 45;
        const aspect = 1.0;
        const near   = 0.1;
        const far    = 10.0;
        const target = [
            2.4142136573791504,                  0,                    0,  0,
                             0, 2.4142136573791504,                    0,  0,
                             0,                  0,  -1.0202020406723022, -1,
                             0,                  0, -0.20202019810676575,  0
        ];
        expect(Mat4.perspective(fovy, aspect, near, far)).every(target);
    });
    test('Mat4.perspective [specify argument]', () => {
        const source = Mat4.identity();
        const fovy   = 45;
        const aspect = 1.0;
        const near   = 0.1;
        const far    = 10.0;
        expect(Mat4.perspective(fovy, aspect, near, far, source) === source).toBeTruthy();
    });
    test('Mat4.ortho [omit argument]', () => {
        const left   = -1;
        const right  = 1;
        const top    = 1;
        const bottom = -1;
        const near   = 0.1;
        const far    = 10.0;
        const target = [
            1, 0,                    0, 0,
            0, 1,                    0, 0,
            0, 0, -0.20202019810676575, 0,
            0, 0,  -1.0202020406723022, 1
        ];
        expect(Mat4.ortho(left, right, top, bottom, near, far)).every(target);
    });
    test('Mat4.ortho [specify argument]', () => {
        const source = Mat4.identity();
        const left   = -1;
        const right  = 1;
        const top    = 1;
        const bottom = -1;
        const near   = 0.1;
        const far    = 10.0;
        expect(Mat4.ortho(left, right, top, bottom, near, far, source) === source).toBeTruthy();
    });
    test('Mat4.transpose [omit argument]', () => {
        const source = [
            1, 2, 3, 4,
            5, 6, 7, 8,
            1, 2, 3, 4,
            5, 6, 7, 8,
        ];
        const target = [
            1, 5, 1, 5,
            2, 6, 2, 6,
            3, 7, 3, 7,
            4, 8, 4, 8
        ];
        expect(Mat4.transpose(source)).every(target);
    });
    test('Mat4.transpose [specify argument]', () => {
        const source = [
            1, 2, 3, 4,
            5, 6, 7, 8,
            1, 2, 3, 4,
            5, 6, 7, 8,
        ];
        const target = [];
        expect(Mat4.transpose(source, target) === target).toBeTruthy();
    });
    test('Mat4.inverse [omit argument]', () => {
        const source = [
            1, 0, 0, 1,
            0, 1, 0, 2,
            0, 0, 1, 3,
            1, 2, 3, 1,
        ];
        const target = [
              0.9230769276618958, -0.1538461595773697, -0.23076923191547394,  0.07692307978868484,
             -0.1538461595773697,   0.692307710647583,  -0.4615384638309479,   0.1538461595773697,
            -0.23076923191547394, -0.4615384638309479,   0.3076923191547394,  0.23076923191547394,
             0.07692307978868484,  0.1538461595773697,  0.23076923191547394, -0.07692307978868484
        ];
        expect(Mat4.inverse(source)).every(target);
    });
    test('Mat4.inverse [specify argument]', () => {
        const source = [
            1, 0, 0, 1,
            0, 1, 0, 2,
            0, 0, 1, 3,
            1, 2, 3, 1,
        ];
        const target = [];
        expect(Mat4.inverse(source, target) === target).toBeTruthy();
    });
    test('Mat4.toVecIV', () => {
        const source = Mat4.scale(Mat4.identity(), [1.0, 2.0, 3.0]);
        const vector = [1, 2, 3, 4];
        const target = [1, 4, 9, 4];
        expect(Mat4.toVecIV(source, vector)).every(target);
    });
    test('Mat4.vpFromCameraProperty', () => {
        const view              = Mat4.identity();
        const projection        = Mat4.identity();
        const viewProjection    = Mat4.identity();
        const cameraPosition    = [0, 0, 1];
        const cameraCenter      = [0, 0, 0];
        const cameraUpDirection = [0, 1, 0];
        const fovy              = 45;
        const aspect            = 1.0;
        const near              = 0.1;
        const far               = 1.0;
        expect(Mat4.vpFromCameraProperty(
            cameraPosition, cameraCenter, cameraUpDirection,
            fovy, aspect, near, far,
            view, projection, viewProjection
        )).toEqual({
            view: view,
            projection: projection,
            viewProjection: viewProjection,
        });
    });
});

