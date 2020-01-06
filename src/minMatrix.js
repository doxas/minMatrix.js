/**
 * Mat4
 * @class Mat4
 */
export class Mat4 {
    /**
     * 4x4 の正方行列を生成する
     * @return {Float32Array} 行列格納用の配列
     */
    static create(){
        return new Float32Array(16);
    }
    /**
     * 単位行列を返す（引数が与えられた場合はそれを初期化する）
     * @param {Mat4} [source] - 単位化する行列
     * @return {Mat4} 単位化した行列
     */
    static identity(source){
        let out = source;
        if(out == null){out = Mat4.create();}
        out[0]  = 1; out[1]  = 0; out[2]  = 0; out[3]  = 0;
        out[4]  = 0; out[5]  = 1; out[6]  = 0; out[7]  = 0;
        out[8]  = 0; out[9]  = 0; out[10] = 1; out[11] = 0;
        out[12] = 0; out[13] = 0; out[14] = 0; out[15] = 1;
        return out;
    }
    /**
     * 行列の値をコピーして返す（第二引数が与えられた場合その行列がコピー先となる）
     * @param {Mat4} target - コピー元の行列
     * @param {Mat4} [source] - コピー先の行列
     * @return {Mat4} コピー先の行列
     */
    static copy(target, source){
        let out = source;
        if(target == null){
            throw new Error('Mat4.copy: invalid argument');
        }
        if(out == null){out = Mat4.create();}
        out[0]  = target[0];  out[1]  = target[1];  out[2]  = target[2];  out[3]  = target[3];
        out[4]  = target[4];  out[5]  = target[5];  out[6]  = target[6];  out[7]  = target[7];
        out[8]  = target[8];  out[9]  = target[9];  out[10] = target[10]; out[11] = target[11];
        out[12] = target[12]; out[13] = target[13]; out[14] = target[14]; out[15] = target[15];
        return out;
    }
    /**
     * 行列を乗算して返す（第三引数が与えられた場合その行列に結果を代入する）
     * @param {Mat4} mat0 - 乗算される行列
     * @param {Mat4} mat1 - 乗算する行列
     * @param {Mat4} [source] - 乗算結果を格納する行列
     * @return {Mat4} 乗算結果の行列
     */
    static multiply(mat0, mat1, source){
        let out = source;
        if(out == null){out = Mat4.create();}
        let a = mat0[0],  b = mat0[1],  c = mat0[2],  d = mat0[3],
            e = mat0[4],  f = mat0[5],  g = mat0[6],  h = mat0[7],
            i = mat0[8],  j = mat0[9],  k = mat0[10], l = mat0[11],
            m = mat0[12], n = mat0[13], o = mat0[14], p = mat0[15],
            A = mat1[0],  B = mat1[1],  C = mat1[2],  D = mat1[3],
            E = mat1[4],  F = mat1[5],  G = mat1[6],  H = mat1[7],
            I = mat1[8],  J = mat1[9],  K = mat1[10], L = mat1[11],
            M = mat1[12], N = mat1[13], O = mat1[14], P = mat1[15];
        out[0]  = A * a + B * e + C * i + D * m;
        out[1]  = A * b + B * f + C * j + D * n;
        out[2]  = A * c + B * g + C * k + D * o;
        out[3]  = A * d + B * h + C * l + D * p;
        out[4]  = E * a + F * e + G * i + H * m;
        out[5]  = E * b + F * f + G * j + H * n;
        out[6]  = E * c + F * g + G * k + H * o;
        out[7]  = E * d + F * h + G * l + H * p;
        out[8]  = I * a + J * e + K * i + L * m;
        out[9]  = I * b + J * f + K * j + L * n;
        out[10] = I * c + J * g + K * k + L * o;
        out[11] = I * d + J * h + K * l + L * p;
        out[12] = M * a + N * e + O * i + P * m;
        out[13] = M * b + N * f + O * j + P * n;
        out[14] = M * c + N * g + O * k + P * o;
        out[15] = M * d + N * h + O * l + P * p;
        return out;
    }
    /**
     * 行列に拡大縮小を適用する（第三引数が与えられた場合その行列に結果を代入する）
     * @param {Mat4} mat - 適用を受ける行列
     * @param {Vec3} vec - XYZ の各軸に対して拡縮を適用する値のベクトル
     * @param {Mat4} [source] - 結果を格納する行列
     * @return {Mat4} 結果の行列
     */
    static scale(mat, vec, source){
        let out = source;
        if(out == null){out = Mat4.create();}
        out[0]  = mat[0]  * vec[0];
        out[1]  = mat[1]  * vec[0];
        out[2]  = mat[2]  * vec[0];
        out[3]  = mat[3]  * vec[0];
        out[4]  = mat[4]  * vec[1];
        out[5]  = mat[5]  * vec[1];
        out[6]  = mat[6]  * vec[1];
        out[7]  = mat[7]  * vec[1];
        out[8]  = mat[8]  * vec[2];
        out[9]  = mat[9]  * vec[2];
        out[10] = mat[10] * vec[2];
        out[11] = mat[11] * vec[2];
        out[12] = mat[12];
        out[13] = mat[13];
        out[14] = mat[14];
        out[15] = mat[15];
        return out;
    }
    /**
     * 行列に平行移動を適用する（第三引数が与えられた場合その行列に結果を代入する）
     * @param {Mat4} mat - 適用を受ける行列
     * @param {Vec3} vec - XYZ の各軸に対して平行移動を適用する値の行列
     * @param {Mat4} [source] - 結果を格納する行列
     * @return {Mat4} 結果の行列
     */
    static translate(mat, vec, source){
        let out = source;
        if(out == null){out = Mat4.create();}
        out[0] = mat[0]; out[1] = mat[1]; out[2]  = mat[2];  out[3]  = mat[3];
        out[4] = mat[4]; out[5] = mat[5]; out[6]  = mat[6];  out[7]  = mat[7];
        out[8] = mat[8]; out[9] = mat[9]; out[10] = mat[10]; out[11] = mat[11];
        out[12] = mat[0] * vec[0] + mat[4] * vec[1] + mat[8]  * vec[2] + mat[12];
        out[13] = mat[1] * vec[0] + mat[5] * vec[1] + mat[9]  * vec[2] + mat[13];
        out[14] = mat[2] * vec[0] + mat[6] * vec[1] + mat[10] * vec[2] + mat[14];
        out[15] = mat[3] * vec[0] + mat[7] * vec[1] + mat[11] * vec[2] + mat[15];
        return out;
    }
    /**
     * 行列に回転を適用する（第四引数が与えられた場合その行列に結果を代入する）
     * @param {Mat4} mat - 適用を受ける行列
     * @param {number} angle - 回転量を表す値（ラジアン）
     * @param {Vec3} axis - 回転の軸
     * @param {Mat4} [source] - 結果を格納する行列
     * @return {Mat4} 結果の行列
     */
    static rotate(mat, angle, axis, source){
        let out = source;
        if(out == null){out = Mat4.create();}
        let sq = Math.sqrt(axis[0] * axis[0] + axis[1] * axis[1] + axis[2] * axis[2]);
        if(!sq){return null;}
        let a = axis[0], b = axis[1], c = axis[2];
        if(sq != 1){sq = 1 / sq; a *= sq; b *= sq; c *= sq;}
        let d = Math.sin(angle), e = Math.cos(angle), f = 1 - e,
            g = mat[0],  h = mat[1], i = mat[2],  j = mat[3],
            k = mat[4],  l = mat[5], m = mat[6],  n = mat[7],
            o = mat[8],  p = mat[9], q = mat[10], r = mat[11],
            s = a * a * f + e,
            t = b * a * f + c * d,
            u = c * a * f - b * d,
            v = a * b * f - c * d,
            w = b * b * f + e,
            x = c * b * f + a * d,
            y = a * c * f + b * d,
            z = b * c * f - a * d,
            A = c * c * f + e;
        if(angle){
            if(mat != out){
                out[12] = mat[12]; out[13] = mat[13];
                out[14] = mat[14]; out[15] = mat[15];
            }
        }else{
            out = mat;
        }
        out[0]  = g * s + k * t + o * u;
        out[1]  = h * s + l * t + p * u;
        out[2]  = i * s + m * t + q * u;
        out[3]  = j * s + n * t + r * u;
        out[4]  = g * v + k * w + o * x;
        out[5]  = h * v + l * w + p * x;
        out[6]  = i * v + m * w + q * x;
        out[7]  = j * v + n * w + r * x;
        out[8]  = g * y + k * z + o * A;
        out[9]  = h * y + l * z + p * A;
        out[10] = i * y + m * z + q * A;
        out[11] = j * y + n * z + r * A;
        return out;
    }
    /**
     * ビュー座標変換行列を生成する（第四引数が与えられた場合その行列に結果を代入する）
     * @param {Vec3} eye - 視点位置
     * @param {Vec3} center - 注視点
     * @param {Vec3} up - 上方向を示すベクトル
     * @param {Mat4} [source] - 結果を格納する行列
     * @return {Mat4} 結果の行列
     */
    static lookAt(eye, center, up, source){
        let eyeX    = eye[0],    eyeY    = eye[1],    eyeZ    = eye[2],
            centerX = center[0], centerY = center[1], centerZ = center[2],
            upX     = up[0],     upY     = up[1],     upZ     = up[2];
        if(eyeX == centerX && eyeY == centerY && eyeZ == centerZ){return Mat4.identity(source);}
        let out = source;
        if(out == null){out = Mat4.create();}
        let x0, x1, x2, y0, y1, y2, z0, z1, z2, l;
        z0 = eyeX - center[0]; z1 = eyeY - center[1]; z2 = eyeZ - center[2];
        l = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
        z0 *= l; z1 *= l; z2 *= l;
        x0 = upY * z2 - upZ * z1;
        x1 = upZ * z0 - upX * z2;
        x2 = upX * z1 - upY * z0;
        l = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
        if(!l){
            x0 = 0; x1 = 0; x2 = 0;
        }else{
            l = 1 / l;
            x0 *= l; x1 *= l; x2 *= l;
        }
        y0 = z1 * x2 - z2 * x1; y1 = z2 * x0 - z0 * x2; y2 = z0 * x1 - z1 * x0;
        l = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
        if(!l){
            y0 = 0; y1 = 0; y2 = 0;
        }else{
            l = 1 / l;
            y0 *= l; y1 *= l; y2 *= l;
        }
        out[0] = x0; out[1] = y0; out[2]  = z0; out[3]  = 0;
        out[4] = x1; out[5] = y1; out[6]  = z1; out[7]  = 0;
        out[8] = x2; out[9] = y2; out[10] = z2; out[11] = 0;
        out[12] = -(x0 * eyeX + x1 * eyeY + x2 * eyeZ);
        out[13] = -(y0 * eyeX + y1 * eyeY + y2 * eyeZ);
        out[14] = -(z0 * eyeX + z1 * eyeY + z2 * eyeZ);
        out[15] = 1;
        return out;
    }
    /**
     * 透視投影変換行列を生成する（第五引数が与えられた場合その行列に結果を代入する）
     * @param {number} fovy - 視野角（度数法）
     * @param {number} aspect - アスペクト比（幅 / 高さ）
     * @param {number} near - ニアクリップ面までの距離
     * @param {number} far - ファークリップ面までの距離
     * @param {Mat4} [source] - 結果を格納する行列
     * @return {Mat4} 結果の行列
     */
    static perspective(fovy, aspect, near, far, source){
        let out = source;
        if(out == null){out = Mat4.create();}
        let t = near * Math.tan(fovy * Math.PI / 360);
        let r = t * aspect;
        let a = r * 2, b = t * 2, c = far - near;
        out[0]  = near * 2 / a;
        out[1]  = 0;
        out[2]  = 0;
        out[3]  = 0;
        out[4]  = 0;
        out[5]  = near * 2 / b;
        out[6]  = 0;
        out[7]  = 0;
        out[8]  = 0;
        out[9]  = 0;
        out[10] = -(far + near) / c;
        out[11] = -1;
        out[12] = 0;
        out[13] = 0;
        out[14] = -(far * near * 2) / c;
        out[15] = 0;
        return out;
    }
    /**
     * 正射影投影変換行列を生成する（第七引数が与えられた場合その行列に結果を代入する）
     * @param {number} left - 左端
     * @param {number} right - 右端
     * @param {number} top - 上端
     * @param {number} bottom - 下端
     * @param {number} near - ニアクリップ面までの距離
     * @param {number} far - ファークリップ面までの距離
     * @param {Mat4} [source] - 結果を格納する行列
     * @return {Mat4} 結果の行列
     */
    static ortho(left, right, top, bottom, near, far, source){
        let out = source;
        if(out == null){out = Mat4.create();}
        let h = (right - left);
        let v = (top - bottom);
        let d = (far - near);
        out[0]  = 2 / h;
        out[1]  = 0;
        out[2]  = 0;
        out[3]  = 0;
        out[4]  = 0;
        out[5]  = 2 / v;
        out[6]  = 0;
        out[7]  = 0;
        out[8]  = 0;
        out[9]  = 0;
        out[10] = -2 / d;
        out[11] = 0;
        out[12] = -(left + right) / h;
        out[13] = -(top + bottom) / v;
        out[14] = -(far + near) / d;
        out[15] = 1;
        return out;
    }
    /**
     * 転置行列を生成する（第二引数が与えられた場合その行列に結果を代入する）
     * @param {Mat4} mat - 適用する行列
     * @param {Mat4} [source] - 結果を格納する行列
     * @return {Mat4} 結果の行列
     */
    static transpose(mat, source){
        let out = source;
        if(out == null){out = Mat4.create();}
        out[0]  = mat[0];  out[1]  = mat[4];
        out[2]  = mat[8];  out[3]  = mat[12];
        out[4]  = mat[1];  out[5]  = mat[5];
        out[6]  = mat[9];  out[7]  = mat[13];
        out[8]  = mat[2];  out[9]  = mat[6];
        out[10] = mat[10]; out[11] = mat[14];
        out[12] = mat[3];  out[13] = mat[7];
        out[14] = mat[11]; out[15] = mat[15];
        return out;
    }
    /**
     * 逆行列を生成する（第二引数が与えられた場合その行列に結果を代入する）
     * @param {Mat4} mat - 適用する行列
     * @param {Mat4} [source] - 結果を格納する行列
     * @return {Mat4} 結果の行列
     */
    static inverse(mat, source){
        let out = source;
        if(out == null){out = Mat4.create();}
        let a = mat[0],  b = mat[1],  c = mat[2],  d = mat[3],
            e = mat[4],  f = mat[5],  g = mat[6],  h = mat[7],
            i = mat[8],  j = mat[9],  k = mat[10], l = mat[11],
            m = mat[12], n = mat[13], o = mat[14], p = mat[15],
            q = a * f - b * e, r = a * g - c * e,
            s = a * h - d * e, t = b * g - c * f,
            u = b * h - d * f, v = c * h - d * g,
            w = i * n - j * m, x = i * o - k * m,
            y = i * p - l * m, z = j * o - k * n,
            A = j * p - l * n, B = k * p - l * o,
            ivd = 1 / (q * B - r * A + s * z + t * y - u * x + v * w);
        out[0]  = ( f * B - g * A + h * z) * ivd;
        out[1]  = (-b * B + c * A - d * z) * ivd;
        out[2]  = ( n * v - o * u + p * t) * ivd;
        out[3]  = (-j * v + k * u - l * t) * ivd;
        out[4]  = (-e * B + g * y - h * x) * ivd;
        out[5]  = ( a * B - c * y + d * x) * ivd;
        out[6]  = (-m * v + o * s - p * r) * ivd;
        out[7]  = ( i * v - k * s + l * r) * ivd;
        out[8]  = ( e * A - f * y + h * w) * ivd;
        out[9]  = (-a * A + b * y - d * w) * ivd;
        out[10] = ( m * u - n * s + p * q) * ivd;
        out[11] = (-i * u + j * s - l * q) * ivd;
        out[12] = (-e * z + f * x - g * w) * ivd;
        out[13] = ( a * z - b * x + c * w) * ivd;
        out[14] = (-m * t + n * r - o * q) * ivd;
        out[15] = ( i * t - j * r + k * q) * ivd;
        return out;
    }
    /**
     * 行列にベクトルを乗算する（ベクトルに行列を適用する）
     * @param {Mat4} mat - 適用する行列
     * @param {Array.<number>} vec - 乗算するベクトル（４つの要素を持つ配列）
     * @return {Float32Array} 結果のベクトル
     */
    static toVecIV(mat, vec){
        let a = mat[0],  b = mat[1],  c = mat[2],  d = mat[3],
            e = mat[4],  f = mat[5],  g = mat[6],  h = mat[7],
            i = mat[8],  j = mat[9],  k = mat[10], l = mat[11],
            m = mat[12], n = mat[13], o = mat[14], p = mat[15];
        let x = vec[0], y = vec[1], z = vec[2], w = vec[3];
        let out = [];
        out[0] = x * a + y * e + z * i + w * m;
        out[1] = x * b + y * f + z * j + w * n;
        out[2] = x * c + y * g + z * k + w * o;
        out[3] = x * d + y * h + z * l + w * p;
        vec = out;
        return out;
    }
    /**
     * カメラのプロパティに相当する情報を受け取り行列を生成する
     * @param {Vec3} position - カメラの座標
     * @param {Vec3} centerPoint - カメラの注視点
     * @param {Vec3} upDirection - カメラの上方向
     * @param {number} fovy - 視野角
     * @param {number} aspect - アスペクト比
     * @param {number} near - ニアクリップ面
     * @param {number} far - ファークリップ面
     * @param {Mat4} vmat - ビュー座標変換行列の結果を格納する行列
     * @param {Mat4} pmat - 透視投影座標変換行列の結果を格納する行列
     * @param {Mat4} vpmat - ビュー x 透視投影変換行列の結果を格納する行列
     */
    static vpFromCameraProperty(position, centerPoint, upDirection, fovy, aspect, near, far, vmat, pmat, vpmat){
        Mat4.lookAt(position, centerPoint, upDirection, vmat);
        Mat4.perspective(fovy, aspect, near, far, pmat);
        Mat4.multiply(pmat, vmat, vpmat);
        return {
            view: vmat,
            projection: pmat,
            viewProjection: vpmat,
        };
    }
    /**
     * MVP 行列に相当する行列を受け取りベクトルを変換して返す
     * @param {Mat4} mat - MVP 行列
     * @param {Array.<number>} vec - MVP 行列と乗算する３つの要素を持つベクトル
     * @param {number} width - ビューポートの幅
     * @param {number} height - ビューポートの高さ
     * @return {Array.<number>} 結果のベクトル（２つの要素を持つベクトル）
     */
    static screenPositionFromMvp(mat, vec, width, height){
        let halfWidth = width * 0.5;
        let halfHeight = height * 0.5;
        let v = Mat4.toVecIV(mat, [vec[0], vec[1], vec[2], 1.0]);
        if(v[3] <= 0.0){return [NaN, NaN];}
        v[0] /= v[3]; v[1] /= v[3]; v[2] /= v[3];
        return [
            halfWidth + v[0] * halfWidth,
            halfHeight - v[1] * halfHeight
        ];
    }
    /**
     * 平行移動ベクトル、回転クォータニオン、拡大縮小ベクトルから行列を生成する
     * @param {Vec3} translation - 平行移動ベクトル
     * @param {Qtn} qtn - 回転を表すクォータニオン
     * @param {Vec3} scale - 拡大縮小ベクトル
     * @param {Mat4} [source] - 結果を格納する行列
     * @return {Mat4} 結果の行列
     */
    static compose(translation, qtn, scale, source){
        let out = source;
        if(out == null){out = Mat4.create();}
        let x = qtn[0], y = qtn[1], z = qtn[2], w = qtn[3];
        let x2 = x + x,  y2 = y + y,  z2 = z + z;
        let xx = x * x2, xy = x * y2, xz = x * z2;
        let yy = y * y2, yz = y * z2, zz = z * z2;
        let wx = w * x2, wy = w * y2, wz = w * z2;
        let sx = scale[0], sy = scale[1], sz = scale[2];

        out[0]  = (1 - (yy + zz)) * sx;
        out[1]  = (xy + wz) * sx;
        out[2]  = (xz - wy) * sx;
        out[3]  = 0;
        out[4]  = (xy - wz) * sy;
        out[5]  = (1 - (xx + zz)) * sy;
        out[6]  = (yz + wx) * sy;
        out[7]  = 0;
        out[8]  = (xz + wy) * sz;
        out[9]  = (yz - wx) * sz;
        out[10] = (1 - (xx + yy)) * sz;
        out[11] = 0;
        out[12] = translation[0];
        out[13] = translation[1];
        out[14] = translation[2];
        out[15] = 1;
        return out;
    }
}

