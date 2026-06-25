import{a as e,n as t,t as n}from"./jsx-runtime-n5LQ9ujS.js";import{t as r}from"./compiler-runtime-ClOnpRnu.js";import{_ as i,a,b as o,c as s,d as c,f as l,g as u,h as d,i as f,l as p,m as ee,n as m,o as te,p as h,r as ne,s as g,t as re,u as _,v as ie,x as ae,y as v}from"./react-three-fiber.esm-D9M_VufC.js";import{o as oe}from"./custom-cursor-QTiQf3hZ.js";function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y.apply(null,arguments)}var b=parseInt(`184`.replace(/\D+/g,``)),x=b>=125?`uv1`:`uv2`,S=new f,C=new v,w=class extends s{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type=`LineSegmentsGeometry`,this.setIndex([0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5]),this.setAttribute(`position`,new g([-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],3)),this.setAttribute(`uv`,new g([-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],2))}applyMatrix4(e){let t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let n=new p(t,6,1);return this.setAttribute(`instanceStart`,new _(n,3,0)),this.setAttribute(`instanceEnd`,new _(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e,t=3){let n;e instanceof Float32Array?n=e:Array.isArray(e)&&(n=new Float32Array(e));let r=new p(n,t*2,1);return this.setAttribute(`instanceColorStart`,new _(r,t,0)),this.setAttribute(`instanceColorEnd`,new _(r,t,t)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new ae(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new f);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),S.setFromBufferAttribute(t),this.boundingBox.union(S))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new u),this.boundingBox===null&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let r=0;for(let i=0,a=e.count;i<a;i++)C.fromBufferAttribute(e,i),r=Math.max(r,n.distanceToSquared(C)),C.fromBufferAttribute(t,i),r=Math.max(r,n.distanceToSquared(C));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error(`THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.`,this)}}toJSON(){}applyMatrix(e){return console.warn(`THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4().`),this.applyMatrix4(e)}},T=class extends w{constructor(){super(),this.isLineGeometry=!0,this.type=`LineGeometry`}setPositions(e){let t=e.length-3,n=new Float32Array(2*t);for(let r=0;r<t;r+=3)n[2*r]=e[r],n[2*r+1]=e[r+1],n[2*r+2]=e[r+2],n[2*r+3]=e[r+3],n[2*r+4]=e[r+4],n[2*r+5]=e[r+5];return super.setPositions(n),this}setColors(e,t=3){let n=e.length-t,r=new Float32Array(2*n);if(t===3)for(let i=0;i<n;i+=t)r[2*i]=e[i],r[2*i+1]=e[i+1],r[2*i+2]=e[i+2],r[2*i+3]=e[i+3],r[2*i+4]=e[i+4],r[2*i+5]=e[i+5];else for(let i=0;i<n;i+=t)r[2*i]=e[i],r[2*i+1]=e[i+1],r[2*i+2]=e[i+2],r[2*i+3]=e[i+3],r[2*i+4]=e[i+4],r[2*i+5]=e[i+5],r[2*i+6]=e[i+6],r[2*i+7]=e[i+7];return super.setColors(r,t),this}fromLine(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}},E=class extends d{constructor(e){super({type:`LineMaterial`,uniforms:i.clone(i.merge([ne.common,ne.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new ie(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
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
					#include <${b>=154?`colorspace_fragment`:`encodings_fragment`}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA=`1`:delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(e){this.uniforms.diffuse.value=e}},worldUnits:{enumerable:!0,get:function(){return`WORLD_UNITS`in this.defines},set:function(e){e===!0?this.defines.WORLD_UNITS=``:delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(e){this.uniforms.linewidth.value=e}},dashed:{enumerable:!0,get:function(){return`USE_DASH`in this.defines},set(e){!!e!=`USE_DASH`in this.defines&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH=``:delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(e){this.uniforms.dashScale.value=e}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(e){this.uniforms.dashSize.value=e}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(e){this.uniforms.dashOffset.value=e}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(e){this.uniforms.gapSize.value=e}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(e){this.uniforms.opacity.value=e}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(e){this.uniforms.resolution.value.copy(e)}},alphaToCoverage:{enumerable:!0,get:function(){return`USE_ALPHA_TO_COVERAGE`in this.defines},set:function(e){!!e!=`USE_ALPHA_TO_COVERAGE`in this.defines&&(this.needsUpdate=!0),e===!0?(this.defines.USE_ALPHA_TO_COVERAGE=``,this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}},D=new o,O=new v,k=new v,A=new o,j=new o,M=new o,N=new v,P=new h,F=new c,se=new v,I=new f,L=new u,R=new o,z,B;function ce(e,t,n){return R.set(0,0,-t,1).applyMatrix4(e.projectionMatrix),R.multiplyScalar(1/R.w),R.x=B/n.width,R.y=B/n.height,R.applyMatrix4(e.projectionMatrixInverse),R.multiplyScalar(1/R.w),Math.abs(Math.max(R.x,R.y))}function le(e,t){let n=e.matrixWorld,r=e.geometry,i=r.attributes.instanceStart,a=r.attributes.instanceEnd,o=Math.min(r.instanceCount,i.count);for(let r=0,s=o;r<s;r++){F.start.fromBufferAttribute(i,r),F.end.fromBufferAttribute(a,r),F.applyMatrix4(n);let o=new v,s=new v;z.distanceSqToSegment(F.start,F.end,s,o),s.distanceTo(o)<B*.5&&t.push({point:s,pointOnLine:o,distance:z.origin.distanceTo(s),object:e,face:null,faceIndex:r,uv:null,[x]:null})}}function ue(e,t,n){let r=t.projectionMatrix,i=e.material.resolution,a=e.matrixWorld,o=e.geometry,s=o.attributes.instanceStart,c=o.attributes.instanceEnd,u=Math.min(o.instanceCount,s.count),d=-t.near;z.at(1,M),M.w=1,M.applyMatrix4(t.matrixWorldInverse),M.applyMatrix4(r),M.multiplyScalar(1/M.w),M.x*=i.x/2,M.y*=i.y/2,M.z=0,N.copy(M),P.multiplyMatrices(t.matrixWorldInverse,a);for(let t=0,o=u;t<o;t++){if(A.fromBufferAttribute(s,t),j.fromBufferAttribute(c,t),A.w=1,j.w=1,A.applyMatrix4(P),j.applyMatrix4(P),A.z>d&&j.z>d)continue;if(A.z>d){let e=A.z-j.z,t=(A.z-d)/e;A.lerp(j,t)}else if(j.z>d){let e=j.z-A.z,t=(j.z-d)/e;j.lerp(A,t)}A.applyMatrix4(r),j.applyMatrix4(r),A.multiplyScalar(1/A.w),j.multiplyScalar(1/j.w),A.x*=i.x/2,A.y*=i.y/2,j.x*=i.x/2,j.y*=i.y/2,F.start.copy(A),F.start.z=0,F.end.copy(j),F.end.z=0;let o=F.closestPointToPointParameter(N,!0);F.at(o,se);let u=l.lerp(A.z,j.z,o),f=u>=-1&&u<=1,p=N.distanceTo(se)<B*.5;if(f&&p){F.start.fromBufferAttribute(s,t),F.end.fromBufferAttribute(c,t),F.start.applyMatrix4(a),F.end.applyMatrix4(a);let r=new v,i=new v;z.distanceSqToSegment(F.start,F.end,i,r),n.push({point:i,pointOnLine:r,distance:z.origin.distanceTo(i),object:e,face:null,faceIndex:t,uv:null,[x]:null})}}}var V=class extends ee{constructor(e=new w,t=new E({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type=`LineSegments2`}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,r=new Float32Array(2*t.count);for(let e=0,i=0,a=t.count;e<a;e++,i+=2)O.fromBufferAttribute(t,e),k.fromBufferAttribute(n,e),r[i]=i===0?0:r[i-1],r[i+1]=r[i]+O.distanceTo(k);let i=new p(r,2,1);return e.setAttribute(`instanceDistanceStart`,new _(i,1,0)),e.setAttribute(`instanceDistanceEnd`,new _(i,1,1)),this}raycast(e,t){let n=this.material.worldUnits,r=e.camera;r===null&&!n&&console.error(`LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.`);let i=e.params.Line2===void 0?0:e.params.Line2.threshold||0;z=e.ray;let a=this.matrixWorld,o=this.geometry,s=this.material;B=s.linewidth+i,o.boundingSphere===null&&o.computeBoundingSphere(),L.copy(o.boundingSphere).applyMatrix4(a);let c;if(c=n?B*.5:ce(r,Math.max(r.near,L.distanceToPoint(z.origin)),s.resolution),L.radius+=c,z.intersectsSphere(L)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),I.copy(o.boundingBox).applyMatrix4(a);let l;l=n?B*.5:ce(r,Math.max(r.near,I.distanceToPoint(z.origin)),s.resolution),I.expandByScalar(l),z.intersectsBox(I)!==!1&&(n?le(this,t):ue(this,r,t))}onBeforeRender(e){let t=this.material.uniforms;t&&t.resolution&&(e.getViewport(D),this.material.uniforms.resolution.value.set(D.z,D.w))}},de=class extends V{constructor(e=new T,t=new E({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type=`Line2`}},H=e(t()),fe=H.forwardRef(function({points:e,color:t=16777215,vertexColors:n,linewidth:r,lineWidth:i,segments:a,dashed:s,...c},l){var u;let d=m(e=>e.size),f=H.useMemo(()=>a?new V:new de,[a]),[p]=H.useState(()=>new E),ee=(n==null||(u=n[0])==null?void 0:u.length)===4?4:3,h=H.useMemo(()=>{let r=a?new w:new T,i=e.map(e=>{let t=Array.isArray(e);return e instanceof v||e instanceof o?[e.x,e.y,e.z]:e instanceof ie?[e.x,e.y,0]:t&&e.length===3?[e[0],e[1],e[2]]:t&&e.length===2?[e[0],e[1],0]:e});if(r.setPositions(i.flat()),n){t=16777215;let e=n.map(e=>e instanceof te?e.toArray():e);r.setColors(e.flat(),ee)}return r},[e,a,n,ee]);return H.useLayoutEffect(()=>{f.computeLineDistances()},[e,f]),H.useLayoutEffect(()=>{s?p.defines.USE_DASH=``:delete p.defines.USE_DASH,p.needsUpdate=!0},[s,p]),H.useEffect(()=>()=>{h.dispose(),p.dispose()},[h]),H.createElement(`primitive`,y({object:f,ref:l},c),H.createElement(`primitive`,{object:h,attach:`geometry`}),H.createElement(`primitive`,y({object:p,attach:`material`,color:t,vertexColors:!!n,resolution:[d.width,d.height],linewidth:r??i??1,dashed:s,transparent:ee===4},c)))});function U(e,t){let n=e+`Geometry`;return H.forwardRef(({args:e,children:r,...i},a)=>{let o=H.useRef(null);return H.useImperativeHandle(a,()=>o.current),H.useLayoutEffect(()=>void t?.(o.current)),H.createElement(`mesh`,y({ref:o},i),H.createElement(n,{attach:`geometry`,args:e}),r)})}var pe=U(`ring`),me=r(),W=n();function he(e){let t=(0,me.c)(98),{mouseX:n,mouseY:r}=e,i=(0,H.useRef)(null),o;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(o={x:0,y:0},t[0]=o):o=t[0];let s=(0,H.useRef)(o),c;t[1]===Symbol.for(`react.memo_cache_sentinel`)?(c=new v,t[1]=c):c=t[1];let l=c,u;t[2]===Symbol.for(`react.memo_cache_sentinel`)?(u=new v,t[2]=u):u=t[2];let d=u,f;t[3]===Symbol.for(`react.memo_cache_sentinel`)?(f=new v,t[3]=f):f=t[3];let p=f,{theme:ee}=oe(),m=ee===`light`,te=m?`#222222`:`#ffffff`,h=m?`#000000`:`#ffffff`,ne=m?`#ffffff`:`#0a0a0a`,g=m?`#eaeaea`:`#111111`,_;if(t[4]===Symbol.for(`react.memo_cache_sentinel`)){_=[];let e=(e,t,n,r,i,a,o,s)=>{let c=s===void 0?!1:s;_.push({points:[[e,t,.03],[n,r,.03],[i,a,.03]],opacity:o,animated:c})};e(-.5,.5,-.8,.8,-1.2,.8,.5,!0),e(-.5,.4,-.9,.7,-1.2,.7,.4,!0),e(-.5,.3,-1,.6,-1.2,.6,.3),e(.5,.5,.8,.8,1.2,.8,.4,!0),e(.5,.3,1,.3,1.4,.6,.3),e(-.5,-.5,-.8,-.8,-1.2,-.8,.4,!0),e(.5,-.5,.8,-.8,1.2,-.8,.4),_.push({points:[[-1.8,1.2,.03],[-1.8,-1.2,.03],[1.8,-1.2,.03],[1.8,1.2,.03]],opacity:.2}),t[4]=_}else _=t[4];let ie=_,ae,y;t[5]===Symbol.for(`react.memo_cache_sentinel`)?(ae=[0,0,.05],y=[.8,.8,.06],t[5]=ae,t[6]=y):(ae=t[5],y=t[6]);let b;t[7]===g?b=t[8]:(b={pos:ae,size:y,color:g,type:`cpu`},t[7]=g,t[8]=b);let x,S;t[9]===Symbol.for(`react.memo_cache_sentinel`)?(x=[-1.2,.7,.05],S=[.4,.6,.06],t[9]=x,t[10]=S):(x=t[9],S=t[10]);let C;t[11]===g?C=t[12]:(C={pos:x,size:S,color:g,type:`ram`},t[11]=g,t[12]=C);let w,T;t[13]===Symbol.for(`react.memo_cache_sentinel`)?(w=[-1.2,-.7,.05],T=[.4,.6,.06],t[13]=w,t[14]=T):(w=t[13],T=t[14]);let E;t[15]===g?E=t[16]:(E={pos:w,size:T,color:g,type:`ram`},t[15]=g,t[16]=E);let D,O;t[17]===Symbol.for(`react.memo_cache_sentinel`)?(D=[1.2,.7,.05],O=[.5,.5,.06],t[17]=D,t[18]=O):(D=t[17],O=t[18]);let k;t[19]===g?k=t[20]:(k={pos:D,size:O,color:g,type:`radio`},t[19]=g,t[20]=k);let A,j;t[21]===Symbol.for(`react.memo_cache_sentinel`)?(A=[1.2,-.7,.05],j=[.3,.3,.08],t[21]=A,t[22]=j):(A=t[21],j=t[22]);let M;t[23]===g?M=t[24]:(M={pos:A,size:j,color:g,type:`pmu`},t[23]=g,t[24]=M);let N;t[25]!==C||t[26]!==E||t[27]!==k||t[28]!==M||t[29]!==b?(N=[b,C,E,k,M],t[25]=C,t[26]=E,t[27]=k,t[28]=M,t[29]=b,t[30]=N):N=t[30];let P=N,F;if(t[31]===Symbol.for(`react.memo_cache_sentinel`)){F=[];for(let e=0;e<20;e++)F.push({pos:[(Math.random()-.5)*3.4,(Math.random()-.5)*2.4,.04],rot:[0,0,Math.random()>.5?0:Math.PI/2],isCapacitor:Math.random()>.5});t[31]=F}else F=t[31];let se=F,I;t[32]===Symbol.for(`react.memo_cache_sentinel`)?(I=ie.filter(be).map(ye),t[32]=I):I=t[32];let L=I,R=(0,H.useRef)(null),z=(0,H.useRef)(null),B=(0,H.useRef)(null),ce=(0,H.useRef)(null),le;t[33]!==m||t[34]!==n||t[35]!==r?(le=(e,t)=>{i.current&&(s.current.x=r*.2,s.current.y=n*.2,i.current.rotation.x=i.current.rotation.x+(s.current.x-i.current.rotation.x)*.05,i.current.rotation.y=i.current.rotation.y+(s.current.y-i.current.rotation.y)*.05,i.current.rotation.z=i.current.rotation.z+t*.02,R.current&&(R.current.position.z=.12+Math.sin(e.clock.elapsedTime*3)*.03),z.current&&(z.current.emissiveIntensity=m?.8:2+Math.sin(e.clock.elapsedTime*6)*1),B.current&&B.current.children.forEach((n,r)=>{n.rotation.z=n.rotation.z-t*(.5+r*.2),n.material.opacity=.3+Math.sin(e.clock.elapsedTime*2+r)*.2}),ce.current&&ce.current.children.forEach((e,n)=>{let r=L[n];if(r.progress+=t*.5,r.progress>1&&(r.progress=0),l.set(...r.points[0]),d.set(...r.points[1]),p.set(...r.points[2]),r.progress<.5){let t=r.progress*2;e.position.copy(l).lerp(d,t)}else{let t=(r.progress-.5)*2;e.position.copy(d).lerp(p,t)}}))},t[33]=m,t[34]=n,t[35]=r,t[36]=le):le=t[36],re(le);let ue,V;t[37]===Symbol.for(`react.memo_cache_sentinel`)?(ue=[0,0,-.05],V=(0,W.jsx)(`boxGeometry`,{args:[4.2,3,.02]}),t[37]=ue,t[38]=V):(ue=t[37],V=t[38]);let de=m?`#e0e0e0`:`#050505`,U;t[39]===de?U=t[40]:(U=(0,W.jsxs)(`mesh`,{position:ue,children:[V,(0,W.jsx)(`meshStandardMaterial`,{color:de,roughness:.9,metalness:.1})]}),t[39]=de,t[40]=U);let he;t[41]===Symbol.for(`react.memo_cache_sentinel`)?(he=(0,W.jsx)(`boxGeometry`,{args:[4,2.8,.04]}),t[41]=he):he=t[41];let xe;t[42]===ne?xe=t[43]:(xe=(0,W.jsxs)(`mesh`,{children:[he,(0,W.jsx)(`meshStandardMaterial`,{color:ne,roughness:.7,metalness:.6})]}),t[42]=ne,t[43]=xe);let Se;t[44]===Symbol.for(`react.memo_cache_sentinel`)?(Se=(0,W.jsx)(`edgesGeometry`,{args:[new a(4,2.8,.04)]}),t[44]=Se):Se=t[44];let G;t[45]===h?G=t[46]:(G=(0,W.jsxs)(`lineSegments`,{children:[Se,(0,W.jsx)(`lineBasicMaterial`,{color:h,transparent:!0,opacity:.3})]}),t[45]=h,t[46]=G);let K;t[47]===te?K=t[48]:(K=ie.map((e,t)=>(0,W.jsx)(fe,{points:e.points,color:te,transparent:!0,opacity:e.opacity,lineWidth:1.5},`trace-${t}`)),t[47]=te,t[48]=K);let q;t[49]===h?q=t[50]:(q=(0,W.jsx)(`group`,{ref:ce,children:L.map((e,t)=>(0,W.jsxs)(`mesh`,{children:[(0,W.jsx)(`sphereGeometry`,{args:[.03,8,8]}),(0,W.jsx)(`meshBasicMaterial`,{color:h})]},`packet-${t}`))}),t[49]=h,t[50]=q);let J;t[51]!==P||t[52]!==h?(J=P.map((e,t)=>(0,W.jsxs)(`group`,{position:e.pos,children:[(0,W.jsxs)(`mesh`,{children:[(0,W.jsx)(`boxGeometry`,{args:e.size}),(0,W.jsx)(`meshStandardMaterial`,{color:e.color,roughness:.4,metalness:.8})]}),(0,W.jsxs)(`lineSegments`,{children:[(0,W.jsx)(`edgesGeometry`,{args:[new a(...e.size)]}),(0,W.jsx)(`lineBasicMaterial`,{color:h,transparent:!0,opacity:.4})]}),e.type===`cpu`&&(0,W.jsxs)(`group`,{position:[0,0,-.02],children:[Array.from({length:16}).map(ve),Array.from({length:16}).map(_e)]})]},`chip-${t}`)),t[51]=P,t[52]=h,t[53]=J):J=t[53];let Y;t[54]===m?Y=t[55]:(Y=se.map((e,t)=>(0,W.jsxs)(`group`,{position:e.pos,rotation:e.rot,children:[(0,W.jsxs)(`mesh`,{children:[(0,W.jsx)(`boxGeometry`,{args:e.isCapacitor?[.06,.04,.04]:[.08,.03,.02]}),(0,W.jsx)(`meshStandardMaterial`,{color:e.isCapacitor?m?`#a0a0a0`:`#444`:m?`#111`:`#222`,roughness:.5})]}),(0,W.jsxs)(`mesh`,{position:[-.04,0,-.01],children:[(0,W.jsx)(`boxGeometry`,{args:[.02,.05,.01]}),(0,W.jsx)(`meshStandardMaterial`,{color:`silver`,metalness:1,roughness:.2})]}),(0,W.jsxs)(`mesh`,{position:[.04,0,-.01],children:[(0,W.jsx)(`boxGeometry`,{args:[.02,.05,.01]}),(0,W.jsx)(`meshStandardMaterial`,{color:`silver`,metalness:1,roughness:.2})]})]},`smd-${t}`)),t[54]=m,t[55]=Y);let Ce;t[56]===Symbol.for(`react.memo_cache_sentinel`)?(Ce=[0,0,.08],t[56]=Ce):Ce=t[56];let we;t[57]===Symbol.for(`react.memo_cache_sentinel`)?(we=(0,W.jsx)(`sphereGeometry`,{args:[.12,32,32]}),t[57]=we):we=t[57];let Te=m?`#333`:`#ffffff`,Ee=m?`#111`:`#ffffff`,De=m?.5:2,Oe=m?.8:.9,X;t[58]!==Te||t[59]!==Ee||t[60]!==De||t[61]!==Oe?(X=(0,W.jsxs)(`mesh`,{ref:R,children:[we,(0,W.jsx)(`meshStandardMaterial`,{ref:z,color:Te,emissive:Ee,emissiveIntensity:De,transparent:!0,opacity:Oe})]}),t[58]=Te,t[59]=Ee,t[60]=De,t[61]=Oe,t[62]=X):X=t[62];let ke,Ae;t[63]===Symbol.for(`react.memo_cache_sentinel`)?(ke=[.2,.22,32],Ae=[0,0,-.02],t[63]=ke,t[64]=Ae):(ke=t[63],Ae=t[64]);let Z;t[65]===h?Z=t[66]:(Z=(0,W.jsx)(pe,{args:ke,position:Ae,children:(0,W.jsx)(`meshBasicMaterial`,{color:h,transparent:!0,opacity:.3,side:2})}),t[65]=h,t[66]=Z);let je,Me;t[67]===Symbol.for(`react.memo_cache_sentinel`)?(je=[.28,.29,48],Me=[0,0,-.04],t[67]=je,t[68]=Me):(je=t[67],Me=t[68]);let Q;t[69]===h?Q=t[70]:(Q=(0,W.jsx)(pe,{args:je,position:Me,children:(0,W.jsx)(`meshBasicMaterial`,{color:h,transparent:!0,opacity:.15,side:2})}),t[69]=h,t[70]=Q);let $;t[71]!==Z||t[72]!==Q?($=(0,W.jsxs)(`group`,{ref:B,children:[Z,Q]}),t[71]=Z,t[72]=Q,t[73]=$):$=t[73];let Ne;t[74]!==X||t[75]!==$?(Ne=(0,W.jsxs)(`group`,{position:Ce,children:[X,$]}),t[74]=X,t[75]=$,t[76]=Ne):Ne=t[76];let Pe,Fe,Ie;t[77]===Symbol.for(`react.memo_cache_sentinel`)?(Pe=[1.4,.7,.06],Fe=[Math.PI/2,0,0],Ie=(0,W.jsx)(`cylinderGeometry`,{args:[.02,.02,.4,8]}),t[77]=Pe,t[78]=Fe,t[79]=Ie):(Pe=t[77],Fe=t[78],Ie=t[79]);let Le=m?`#555`:`#888`,Re;t[80]===Le?Re=t[81]:(Re=(0,W.jsxs)(`mesh`,{rotation:Fe,children:[Ie,(0,W.jsx)(`meshStandardMaterial`,{color:Le,metalness:.9,roughness:.1})]}),t[80]=Le,t[81]=Re);let ze;t[82]===Symbol.for(`react.memo_cache_sentinel`)?(ze=Array.from({length:20}).map(ge),t[82]=ze):ze=t[82];let Be;t[83]===h?Be=t[84]:(Be=(0,W.jsx)(fe,{points:ze,color:h,lineWidth:1,transparent:!0,opacity:.4}),t[83]=h,t[84]=Be);let Ve;t[85]!==Re||t[86]!==Be?(Ve=(0,W.jsxs)(`group`,{position:Pe,children:[Re,Be]}),t[85]=Re,t[86]=Be,t[87]=Ve):Ve=t[87];let He;return t[88]!==U||t[89]!==xe||t[90]!==G||t[91]!==K||t[92]!==q||t[93]!==J||t[94]!==Y||t[95]!==Ne||t[96]!==Ve?(He=(0,W.jsxs)(`group`,{ref:i,children:[U,xe,G,K,q,J,Y,Ne,Ve]}),t[88]=U,t[89]=xe,t[90]=G,t[91]=K,t[92]=q,t[93]=J,t[94]=Y,t[95]=Ne,t[96]=Ve,t[97]=He):He=t[97],He}function ge(e,t){return[.1+Math.sin(t*.5)*.05,-.2+t*.02,0]}function _e(e,t){return(0,W.jsxs)(`mesh`,{position:[-.35+t*.046,-.42,0],children:[(0,W.jsx)(`boxGeometry`,{args:[.02,.06,.02]}),(0,W.jsx)(`meshStandardMaterial`,{color:`#c0c0c0`,metalness:1})]},`pin-b-${t}`)}function ve(e,t){return(0,W.jsxs)(`mesh`,{position:[-.35+t*.046,.42,0],children:[(0,W.jsx)(`boxGeometry`,{args:[.02,.06,.02]}),(0,W.jsx)(`meshStandardMaterial`,{color:`#c0c0c0`,metalness:1})]},`pin-t-${t}`)}function ye(e){return{points:e.points,progress:Math.random()}}function be(e){return e.animated}export{he as default};