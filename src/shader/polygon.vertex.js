import { maxUniformLength } from './common';
export default
`attribute vec4 a_pos;
//tex_idx * 100 + opacity * 10
attribute float a_style;

uniform mat4 u_matrix;
uniform float u_styles[${maxUniformLength}];

varying float v_opacity;
varying vec4 v_texcoord;

void main() {
  int tex_idx = int(floor(a_style / 100.0));
  v_opacity = mod(a_style, 100.0) / 10.0;
  v_texcoord = vec4(u_styles[tex_idx], u_styles[tex_idx + 1], u_styles[tex_idx + 2], u_styles[tex_idx + 3]);

  gl_Position = u_matrix * a_pos;
}`;