/**
 * Vec3
 * @class Vec3
 */
export class Vec3 {
    /**
     * ３つの要素を持つベクトルを生成する
     * @return {Float32Array} ベクトル格納用の配列
     */
    static create(){
        return new Float32Array(3);
    }
    /**
     * ベクトルの値をコピーして返す（第二引数が与えられた場合そのベクトルがコピー先となる）
     * @param {Vec3} target - コピー元のベクトル
     * @param {Vec3} [source] - コピー先のベクトル
     * @return {Vec3} コピー先のベクトル
     */
    static copy(target, source){
        let out = source;
        if(target == null){
            throw new Error('Vec3.copy: invalid argument');
        }
        if(out == null){out = Vec3.create();}
        out[0] = target[0];
        out[1] = target[1];
        out[2] = target[2];
        return out;
    }
    /**
     * ベクトルの長さ（大きさ）を返す
     * @param {Vec3} v - ３つの要素を持つベクトル
     * @return {number} ベクトルの長さ（大きさ）
     */
    static length(v){
        return Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
    }
    /**
     * ２つの座標（始点・終点）を結ぶベクトルを返す
     * @param {Vec3} v0 - ３つの要素を持つ始点座標
     * @param {Vec3} v1 - ３つの要素を持つ終点座標
     * @return {Vec3} 視点と終点を結ぶベクトル
     */
    static distance(v0, v1){
        let out = Vec3.create();
        out[0] = v1[0] - v0[0];
        out[1] = v1[1] - v0[1];
        out[2] = v1[2] - v0[2];
        return out;
    }
    /**
     * ベクトルを正規化した結果を返す
     * @param {Vec3} v - ３つの要素を持つベクトル
     * @return {Vec3} 正規化したベクトル
     */
    static normalize(v){
        let out = Vec3.create();
        let l = Vec3.length(v);
        if(l > 0){
            let e = 1.0 / l;
            out[0] = v[0] * e;
            out[1] = v[1] * e;
            out[2] = v[2] * e;
        }else{
            out[0] = 0.0;
            out[1] = 0.0;
            out[2] = 0.0;
        }
        return out;
    }
    /**
     * ２つのベクトルの内積の結果を返す
     * @param {Vec3} v0 - ３つの要素を持つベクトル
     * @param {Vec3} v1 - ３つの要素を持つベクトル
     * @return {number} 内積の結果
     */
    static dot(v0, v1){
        return v0[0] * v1[0] + v0[1] * v1[1] + v0[2] * v1[2];
    }
    /**
     * ２つのベクトルの外積の結果を返す
     * @param {Vec3} v0 - ３つの要素を持つベクトル
     * @param {Vec3} v1 - ３つの要素を持つベクトル
     * @return {Vec3} 外積の結果
     */
    static cross(v0, v1){
        let out = Vec3.create();
        out[0] = v0[1] * v1[2] - v0[2] * v1[1];
        out[1] = v0[2] * v1[0] - v0[0] * v1[2];
        out[2] = v0[0] * v1[1] - v0[1] * v1[0];
        return out;
    }
    /**
     * ３つのベクトルから面法線を求めて返す
     * @param {Vec3} v0 - ３つの要素を持つベクトル
     * @param {Vec3} v1 - ３つの要素を持つベクトル
     * @param {Vec3} v2 - ３つの要素を持つベクトル
     * @return {Vec3} 面法線ベクトル
     */
    static faceNormal(v0, v1, v2){
        let out = Vec3.create();
        let vec1 = [v1[0] - v0[0], v1[1] - v0[1], v1[2] - v0[2]];
        let vec2 = [v2[0] - v0[0], v2[1] - v0[1], v2[2] - v0[2]];
        out[0] = vec1[1] * vec2[2] - vec1[2] * vec2[1];
        out[1] = vec1[2] * vec2[0] - vec1[0] * vec2[2];
        out[2] = vec1[0] * vec2[1] - vec1[1] * vec2[0];
        return Vec3.normalize(out);
    }
}

