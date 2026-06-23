import{a as e,n as t,t as n}from"./jsx-runtime-n5LQ9ujS.js";import{t as r}from"./compiler-runtime-ClOnpRnu.js";import{A as i,B as a,F as o,G as s,H as c,I as l,J as u,K as d,L as f,M as p,N as m,P as h,R as g,U as _,V as ee,W as v,j as y,k as te,q as b,w as ne,z as re}from"./react-three-fiber.esm-DpHtLjZe.js";import{n as ie}from"./theme-provider-C1n5_Dep.js";function x(){return x=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},x.apply(null,arguments)}var S=parseInt(`184`.replace(/\D+/g,``)),C=S>=125?`uv1`:`uv2`,w=new y,T=new d,E=class extends o{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type=`LineSegmentsGeometry`,this.setIndex([0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5]),this.setAttribute(`position`,new h([-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],3)),this.setAttribute(`uv`,new h([-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],2))}applyMatrix4(e){let t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let n=new l(t,6,1);return this.setAttribute(`instanceStart`,new f(n,3,0)),this.setAttribute(`instanceEnd`,new f(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e,t=3){let n;e instanceof Float32Array?n=e:Array.isArray(e)&&(n=new Float32Array(e));let r=new l(n,t*2,1);return this.setAttribute(`instanceColorStart`,new f(r,t,0)),this.setAttribute(`instanceColorEnd`,new f(r,t,t)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new u(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new y);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),w.setFromBufferAttribute(t),this.boundingBox.union(w))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _),this.boundingBox===null&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let r=0;for(let i=0,a=e.count;i<a;i++)T.fromBufferAttribute(e,i),r=Math.max(r,n.distanceToSquared(T)),T.fromBufferAttribute(t,i),r=Math.max(r,n.distanceToSquared(T));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error(`THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.`,this)}}toJSON(){}applyMatrix(e){return console.warn(`THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4().`),this.applyMatrix4(e)}},D=class extends E{constructor(){super(),this.isLineGeometry=!0,this.type=`LineGeometry`}setPositions(e){let t=e.length-3,n=new Float32Array(2*t);for(let r=0;r<t;r+=3)n[2*r]=e[r],n[2*r+1]=e[r+1],n[2*r+2]=e[r+2],n[2*r+3]=e[r+3],n[2*r+4]=e[r+4],n[2*r+5]=e[r+5];return super.setPositions(n),this}setColors(e,t=3){let n=e.length-t,r=new Float32Array(2*n);if(t===3)for(let i=0;i<n;i+=t)r[2*i]=e[i],r[2*i+1]=e[i+1],r[2*i+2]=e[i+2],r[2*i+3]=e[i+3],r[2*i+4]=e[i+4],r[2*i+5]=e[i+5];else for(let i=0;i<n;i+=t)r[2*i]=e[i],r[2*i+1]=e[i+1],r[2*i+2]=e[i+2],r[2*i+3]=e[i+3],r[2*i+4]=e[i+4],r[2*i+5]=e[i+5],r[2*i+6]=e[i+6],r[2*i+7]=e[i+7];return super.setColors(r,t),this}fromLine(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}},O=class extends c{constructor(e){super({type:`LineMaterial`,uniforms:v.clone(v.merge([i.common,i.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new s(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
				#include <common>
				#include <fog_pars_vertex>
				#include <logdepthbuf_pars_vertex>
				#include <clipping_planes_pars_vertex>

				uniform float linewidth;
				uniform vec2 resolution;

				attribute vec3 instanceStart;
				attribute vec3 instanceEnd;

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
						attribute vec4 instanceColorStart;
						attribute vec4 instanceColorEnd;
					#else
						varying vec3 vLineColor;
						attribute vec3 instanceColorStart;
						attribute vec3 instanceColorEnd;
					#endif
				#endif

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#ifdef USE_DASH

					uniform float dashScale;
					attribute float instanceDistanceStart;
					attribute float instanceDistanceEnd;
					varying float vLineDistance;

				#endif

				void trimSegment( const in vec4 start, inout vec4 end ) {

					// trim end segment so it terminates between the camera plane and the near plane

					// conservative estimate of the near plane
					float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
					float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
					float nearEstimate = - 0.5 * b / a;

					float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

					end.xyz = mix( start.xyz, end.xyz, alpha );

				}

				void main() {

					#ifdef USE_COLOR

						vLineColor = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

					#endif

					#ifdef USE_DASH

						vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
						vUv = uv;

					#endif

					float aspect = resolution.x / resolution.y;

					// camera space
					vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
					vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

					#ifdef WORLD_UNITS

						worldStart = start.xyz;
						worldEnd = end.xyz;

					#else

						vUv = uv;

					#endif

					// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
					// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
					// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
					// perhaps there is a more elegant solution -- WestLangley

					bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

					if ( perspective ) {

						if ( start.z < 0.0 && end.z >= 0.0 ) {

							trimSegment( start, end );

						} else if ( end.z < 0.0 && start.z >= 0.0 ) {

							trimSegment( end, start );

						}

					}

					// clip space
					vec4 clipStart = projectionMatrix * start;
					vec4 clipEnd = projectionMatrix * end;

					// ndc space
					vec3 ndcStart = clipStart.xyz / clipStart.w;
					vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

					// direction
					vec2 dir = ndcEnd.xy - ndcStart.xy;

					// account for clip-space aspect ratio
					dir.x *= aspect;
					dir = normalize( dir );

					#ifdef WORLD_UNITS

						// get the offset direction as perpendicular to the view vector
						vec3 worldDir = normalize( end.xyz - start.xyz );
						vec3 offset;
						if ( position.y < 0.5 ) {

							offset = normalize( cross( start.xyz, worldDir ) );

						} else {

							offset = normalize( cross( end.xyz, worldDir ) );

						}

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

						// don't extend the line if we're rendering dashes because we
						// won't be rendering the endcaps
						#ifndef USE_DASH

							// extend the line bounds to encompass  endcaps
							start.xyz += - worldDir * linewidth * 0.5;
							end.xyz += worldDir * linewidth * 0.5;

							// shift the position of the quad so it hugs the forward edge of the line
							offset.xy -= dir * forwardOffset;
							offset.z += 0.5;

						#endif

						// endcaps
						if ( position.y > 1.0 || position.y < 0.0 ) {

							offset.xy += dir * 2.0 * forwardOffset;

						}

						// adjust for linewidth
						offset *= linewidth * 0.5;

						// set the world position
						worldPos = ( position.y < 0.5 ) ? start : end;
						worldPos.xyz += offset;

						// project the worldpos
						vec4 clip = projectionMatrix * worldPos;

						// shift the depth of the projected points so the line
						// segments overlap neatly
						vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
						clip.z = clipPose.z * clip.w;

					#else

						vec2 offset = vec2( dir.y, - dir.x );
						// undo aspect ratio adjustment
						dir.x /= aspect;
						offset.x /= aspect;

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						// endcaps
						if ( position.y < 0.0 ) {

							offset += - dir;

						} else if ( position.y > 1.0 ) {

							offset += dir;

						}

						// adjust for linewidth
						offset *= linewidth;

						// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
						offset /= resolution.y;

						// select end
						vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

						// back to clip space
						offset *= clip.w;

						clip.xy += offset;

					#endif

					gl_Position = clip;

					vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

					#include <logdepthbuf_vertex>
					#include <clipping_planes_vertex>
					#include <fog_vertex>

				}
			`,fragmentShader:`
				uniform vec3 diffuse;
				uniform float opacity;
				uniform float linewidth;

				#ifdef USE_DASH

					uniform float dashOffset;
					uniform float dashSize;
					uniform float gapSize;

				#endif

				varying float vLineDistance;

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#include <common>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <clipping_planes_pars_fragment>

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
					#else
						varying vec3 vLineColor;
					#endif
				#endif

				vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

					float mua;
					float mub;

					vec3 p13 = p1 - p3;
					vec3 p43 = p4 - p3;

					vec3 p21 = p2 - p1;

					float d1343 = dot( p13, p43 );
					float d4321 = dot( p43, p21 );
					float d1321 = dot( p13, p21 );
					float d4343 = dot( p43, p43 );
					float d2121 = dot( p21, p21 );

					float denom = d2121 * d4343 - d4321 * d4321;

					float numer = d1343 * d4321 - d1321 * d4343;

					mua = numer / denom;
					mua = clamp( mua, 0.0, 1.0 );
					mub = ( d1343 + d4321 * ( mua ) ) / d4343;
					mub = clamp( mub, 0.0, 1.0 );

					return vec2( mua, mub );

				}

				void main() {

					#include <clipping_planes_fragment>

					#ifdef USE_DASH

						if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

						if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

					#endif

					float alpha = opacity;

					#ifdef WORLD_UNITS

						// Find the closest points on the view ray and the line segment
						vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
						vec3 lineDir = worldEnd - worldStart;
						vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

						vec3 p1 = worldStart + lineDir * params.x;
						vec3 p2 = rayEnd * params.y;
						vec3 delta = p1 - p2;
						float len = length( delta );
						float norm = len / linewidth;

						#ifndef USE_DASH

							#ifdef USE_ALPHA_TO_COVERAGE

								float dnorm = fwidth( norm );
								alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

							#else

								if ( norm > 0.5 ) {

									discard;

								}

							#endif

						#endif

					#else

						#ifdef USE_ALPHA_TO_COVERAGE

							// artifacts appear on some hardware if a derivative is taken within a conditional
							float a = vUv.x;
							float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
							float len2 = a * a + b * b;
							float dlen = fwidth( len2 );

							if ( abs( vUv.y ) > 1.0 ) {

								alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

							}

						#else

							if ( abs( vUv.y ) > 1.0 ) {

								float a = vUv.x;
								float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
								float len2 = a * a + b * b;

								if ( len2 > 1.0 ) discard;

							}

						#endif

					#endif

					vec4 diffuseColor = vec4( diffuse, alpha );
					#ifdef USE_COLOR
						#ifdef USE_LINE_COLOR_ALPHA
							diffuseColor *= vLineColor;
						#else
							diffuseColor.rgb *= vLineColor;
						#endif
					#endif

					#include <logdepthbuf_fragment>

					gl_FragColor = diffuseColor;

					#include <tonemapping_fragment>
					#include <${S>=154?`colorspace_fragment`:`encodings_fragment`}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA=`1`:delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(e){this.uniforms.diffuse.value=e}},worldUnits:{enumerable:!0,get:function(){return`WORLD_UNITS`in this.defines},set:function(e){e===!0?this.defines.WORLD_UNITS=``:delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(e){this.uniforms.linewidth.value=e}},dashed:{enumerable:!0,get:function(){return`USE_DASH`in this.defines},set(e){!!e!=`USE_DASH`in this.defines&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH=``:delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(e){this.uniforms.dashScale.value=e}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(e){this.uniforms.dashSize.value=e}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(e){this.uniforms.dashOffset.value=e}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(e){this.uniforms.gapSize.value=e}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(e){this.uniforms.opacity.value=e}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(e){this.uniforms.resolution.value.copy(e)}},alphaToCoverage:{enumerable:!0,get:function(){return`USE_ALPHA_TO_COVERAGE`in this.defines},set:function(e){!!e!=`USE_ALPHA_TO_COVERAGE`in this.defines&&(this.needsUpdate=!0),e===!0?(this.defines.USE_ALPHA_TO_COVERAGE=``,this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}},k=new b,ae=new d,A=new d,j=new b,M=new b,N=new b,P=new d,F=new a,I=new g,oe=new d,L=new y,R=new _,z=new b,B,V;function H(e,t,n){return z.set(0,0,-t,1).applyMatrix4(e.projectionMatrix),z.multiplyScalar(1/z.w),z.x=V/n.width,z.y=V/n.height,z.applyMatrix4(e.projectionMatrixInverse),z.multiplyScalar(1/z.w),Math.abs(Math.max(z.x,z.y))}function U(e,t){let n=e.matrixWorld,r=e.geometry,i=r.attributes.instanceStart,a=r.attributes.instanceEnd,o=Math.min(r.instanceCount,i.count);for(let r=0,s=o;r<s;r++){I.start.fromBufferAttribute(i,r),I.end.fromBufferAttribute(a,r),I.applyMatrix4(n);let o=new d,s=new d;B.distanceSqToSegment(I.start,I.end,s,o),s.distanceTo(o)<V*.5&&t.push({point:s,pointOnLine:o,distance:B.origin.distanceTo(s),object:e,face:null,faceIndex:r,uv:null,[C]:null})}}function se(e,t,n){let r=t.projectionMatrix,i=e.material.resolution,a=e.matrixWorld,o=e.geometry,s=o.attributes.instanceStart,c=o.attributes.instanceEnd,l=Math.min(o.instanceCount,s.count),u=-t.near;B.at(1,N),N.w=1,N.applyMatrix4(t.matrixWorldInverse),N.applyMatrix4(r),N.multiplyScalar(1/N.w),N.x*=i.x/2,N.y*=i.y/2,N.z=0,P.copy(N),F.multiplyMatrices(t.matrixWorldInverse,a);for(let t=0,o=l;t<o;t++){if(j.fromBufferAttribute(s,t),M.fromBufferAttribute(c,t),j.w=1,M.w=1,j.applyMatrix4(F),M.applyMatrix4(F),j.z>u&&M.z>u)continue;if(j.z>u){let e=j.z-M.z,t=(j.z-u)/e;j.lerp(M,t)}else if(M.z>u){let e=M.z-j.z,t=(M.z-u)/e;M.lerp(j,t)}j.applyMatrix4(r),M.applyMatrix4(r),j.multiplyScalar(1/j.w),M.multiplyScalar(1/M.w),j.x*=i.x/2,j.y*=i.y/2,M.x*=i.x/2,M.y*=i.y/2,I.start.copy(j),I.start.z=0,I.end.copy(M),I.end.z=0;let o=I.closestPointToPointParameter(P,!0);I.at(o,oe);let l=re.lerp(j.z,M.z,o),f=l>=-1&&l<=1,p=P.distanceTo(oe)<V*.5;if(f&&p){I.start.fromBufferAttribute(s,t),I.end.fromBufferAttribute(c,t),I.start.applyMatrix4(a),I.end.applyMatrix4(a);let r=new d,i=new d;B.distanceSqToSegment(I.start,I.end,i,r),n.push({point:i,pointOnLine:r,distance:B.origin.distanceTo(i),object:e,face:null,faceIndex:t,uv:null,[C]:null})}}}var W=class extends ee{constructor(e=new E,t=new O({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type=`LineSegments2`}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,r=new Float32Array(2*t.count);for(let e=0,i=0,a=t.count;e<a;e++,i+=2)ae.fromBufferAttribute(t,e),A.fromBufferAttribute(n,e),r[i]=i===0?0:r[i-1],r[i+1]=r[i]+ae.distanceTo(A);let i=new l(r,2,1);return e.setAttribute(`instanceDistanceStart`,new f(i,1,0)),e.setAttribute(`instanceDistanceEnd`,new f(i,1,1)),this}raycast(e,t){let n=this.material.worldUnits,r=e.camera;r===null&&!n&&console.error(`LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.`);let i=e.params.Line2===void 0?0:e.params.Line2.threshold||0;B=e.ray;let a=this.matrixWorld,o=this.geometry,s=this.material;V=s.linewidth+i,o.boundingSphere===null&&o.computeBoundingSphere(),R.copy(o.boundingSphere).applyMatrix4(a);let c;if(c=n?V*.5:H(r,Math.max(r.near,R.distanceToPoint(B.origin)),s.resolution),R.radius+=c,B.intersectsSphere(R)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),L.copy(o.boundingBox).applyMatrix4(a);let l;l=n?V*.5:H(r,Math.max(r.near,L.distanceToPoint(B.origin)),s.resolution),L.expandByScalar(l),B.intersectsBox(L)!==!1&&(n?U(this,t):se(this,r,t))}onBeforeRender(e){let t=this.material.uniforms;t&&t.resolution&&(e.getViewport(k),this.material.uniforms.resolution.value.set(k.z,k.w))}},G=class extends W{constructor(e=new D,t=new O({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type=`Line2`}},K=e(t()),ce=K.forwardRef(function({points:e,color:t=16777215,vertexColors:n,linewidth:r,lineWidth:i,segments:a,dashed:o,...c},l){var u;let f=te(e=>e.size),p=K.useMemo(()=>a?new W:new G,[a]),[h]=K.useState(()=>new O),g=(n==null||(u=n[0])==null?void 0:u.length)===4?4:3,_=K.useMemo(()=>{let r=a?new E:new D,i=e.map(e=>{let t=Array.isArray(e);return e instanceof d||e instanceof b?[e.x,e.y,e.z]:e instanceof s?[e.x,e.y,0]:t&&e.length===3?[e[0],e[1],e[2]]:t&&e.length===2?[e[0],e[1],0]:e});if(r.setPositions(i.flat()),n){t=16777215;let e=n.map(e=>e instanceof m?e.toArray():e);r.setColors(e.flat(),g)}return r},[e,a,n,g]);return K.useLayoutEffect(()=>{p.computeLineDistances()},[e,p]),K.useLayoutEffect(()=>{o?h.defines.USE_DASH=``:delete h.defines.USE_DASH,h.needsUpdate=!0},[o,h]),K.useEffect(()=>()=>{_.dispose(),h.dispose()},[_]),K.createElement(`primitive`,x({object:p,ref:l},c),K.createElement(`primitive`,{object:_,attach:`geometry`}),K.createElement(`primitive`,x({object:h,attach:`material`,color:t,vertexColors:!!n,resolution:[f.width,f.height],linewidth:r??i??1,dashed:o,transparent:g===4},c)))});function q(e,t){let n=e+`Geometry`;return K.forwardRef(({args:e,children:r,...i},a)=>{let o=K.useRef(null);return K.useImperativeHandle(a,()=>o.current),K.useLayoutEffect(()=>void t?.(o.current)),K.createElement(`mesh`,x({ref:o},i),K.createElement(n,{attach:`geometry`,args:e}),r)})}var le=q(`ring`),ue=r(),J=n();function Y(e){let t=(0,ue.c)(95),{mouseX:n,mouseY:r}=e,i=(0,K.useRef)(null),a;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(a={x:0,y:0},t[0]=a):a=t[0];let o=(0,K.useRef)(a),{theme:s}=ie(),c=s===`light`,l=c?`#222222`:`#ffffff`,u=c?`#000000`:`#ffffff`,f=c?`#ffffff`:`#0a0a0a`,m=c?`#eaeaea`:`#111111`,h;if(t[1]===Symbol.for(`react.memo_cache_sentinel`)){h=[];let e=(e,t,n,r,i,a,o,s)=>{let c=s===void 0?!1:s;h.push({points:[[e,t,.03],[n,r,.03],[i,a,.03]],opacity:o,animated:c})};e(-.5,.5,-.8,.8,-1.2,.8,.5,!0),e(-.5,.4,-.9,.7,-1.2,.7,.4,!0),e(-.5,.3,-1,.6,-1.2,.6,.3),e(.5,.5,.8,.8,1.2,.8,.4,!0),e(.5,.3,1,.3,1.4,.6,.3),e(-.5,-.5,-.8,-.8,-1.2,-.8,.4,!0),e(.5,-.5,.8,-.8,1.2,-.8,.4),h.push({points:[[-1.8,1.2,.03],[-1.8,-1.2,.03],[1.8,-1.2,.03],[1.8,1.2,.03]],opacity:.2}),t[1]=h}else h=t[1];let g=h,_,ee;t[2]===Symbol.for(`react.memo_cache_sentinel`)?(_=[0,0,.05],ee=[.8,.8,.06],t[2]=_,t[3]=ee):(_=t[2],ee=t[3]);let v;t[4]===m?v=t[5]:(v={pos:_,size:ee,color:m,type:`cpu`},t[4]=m,t[5]=v);let y,te;t[6]===Symbol.for(`react.memo_cache_sentinel`)?(y=[-1.2,.7,.05],te=[.4,.6,.06],t[6]=y,t[7]=te):(y=t[6],te=t[7]);let b;t[8]===m?b=t[9]:(b={pos:y,size:te,color:m,type:`ram`},t[8]=m,t[9]=b);let re,x;t[10]===Symbol.for(`react.memo_cache_sentinel`)?(re=[-1.2,-.7,.05],x=[.4,.6,.06],t[10]=re,t[11]=x):(re=t[10],x=t[11]);let S;t[12]===m?S=t[13]:(S={pos:re,size:x,color:m,type:`ram`},t[12]=m,t[13]=S);let C,w;t[14]===Symbol.for(`react.memo_cache_sentinel`)?(C=[1.2,.7,.05],w=[.5,.5,.06],t[14]=C,t[15]=w):(C=t[14],w=t[15]);let T;t[16]===m?T=t[17]:(T={pos:C,size:w,color:m,type:`radio`},t[16]=m,t[17]=T);let E,D;t[18]===Symbol.for(`react.memo_cache_sentinel`)?(E=[1.2,-.7,.05],D=[.3,.3,.08],t[18]=E,t[19]=D):(E=t[18],D=t[19]);let O;t[20]===m?O=t[21]:(O={pos:E,size:D,color:m,type:`pmu`},t[20]=m,t[21]=O);let k;t[22]!==S||t[23]!==T||t[24]!==O||t[25]!==v||t[26]!==b?(k=[v,b,S,T,O],t[22]=S,t[23]=T,t[24]=O,t[25]=v,t[26]=b,t[27]=k):k=t[27];let ae=k,A;if(t[28]===Symbol.for(`react.memo_cache_sentinel`)){A=[];for(let e=0;e<20;e++)A.push({pos:[(Math.random()-.5)*3.4,(Math.random()-.5)*2.4,.04],rot:[0,0,Math.random()>.5?0:Math.PI/2],isCapacitor:Math.random()>.5});t[28]=A}else A=t[28];let j=A,M;t[29]===Symbol.for(`react.memo_cache_sentinel`)?(M=g.filter(he).map(me),t[29]=M):M=t[29];let N=M,P=(0,K.useRef)(null),F=(0,K.useRef)(null),I=(0,K.useRef)(null),oe=(0,K.useRef)(null),L;t[30]!==c||t[31]!==n||t[32]!==r?(L=(e,t)=>{i.current&&(o.current.x=r*.2,o.current.y=n*.2,i.current.rotation.x=i.current.rotation.x+(o.current.x-i.current.rotation.x)*.05,i.current.rotation.y=i.current.rotation.y+(o.current.y-i.current.rotation.y)*.05,i.current.rotation.z=i.current.rotation.z+t*.02,P.current&&(P.current.position.z=.12+Math.sin(e.clock.elapsedTime*3)*.03),F.current&&(F.current.emissiveIntensity=c?.8:2+Math.sin(e.clock.elapsedTime*6)*1),I.current&&I.current.children.forEach((n,r)=>{n.rotation.z=n.rotation.z-t*(.5+r*.2),n.material.opacity=.3+Math.sin(e.clock.elapsedTime*2+r)*.2}),oe.current&&oe.current.children.forEach((e,n)=>{let r=N[n];r.progress+=t*.5,r.progress>1&&(r.progress=0);let i=new d(...r.points[0]),a=new d(...r.points[1]),o=new d(...r.points[2]),s;if(r.progress<.5){let e=r.progress*2;s=i.lerp(a,e)}else{let e=(r.progress-.5)*2;s=a.lerp(o,e)}e.position.copy(s)}))},t[30]=c,t[31]=n,t[32]=r,t[33]=L):L=t[33],ne(L);let R,z;t[34]===Symbol.for(`react.memo_cache_sentinel`)?(R=[0,0,-.05],z=(0,J.jsx)(`boxGeometry`,{args:[4.2,3,.02]}),t[34]=R,t[35]=z):(R=t[34],z=t[35]);let B=c?`#e0e0e0`:`#050505`,V;t[36]===B?V=t[37]:(V=(0,J.jsxs)(`mesh`,{position:R,children:[z,(0,J.jsx)(`meshStandardMaterial`,{color:B,roughness:.9,metalness:.1})]}),t[36]=B,t[37]=V);let H;t[38]===Symbol.for(`react.memo_cache_sentinel`)?(H=(0,J.jsx)(`boxGeometry`,{args:[4,2.8,.04]}),t[38]=H):H=t[38];let U;t[39]===f?U=t[40]:(U=(0,J.jsxs)(`mesh`,{children:[H,(0,J.jsx)(`meshStandardMaterial`,{color:f,roughness:.7,metalness:.6})]}),t[39]=f,t[40]=U);let se;t[41]===Symbol.for(`react.memo_cache_sentinel`)?(se=(0,J.jsx)(`edgesGeometry`,{args:[new p(4,2.8,.04)]}),t[41]=se):se=t[41];let W;t[42]===u?W=t[43]:(W=(0,J.jsxs)(`lineSegments`,{children:[se,(0,J.jsx)(`lineBasicMaterial`,{color:u,transparent:!0,opacity:.3})]}),t[42]=u,t[43]=W);let G;t[44]===l?G=t[45]:(G=g.map((e,t)=>(0,J.jsx)(ce,{points:e.points,color:l,transparent:!0,opacity:e.opacity,lineWidth:1.5},`trace-${t}`)),t[44]=l,t[45]=G);let q;t[46]===u?q=t[47]:(q=(0,J.jsx)(`group`,{ref:oe,children:N.map((e,t)=>(0,J.jsxs)(`mesh`,{children:[(0,J.jsx)(`sphereGeometry`,{args:[.03,8,8]}),(0,J.jsx)(`meshBasicMaterial`,{color:u})]},`packet-${t}`))}),t[46]=u,t[47]=q);let Y;t[48]!==ae||t[49]!==u?(Y=ae.map((e,t)=>(0,J.jsxs)(`group`,{position:e.pos,children:[(0,J.jsxs)(`mesh`,{children:[(0,J.jsx)(`boxGeometry`,{args:e.size}),(0,J.jsx)(`meshStandardMaterial`,{color:e.color,roughness:.4,metalness:.8})]}),(0,J.jsxs)(`lineSegments`,{children:[(0,J.jsx)(`edgesGeometry`,{args:[new p(...e.size)]}),(0,J.jsx)(`lineBasicMaterial`,{color:u,transparent:!0,opacity:.4})]}),e.type===`cpu`&&(0,J.jsxs)(`group`,{position:[0,0,-.02],children:[Array.from({length:16}).map(pe),Array.from({length:16}).map(fe)]})]},`chip-${t}`)),t[48]=ae,t[49]=u,t[50]=Y):Y=t[50];let X;t[51]===c?X=t[52]:(X=j.map((e,t)=>(0,J.jsxs)(`group`,{position:e.pos,rotation:e.rot,children:[(0,J.jsxs)(`mesh`,{children:[(0,J.jsx)(`boxGeometry`,{args:e.isCapacitor?[.06,.04,.04]:[.08,.03,.02]}),(0,J.jsx)(`meshStandardMaterial`,{color:e.isCapacitor?c?`#a0a0a0`:`#444`:c?`#111`:`#222`,roughness:.5})]}),(0,J.jsxs)(`mesh`,{position:[-.04,0,-.01],children:[(0,J.jsx)(`boxGeometry`,{args:[.02,.05,.01]}),(0,J.jsx)(`meshStandardMaterial`,{color:`silver`,metalness:1,roughness:.2})]}),(0,J.jsxs)(`mesh`,{position:[.04,0,-.01],children:[(0,J.jsx)(`boxGeometry`,{args:[.02,.05,.01]}),(0,J.jsx)(`meshStandardMaterial`,{color:`silver`,metalness:1,roughness:.2})]})]},`smd-${t}`)),t[51]=c,t[52]=X);let ge;t[53]===Symbol.for(`react.memo_cache_sentinel`)?(ge=[0,0,.08],t[53]=ge):ge=t[53];let _e;t[54]===Symbol.for(`react.memo_cache_sentinel`)?(_e=(0,J.jsx)(`sphereGeometry`,{args:[.12,32,32]}),t[54]=_e):_e=t[54];let ve=c?`#333`:`#ffffff`,ye=c?`#111`:`#ffffff`,be=c?.5:2,xe=c?.8:.9,Z;t[55]!==ve||t[56]!==ye||t[57]!==be||t[58]!==xe?(Z=(0,J.jsxs)(`mesh`,{ref:P,children:[_e,(0,J.jsx)(`meshStandardMaterial`,{ref:F,color:ve,emissive:ye,emissiveIntensity:be,transparent:!0,opacity:xe})]}),t[55]=ve,t[56]=ye,t[57]=be,t[58]=xe,t[59]=Z):Z=t[59];let Se,Ce;t[60]===Symbol.for(`react.memo_cache_sentinel`)?(Se=[.2,.22,32],Ce=[0,0,-.02],t[60]=Se,t[61]=Ce):(Se=t[60],Ce=t[61]);let Q;t[62]===u?Q=t[63]:(Q=(0,J.jsx)(le,{args:Se,position:Ce,children:(0,J.jsx)(`meshBasicMaterial`,{color:u,transparent:!0,opacity:.3,side:2})}),t[62]=u,t[63]=Q);let we,Te;t[64]===Symbol.for(`react.memo_cache_sentinel`)?(we=[.28,.29,48],Te=[0,0,-.04],t[64]=we,t[65]=Te):(we=t[64],Te=t[65]);let $;t[66]===u?$=t[67]:($=(0,J.jsx)(le,{args:we,position:Te,children:(0,J.jsx)(`meshBasicMaterial`,{color:u,transparent:!0,opacity:.15,side:2})}),t[66]=u,t[67]=$);let Ee;t[68]!==Q||t[69]!==$?(Ee=(0,J.jsxs)(`group`,{ref:I,children:[Q,$]}),t[68]=Q,t[69]=$,t[70]=Ee):Ee=t[70];let De;t[71]!==Z||t[72]!==Ee?(De=(0,J.jsxs)(`group`,{position:ge,children:[Z,Ee]}),t[71]=Z,t[72]=Ee,t[73]=De):De=t[73];let Oe,ke,Ae;t[74]===Symbol.for(`react.memo_cache_sentinel`)?(Oe=[1.4,.7,.06],ke=[Math.PI/2,0,0],Ae=(0,J.jsx)(`cylinderGeometry`,{args:[.02,.02,.4,8]}),t[74]=Oe,t[75]=ke,t[76]=Ae):(Oe=t[74],ke=t[75],Ae=t[76]);let je=c?`#555`:`#888`,Me;t[77]===je?Me=t[78]:(Me=(0,J.jsxs)(`mesh`,{rotation:ke,children:[Ae,(0,J.jsx)(`meshStandardMaterial`,{color:je,metalness:.9,roughness:.1})]}),t[77]=je,t[78]=Me);let Ne;t[79]===Symbol.for(`react.memo_cache_sentinel`)?(Ne=Array.from({length:20}).map(de),t[79]=Ne):Ne=t[79];let Pe;t[80]===u?Pe=t[81]:(Pe=(0,J.jsx)(ce,{points:Ne,color:u,lineWidth:1,transparent:!0,opacity:.4}),t[80]=u,t[81]=Pe);let Fe;t[82]!==Me||t[83]!==Pe?(Fe=(0,J.jsxs)(`group`,{position:Oe,children:[Me,Pe]}),t[82]=Me,t[83]=Pe,t[84]=Fe):Fe=t[84];let Ie;return t[85]!==V||t[86]!==U||t[87]!==W||t[88]!==G||t[89]!==q||t[90]!==Y||t[91]!==X||t[92]!==De||t[93]!==Fe?(Ie=(0,J.jsxs)(`group`,{ref:i,children:[V,U,W,G,q,Y,X,De,Fe]}),t[85]=V,t[86]=U,t[87]=W,t[88]=G,t[89]=q,t[90]=Y,t[91]=X,t[92]=De,t[93]=Fe,t[94]=Ie):Ie=t[94],Ie}function de(e,t){return[.1+Math.sin(t*.5)*.05,-.2+t*.02,0]}function fe(e,t){return(0,J.jsxs)(`mesh`,{position:[-.35+t*.046,-.42,0],children:[(0,J.jsx)(`boxGeometry`,{args:[.02,.06,.02]}),(0,J.jsx)(`meshStandardMaterial`,{color:`#c0c0c0`,metalness:1})]},`pin-b-${t}`)}function pe(e,t){return(0,J.jsxs)(`mesh`,{position:[-.35+t*.046,.42,0],children:[(0,J.jsx)(`boxGeometry`,{args:[.02,.06,.02]}),(0,J.jsx)(`meshStandardMaterial`,{color:`#c0c0c0`,metalness:1})]},`pin-t-${t}`)}function me(e){return{points:e.points,progress:Math.random()}}function he(e){return e.animated}export{Y as default};