/**
 * Vec2
 * @class Vec2
 */
export class Vec2 {
    /**
     * ２つの要素を持つベクトルを生成する
     * @return {Float32Array} ベクトル格納用の配列
     */
    static create(){
        return new Float32Array(2);
    }
    /**
     * ベクトルの値をコピーして返す（第二引数が与えられた場合そのベクトルがコピー先となる）
     * @param {Vec2} target - コピー元のベクトル
     * @param {Vec2} [source] - コピー先のベクトル
     * @return {Vec2} コピー先のベクトル
     */
    static copy(target, source){
        let out = source;
        if(target == null){
            throw new Error('Vec2.copy: invalid argument');
        }
        if(out == null){out = Vec2.create();}
        out[0] = target[0];
        out[1] = target[1];
        return out;
    }
    /**
     * ベクトルの長さ（大きさ）を返す
     * @param {Vec2} v - ２つの要素を持つベクトル
     * @return {number} ベクトルの長さ（大きさ）
     */
    static length(v){
        return Math.sqrt(v[0] * v[0] + v[1] * v[1]);
    }
    /**
     * ２つの座標（始点・終点）を結ぶベクトルを返す
     * @param {Vec2} v0 - ２つの要素を持つ始点座標
     * @param {Vec2} v1 - ２つの要素を持つ終点座標
     * @return {Vec2} 視点と終点を結ぶベクトル
     */
    static distance(v0, v1){
        let out = Vec2.create();
        out[0] = v1[0] - v0[0];
        out[1] = v1[1] - v0[1];
        return out;
    }
    /**
     * ベクトルを正規化した結果を返す
     * @param {Vec2} v - ２つの要素を持つベクトル
     * @return {Vec2} 正規化したベクトル
     */
    static normalize(v){
        let out = Vec2.create();
        let l = Vec2.length(v);
        if(l > 0){
            let e = 1.0 / l;
            out[0] = v[0] * e;
            out[1] = v[1] * e;
        }
        return out;
    }
    /**
     * ２つのベクトルの内積の結果を返す
     * @param {Vec2} v0 - ２つの要素を持つベクトル
     * @param {Vec2} v1 - ２つの要素を持つベクトル
     * @return {number} 内積の結果
     */
    static dot(v0, v1){
        return v0[0] * v1[0] + v0[1] * v1[1];
    }
    /**
     * ２つのベクトルの外積の結果を返す
     * @param {Vec2} v0 - ２つの要素を持つベクトル
     * @param {Vec2} v1 - ２つの要素を持つベクトル
     * @return {number} 外積の結果
     */
    static cross(v0, v1){
        return v0[0] * v1[1] - v0[1] * v1[0];
    }
}

/**
 * Qtn
 * @class Qtn
 */
export class Qtn {
    /**
     * ４つの要素からなるクォータニオンのデータ構造を生成する（虚部 x, y, z, 実部 w の順序で定義）
     * @return {Float32Array} クォータニオンデータ格納用の配列
     */
    static create(){
        return new Float32Array(4);
    }
    /**
     * クォータニオンを初期化する（引数が与えられた場合そのクォータニオンに結果を代入する）
     * @param {Qtn} [source] - 初期化するクォータニオン
     * @return {Qtn} 結果のクォータニオン
     */
    static identity(source){
        let out = source;
        if(out == null){out = Qtn.create();}
        out[0] = 0; out[1] = 0; out[2] = 0; out[3] = 1;
        return out;
    }
    /**
     * クォータニオンの値をコピーして返す（第二引数が与えられた場合そのクォータニオンがコピー先となる）
     * @param {Qtn} target - コピー元のクォータニオン
     * @param {Qtn} [source] - コピー先のクォータニオン
     * @return {Qtn} コピー先のクォータニオン
     */
    static copy(target, source){
        let out = source;
        if(target == null){
            throw new Error('Qtn.copy: invalid argument');
        }
        if(out == null){out = Qtn.create();}
        out[0] = target[0];
        out[1] = target[1];
        out[2] = target[2];
        out[3] = target[3];
        return out;
    }
    /**
     * 共役四元数を生成して返す（第二引数が与えられた場合そのクォータニオンに結果を代入する）
     * @param {Qtn} qtn - 元となるクォータニオン
     * @param {Qtn} [source] - 結果を格納するクォータニオン
     * @return {Qtn} 結果のクォータニオン
     */
    static inverse(qtn, source){
        let out = source;
        if(out == null){out = Qtn.create();}
        out[0] = -qtn[0];
        out[1] = -qtn[1];
        out[2] = -qtn[2];
        out[3] =  qtn[3];
        return out;
    }
    /**
     * 虚部を正規化して返す
     * @param {Qtn} source - 元となるクォータニオン
     * @return {Qtn} 結果のクォータニオン
     */
    static normalize(source){
        let x = source[0], y = source[1], z = source[2];
        let l = Math.sqrt(x * x + y * y + z * z);
        if(l === 0){
            source[0] = 0;
            source[1] = 0;
            source[2] = 0;
        }else{
            l = 1 / l;
            source[0] = x * l;
            source[1] = y * l;
            source[2] = z * l;
        }
        return source;
    }
    /**
     * クォータニオンを乗算した結果を返す（第三引数が与えられた場合そのクォータニオンに結果を代入する）
     * @param {Qtn} qtn0 - 乗算されるクォータニオン
     * @param {Qtn} qtn1 - 乗算するクォータニオン
     * @param {Qtn} [source] - 結果を格納するクォータニオン
     * @return {Qtn} 結果のクォータニオン
     */
    static multiply(qtn0, qtn1, source){
        let out = source;
        if(out == null){out = Qtn.create();}
        let ax = qtn0[0], ay = qtn0[1], az = qtn0[2], aw = qtn0[3];
        let bx = qtn1[0], by = qtn1[1], bz = qtn1[2], bw = qtn1[3];
        out[0] = ax * bw + aw * bx + ay * bz - az * by;
        out[1] = ay * bw + aw * by + az * bx - ax * bz;
        out[2] = az * bw + aw * bz + ax * by - ay * bx;
        out[3] = aw * bw - ax * bx - ay * by - az * bz;
        return out;
    }
    /**
     * クォータニオンに回転を適用し返す（第三引数が与えられた場合そのクォータニオンに結果を代入する）
     * @param {number} angle - 回転する量（ラジアン）
     * @param {Vec3} axis - ３つの要素を持つ軸ベクトル
     * @param {Qtn} [source] - 結果を格納するクォータニオン
     * @return {Qtn} 結果のクォータニオン
     */
    static rotate(angle, axis, source){
        let out = source;
        if(out == null){out = Qtn.create();}
        let a = axis[0], b = axis[1], c = axis[2];
        let sq = Math.sqrt(axis[0] * axis[0] + axis[1] * axis[1] + axis[2] * axis[2]);
        if(sq !== 0){
            let l = 1 / sq;
            a *= l;
            b *= l;
            c *= l;
        }
        let s = Math.sin(angle * 0.5);
        out[0] = a * s;
        out[1] = b * s;
        out[2] = c * s;
        out[3] = Math.cos(angle * 0.5);
        return out;
    }
    /**
     * ベクトルにクォータニオンを適用し返す（第三引数が与えられた場合そのベクトルに結果を代入する）
     * @param {Vec3} vec - ３つの要素を持つベクトル
     * @param {Qtn} qtn - クォータニオン
     * @param {Vec3} [source] - ３つの要素を持つベクトル
     * @return {Vec3} 結果のベクトル
     */
    static toVecIII(vec, qtn, source){
        let out = source;
        if(out == null){out = Vec3.create();}
        let qp = Qtn.create();
        let qq = Qtn.create();
        let qr = Qtn.create();
        Qtn.inverse(qtn, qr);
        qp[0] = vec[0];
        qp[1] = vec[1];
        qp[2] = vec[2];
        Qtn.multiply(qr, qp, qq);
        Qtn.multiply(qq, qtn, qr);
        out[0] = qr[0];
        out[1] = qr[1];
        out[2] = qr[2];
        return out;
    }
    /**
     * 4x4 行列にクォータニオンを適用し返す（第二引数が与えられた場合その行列に結果を代入する）
     * @param {Qtn} qtn - クォータニオン
     * @param {Mat4} [source] - 4x4 行列
     * @return {Mat4} 結果の行列
     */
    static toMatIV(qtn, source){
        let out = source;
        if(out == null){out = Mat4.create();}
        let x = qtn[0], y = qtn[1], z = qtn[2], w = qtn[3];
        let x2 = x + x, y2 = y + y, z2 = z + z;
        let xx = x * x2, xy = x * y2, xz = x * z2;
        let yy = y * y2, yz = y * z2, zz = z * z2;
        let wx = w * x2, wy = w * y2, wz = w * z2;
        out[0]  = 1 - (yy + zz);
        out[1]  = xy - wz;
        out[2]  = xz + wy;
        out[3]  = 0;
        out[4]  = xy + wz;
        out[5]  = 1 - (xx + zz);
        out[6]  = yz - wx;
        out[7]  = 0;
        out[8]  = xz - wy;
        out[9]  = yz + wx;
        out[10] = 1 - (xx + yy);
        out[11] = 0;
        out[12] = 0;
        out[13] = 0;
        out[14] = 0;
        out[15] = 1;
        return out;
    }
    /**
     * ２つのクォータニオンの球面線形補間を行った結果を返す（第四引数が与えられた場合そのクォータニオンに結果を代入する）
     * @param {Qtn} qtn0 - クォータニオン
     * @param {Qtn} qtn1 - クォータニオン
     * @param {number} time - 補間係数（0.0 から 1.0 で指定）
     * @param {Qtn} [source] - 結果を格納するクォータニオン
     * @return {Qtn} 結果のクォータニオン
     */
    static slerp(qtn0, qtn1, time, source){
        let out = source;
        if(out == null){out = Qtn.create();}
        let ht = qtn0[0] * qtn1[0] + qtn0[1] * qtn1[1] + qtn0[2] * qtn1[2] + qtn0[3] * qtn1[3];
        let hs = 1.0 - ht * ht;
        if(hs <= 0.0){
            out[0] = qtn0[0];
            out[1] = qtn0[1];
            out[2] = qtn0[2];
            out[3] = qtn0[3];
        }else{
            hs = Math.sqrt(hs);
            if(Math.abs(hs) < 0.0001){
                out[0] = (qtn0[0] * 0.5 + qtn1[0] * 0.5);
                out[1] = (qtn0[1] * 0.5 + qtn1[1] * 0.5);
                out[2] = (qtn0[2] * 0.5 + qtn1[2] * 0.5);
                out[3] = (qtn0[3] * 0.5 + qtn1[3] * 0.5);
            }else{
                let ph = Math.acos(ht);
                let pt = ph * time;
                let t0 = Math.sin(ph - pt) / hs;
                let t1 = Math.sin(pt) / hs;
                out[0] = qtn0[0] * t0 + qtn1[0] * t1;
                out[1] = qtn0[1] * t0 + qtn1[1] * t1;
                out[2] = qtn0[2] * t0 + qtn1[2] * t1;
                out[3] = qtn0[3] * t0 + qtn1[3] * t1;
            }
        }
        return out;
    }
}

/**
 * Geometry
 * @class Geometry
 */
export class Geometry {
    /**
     * 板ポリゴンの頂点情報を生成する
     * @param {number} width - 板ポリゴンの一辺の幅
     * @param {number} height - 板ポリゴンの一辺の高さ
     * @param {Array.<number>} color - RGBA を 0.0 から 1.0 の範囲で指定した配列
     * @return {object}
     * @property {Array.<number>} position - 頂点座標
     * @property {Array.<number>} normal - 頂点法線
     * @property {Array.<number>} color - 頂点カラー
     * @property {Array.<number>} texCoord - テクスチャ座標
     * @property {Array.<number>} index - 頂点インデックス（gl.TRIANGLES）
     * @example
     * let planeData = Geometry.plane(2.0, 2.0, [1.0, 1.0, 1.0, 1.0]);
     */
    static plane(width, height, color){
        let w, h;
        w = width / 2;
        h = height / 2;
        if(color){
            tc = color;
        }else{
            tc = [1.0, 1.0, 1.0, 1.0];
        }
        let pos = [
            -w,  h,  0.0,
             w,  h,  0.0,
            -w, -h,  0.0,
             w, -h,  0.0
        ];
        let nor = [
            0.0, 0.0, 1.0,
            0.0, 0.0, 1.0,
            0.0, 0.0, 1.0,
            0.0, 0.0, 1.0
        ];
        let col = [
            color[0], color[1], color[2], color[3],
            color[0], color[1], color[2], color[3],
            color[0], color[1], color[2], color[3],
            color[0], color[1], color[2], color[3]
        ];
        let st  = [
            0.0, 0.0,
            1.0, 0.0,
            0.0, 1.0,
            1.0, 1.0
        ];
        let idx = [
            0, 1, 2,
            2, 1, 3
        ];
        return {position: pos, normal: nor, color: col, texCoord: st, index: idx}
    }

    /**
     * 円（XY 平面展開）の頂点情報を生成する
     * @param {number} split - 円の円周の分割数
     * @param {number} rad - 円の半径
     * @param {Array.<number>} color - RGBA を 0.0 から 1.0 の範囲で指定した配列
     * @return {object}
     * @property {Array.<number>} position - 頂点座標
     * @property {Array.<number>} normal - 頂点法線
     * @property {Array.<number>} color - 頂点カラー
     * @property {Array.<number>} texCoord - テクスチャ座標
     * @property {Array.<number>} index - 頂点インデックス（gl.TRIANGLES）
     * @example
     * let circleData = Geometry.circle(64, 1.0, [1.0, 1.0, 1.0, 1.0]);
     */
    static circle(split, rad, color){
        let i, j = 0;
        let pos = [], nor = [],
            col = [], st  = [], idx = [];
        pos.push(0.0, 0.0, 0.0);
        nor.push(0.0, 0.0, 1.0);
        col.push(color[0], color[1], color[2], color[3]);
        st.push(0.5, 0.5);
        for(i = 0; i < split; i++){
            let r = Math.PI * 2.0 / split * i;
            let rx = Math.cos(r);
            let ry = Math.sin(r);
            pos.push(rx * rad, ry * rad, 0.0);
            nor.push(0.0, 0.0, 1.0);
            col.push(color[0], color[1], color[2], color[3]);
            st.push((rx + 1.0) * 0.5, 1.0 - (ry + 1.0) * 0.5);
            if(i === split - 1){
                idx.push(0, j + 1, 1);
            }else{
                idx.push(0, j + 1, j + 2);
            }
            ++j;
        }
        return {position: pos, normal: nor, color: col, texCoord: st, index: idx}
    }

    /**
     * キューブの頂点情報を生成する
     * @param {number} side - 正立方体の一辺の長さ
     * @param {Array.<number>} color - RGBA を 0.0 から 1.0 の範囲で指定した配列
     * @return {object}
     * @property {Array.<number>} position - 頂点座標
     * @property {Array.<number>} normal - 頂点法線 ※キューブの中心から各頂点に向かって伸びるベクトルなので注意
     * @property {Array.<number>} color - 頂点カラー
     * @property {Array.<number>} texCoord - テクスチャ座標
     * @property {Array.<number>} index - 頂点インデックス（gl.TRIANGLES）
     * @example
     * let cubeData = Geometry.cube(2.0, [1.0, 1.0, 1.0, 1.0]);
     */
    static cube(side, color){
        let hs = side * 0.5;
        let pos = [
            -hs, -hs,  hs,  hs, -hs,  hs,  hs,  hs,  hs, -hs,  hs,  hs,
            -hs, -hs, -hs, -hs,  hs, -hs,  hs,  hs, -hs,  hs, -hs, -hs,
            -hs,  hs, -hs, -hs,  hs,  hs,  hs,  hs,  hs,  hs,  hs, -hs,
            -hs, -hs, -hs,  hs, -hs, -hs,  hs, -hs,  hs, -hs, -hs,  hs,
             hs, -hs, -hs,  hs,  hs, -hs,  hs,  hs,  hs,  hs, -hs,  hs,
            -hs, -hs, -hs, -hs, -hs,  hs, -hs,  hs,  hs, -hs,  hs, -hs
        ];
        let v = 1.0 / Math.sqrt(3.0);
        let nor = [
            -v, -v,  v,  v, -v,  v,  v,  v,  v, -v,  v,  v,
            -v, -v, -v, -v,  v, -v,  v,  v, -v,  v, -v, -v,
            -v,  v, -v, -v,  v,  v,  v,  v,  v,  v,  v, -v,
            -v, -v, -v,  v, -v, -v,  v, -v,  v, -v, -v,  v,
             v, -v, -v,  v,  v, -v,  v,  v,  v,  v, -v,  v,
            -v, -v, -v, -v, -v,  v, -v,  v,  v, -v,  v, -v
        ];
        let col = [];
        for(let i = 0; i < pos.length / 3; i++){
            col.push(color[0], color[1], color[2], color[3]);
        }
        let st = [
            0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
            0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
            0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
            0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
            0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
            0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0
        ];
        let idx = [
             0,  1,  2,  0,  2,  3,
             4,  5,  6,  4,  6,  7,
             8,  9, 10,  8, 10, 11,
            12, 13, 14, 12, 14, 15,
            16, 17, 18, 16, 18, 19,
            20, 21, 22, 20, 22, 23
        ];
        return {position: pos, normal: nor, color: col, texCoord: st, index: idx}
    }

    /**
     * 三角錐の頂点情報を生成する
     * @param {number} split - 底面円の円周の分割数
     * @param {number} rad - 底面円の半径
     * @param {number} height - 三角錐の高さ
     * @param {Array.<number>} color - RGBA を 0.0 から 1.0 の範囲で指定した配列
     * @return {object}
     * @property {Array.<number>} position - 頂点座標
     * @property {Array.<number>} normal - 頂点法線
     * @property {Array.<number>} color - 頂点カラー
     * @property {Array.<number>} texCoord - テクスチャ座標
     * @property {Array.<number>} index - 頂点インデックス（gl.TRIANGLES）
     * @example
     * let coneData = Geometry.cone(64, 1.0, 2.0, [1.0, 1.0, 1.0, 1.0]);
     */
    static cone(split, rad, height, color){
        let i, j = 0;
        let h = height / 2.0;
        let pos = [], nor = [],
            col = [], st  = [], idx = [];
        pos.push(0.0, -h, 0.0);
        nor.push(0.0, -1.0, 0.0);
        col.push(color[0], color[1], color[2], color[3]);
        st.push(0.5, 0.5);
        for(i = 0; i <= split; i++){
            let r = Math.PI * 2.0 / split * i;
            let rx = Math.cos(r);
            let rz = Math.sin(r);
            pos.push(
                rx * rad, -h, rz * rad,
                rx * rad, -h, rz * rad
            );
            nor.push(
                0.0, -1.0, 0.0,
                rx, 0.0, rz
            );
            col.push(
                color[0], color[1], color[2], color[3],
                color[0], color[1], color[2], color[3]
            );
            st.push(
                (rx + 1.0) * 0.5, 1.0 - (rz + 1.0) * 0.5,
                (rx + 1.0) * 0.5, 1.0 - (rz + 1.0) * 0.5
            );
            if(i !== split){
                idx.push(0, j + 1, j + 3);
                idx.push(j + 4, j + 2, split * 2 + 3);
            }
            j += 2;
        }
        pos.push(0.0, h, 0.0);
        nor.push(0.0, 1.0, 0.0);
        col.push(color[0], color[1], color[2], color[3]);
        st.push(0.5, 0.5);
        return {position: pos, normal: nor, color: col, texCoord: st, index: idx}
    }

    /**
     * 円柱の頂点情報を生成する
     * @param {number} split - 円柱の円周の分割数
     * @param {number} topRad - 円柱の天面の半径
     * @param {number} bottomRad - 円柱の底面の半径
     * @param {number} height - 円柱の高さ
     * @param {Array.<number>} color - RGBA を 0.0 から 1.0 の範囲で指定した配列
     * @return {object}
     * @property {Array.<number>} position - 頂点座標
     * @property {Array.<number>} normal - 頂点法線
     * @property {Array.<number>} color - 頂点カラー
     * @property {Array.<number>} texCoord - テクスチャ座標
     * @property {Array.<number>} index - 頂点インデックス（gl.TRIANGLES）
     * @example
     * let cylinderData = Geometry.cylinder(64, 0.5, 1.0, 2.0, [1.0, 1.0, 1.0, 1.0]);
     */
    static cylinder(split, topRad, bottomRad, height, color){
        let i, j = 2;
        let h = height / 2.0;
        let pos = [], nor = [],
            col = [], st  = [], idx = [];
        pos.push(0.0, h, 0.0, 0.0, -h, 0.0,);
        nor.push(0.0, 1.0, 0.0, 0.0, -1.0, 0.0);
        col.push(
            color[0], color[1], color[2], color[3],
            color[0], color[1], color[2], color[3]
        );
        st.push(0.5, 0.5, 0.5, 0.5);
        for(i = 0; i <= split; i++){
            let r = Math.PI * 2.0 / split * i;
            let rx = Math.cos(r);
            let rz = Math.sin(r);
            pos.push(
                rx * topRad,  h, rz * topRad,
                rx * topRad,  h, rz * topRad,
                rx * bottomRad, -h, rz * bottomRad,
                rx * bottomRad, -h, rz * bottomRad
            );
            nor.push(
                0.0, 1.0, 0.0,
                rx, 0.0, rz,
                0.0, -1.0, 0.0,
                rx, 0.0, rz
            );
            col.push(
                color[0], color[1], color[2], color[3],
                color[0], color[1], color[2], color[3],
                color[0], color[1], color[2], color[3],
                color[0], color[1], color[2], color[3]
            );
            st.push(
                (rx + 1.0) * 0.5, 1.0 - (rz + 1.0) * 0.5,
                1.0 - i / split, 0.0,
                (rx + 1.0) * 0.5, 1.0 - (rz + 1.0) * 0.5,
                1.0 - i / split, 1.0
            );
            if(i !== split){
                idx.push(
                    0, j + 4, j,
                    1, j + 2, j + 6,
                    j + 5, j + 7, j + 1,
                    j + 1, j + 7, j + 3
                );
            }
            j += 4;
        }
        return {position: pos, normal: nor, color: col, texCoord: st, index: idx}
    }

    /**
     * 球体の頂点情報を生成する
     * @param {number} row - 球の縦方向（緯度方向）の分割数
     * @param {number} column - 球の横方向（経度方向）の分割数
     * @param {number} rad - 球の半径
     * @param {Array.<number>} color - RGBA を 0.0 から 1.0 の範囲で指定した配列
     * @return {object}
     * @property {Array.<number>} position - 頂点座標
     * @property {Array.<number>} normal - 頂点法線
     * @property {Array.<number>} color - 頂点カラー
     * @property {Array.<number>} texCoord - テクスチャ座標
     * @property {Array.<number>} index - 頂点インデックス（gl.TRIANGLES）
     * @example
     * let sphereData = Geometry.sphere(64, 64, 1.0, [1.0, 1.0, 1.0, 1.0]);
     */
    static sphere(row, column, rad, color){
        let i, j;
        let pos = [], nor = [],
            col = [], st  = [], idx = [];
        for(i = 0; i <= row; i++){
            let r = Math.PI / row * i;
            let ry = Math.cos(r);
            let rr = Math.sin(r);
            for(j = 0; j <= column; j++){
                let tr = Math.PI * 2 / column * j;
                let tx = rr * rad * Math.cos(tr);
                let ty = ry * rad;
                let tz = rr * rad * Math.sin(tr);
                let rx = rr * Math.cos(tr);
                let rz = rr * Math.sin(tr);
                pos.push(tx, ty, tz);
                nor.push(rx, ry, rz);
                col.push(color[0], color[1], color[2], color[3]);
                st.push(1 - 1 / column * j, 1 / row * i);
            }
        }
        for(i = 0; i < row; i++){
            for(j = 0; j < column; j++){
                let r = (column + 1) * i + j;
                idx.push(r, r + 1, r + column + 2);
                idx.push(r, r + column + 2, r + column + 1);
            }
        }
        return {position: pos, normal: nor, color: col, texCoord: st, index: idx}
    }

    /**
     * トーラスの頂点情報を生成する
     * @param {number} row - 輪の分割数
     * @param {number} column - パイプ断面の分割数
     * @param {number} irad - パイプ断面の半径
     * @param {number} orad - パイプ全体の半径
     * @param {Array.<number>} color - RGBA を 0.0 から 1.0 の範囲で指定した配列
     * @return {object}
     * @property {Array.<number>} position - 頂点座標
     * @property {Array.<number>} normal - 頂点法線
     * @property {Array.<number>} color - 頂点カラー
     * @property {Array.<number>} texCoord - テクスチャ座標
     * @property {Array.<number>} index - 頂点インデックス（gl.TRIANGLES）
     * @example
     * let torusData = Geometry.torus(64, 64, 0.25, 0.75, [1.0, 1.0, 1.0, 1.0]);
     */
    static torus(row, column, irad, orad, color){
        let i, j;
        let pos = [], nor = [],
            col = [], st  = [], idx = [];
        for(i = 0; i <= row; i++){
            let r = Math.PI * 2 / row * i;
            let rr = Math.cos(r);
            let ry = Math.sin(r);
            for(j = 0; j <= column; j++){
                let tr = Math.PI * 2 / column * j;
                let tx = (rr * irad + orad) * Math.cos(tr);
                let ty = ry * irad;
                let tz = (rr * irad + orad) * Math.sin(tr);
                let rx = rr * Math.cos(tr);
                let rz = rr * Math.sin(tr);
                let rs = 1 / column * j;
                let rt = 1 / row * i + 0.5;
                if(rt > 1.0){rt -= 1.0;}
                rt = 1.0 - rt;
                pos.push(tx, ty, tz);
                nor.push(rx, ry, rz);
                col.push(color[0], color[1], color[2], color[3]);
                st.push(rs, rt);
            }
        }
        for(i = 0; i < row; i++){
            for(j = 0; j < column; j++){
                let r = (column + 1) * i + j;
                idx.push(r, r + column + 1, r + 1);
                idx.push(r + column + 1, r + column + 2, r + 1);
            }
        }
        return {position: pos, normal: nor, color: col, texCoord: st, index: idx}
    }

    /**
     * 正二十面体の頂点情報を生成する
     * @param {number} rad - サイズ（黄金比に対する比率）
     * @param {Array.<number>} color - RGBA を 0.0 から 1.0 の範囲で指定した配列
     * @return {object}
     * @property {Array.<number>} position - 頂点座標
     * @property {Array.<number>} normal - 頂点法線
     * @property {Array.<number>} color - 頂点カラー
     * @property {Array.<number>} texCoord - テクスチャ座標
     * @property {Array.<number>} index - 頂点インデックス（gl.TRIANGLES）
     * @example
     * let icosaData = Geometry.icosahedron(1.0, [1.0, 1.0, 1.0, 1.0]);
     */
    static icosahedron(rad, color){
        let i, j;
        let pos = [], nor = [],
            col = [], st  = [], idx = [];
        let c = (1.0 + Math.sqrt(5.0)) / 2.0;
        let t = c * rad;
        let l = Math.sqrt(1.0 + c * c);
        let r = [1.0 / l, c / l];
        pos = [
            -rad,    t,  0.0,  rad,    t,  0.0, -rad,   -t,  0.0,  rad,   -t,  0.0,
             0.0, -rad,    t,  0.0,  rad,    t,  0.0, -rad,   -t,  0.0,  rad,   -t,
               t,  0.0, -rad,    t,  0.0,  rad,   -t,  0.0, -rad,   -t,  0.0,  rad
        ];
        nor = [
            -r[0],  r[1],   0.0,  r[0],  r[1],   0.0, -r[0], -r[1],   0.0,  r[0], -r[1],   0.0,
              0.0, -r[0],  r[1],   0.0,  r[0],  r[1],   0.0, -r[0], -r[1],   0.0,  r[0], -r[1],
             r[1],   0.0, -r[0],  r[1],   0.0,  r[0], -r[1],   0.0, -r[0], -r[1],   0.0,  r[0]
        ];
        col = [
            color[0], color[1], color[2], color[3], color[0], color[1], color[2], color[3],
            color[0], color[1], color[2], color[3], color[0], color[1], color[2], color[3],
            color[0], color[1], color[2], color[3], color[0], color[1], color[2], color[3],
            color[0], color[1], color[2], color[3], color[0], color[1], color[2], color[3],
            color[0], color[1], color[2], color[3], color[0], color[1], color[2], color[3],
            color[0], color[1], color[2], color[3], color[0], color[1], color[2], color[3]
        ];
        for(let i = 0, j = nor.length; i < j; i += 3){
            let u = (Math.atan2(nor[i + 2], -nor[i]) + Math.PI) / (Math.PI * 2.0);
            let v = 1.0 - (nor[i + 1] + 1.0) / 2.0;
            st.push(u, v);
        }
        idx = [
             0, 11,  5,  0,  5,  1,  0,  1,  7,  0,  7, 10,  0, 10, 11,
             1,  5,  9,  5, 11,  4, 11, 10,  2, 10,  7,  6,  7,  1,  8,
             3,  9,  4,  3,  4,  2,  3,  2,  6,  3,  6,  8,  3,  8,  9,
             4,  9,  5,  2,  4, 11,  6,  2, 10,  8,  6,  7,  9,  8,  1
        ];
        return {position: pos, normal: nor, color: col, texCoord: st, index: idx}
    }
}
