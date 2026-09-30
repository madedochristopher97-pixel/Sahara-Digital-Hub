'use client';

import React, { useSyncExternalStore } from 'react';
import dynamic from 'next/dynamic';
import * as THREE from 'three';
import { useReducedMotion } from 'framer-motion';
import { useTheme } from 'next-themes';

// Polyfill missing chunks in Three.js r160+ before ShaderGradient compiles
if (typeof window !== 'undefined') {
  const sc = THREE.ShaderChunk as Record<string, string>;
  if (sc) {
    if (typeof sc.encodings_fragment === 'undefined') sc.encodings_fragment = '';
    if (typeof sc.uv2_pars_vertex === 'undefined') sc.uv2_pars_vertex = '';
    if (typeof sc.uv2_vertex === 'undefined') sc.uv2_vertex = '';
    if (typeof sc.uv2_pars_fragment === 'undefined') sc.uv2_pars_fragment = '';
  }
}

const emptySubscribe = () => () => {};
function useIsClient() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

// Dynamically import ShaderGradient components with ssr: false
const ShaderGradientCanvas = dynamic(
  () => import('shadergradient').then((mod) => mod.ShaderGradientCanvas),
  { ssr: false }
);

const ShaderGradient = dynamic(
  () => import('shadergradient').then((mod) => mod.ShaderGradient),
  { ssr: false }
);

export function HeroShaderBackground() {
  const mounted = useIsClient();
  const shouldReduceMotion = useReducedMotion();
  const { theme, resolvedTheme } = useTheme();
  const isDark = theme === 'dark' || resolvedTheme === 'dark';

  // Shader configuration adapts background to light/dark for optimal text contrast
  const shaderProps = {
    animate: shouldReduceMotion ? 'off' : 'on',
    axesHelper: 'on',
    bgColor1: isDark ? '#000000' : '#FFFDF6',
    bgColor2: isDark ? '#000000' : '#FFFDF6',
    brightness: isDark ? 1.5 : 1.2,
    cAzimuthAngle: 60,
    cDistance: 7.1,
    cPolarAngle: 90,
    cameraZoom: 15.29,
    color1: '#50ff36',
    color2: isDark ? '#f7feff' : '#008035',
    color3: '#ffc53d',
    destination: 'onCanvas',
    embedMode: 'off',
    envPreset: 'dawn',
    format: 'gif',
    fov: 45,
    frameRate: 10,
    gizmoHelper: 'hide',
    grain: 'off',
    lightType: '3d',
    loop: 'on',
    loopDuration: 10,
    pixelDensity: 1,
    positionX: 0,
    positionY: -0.15,
    positionZ: 0,
    range: 'disabled',
    rangeEnd: 40,
    rangeStart: 0,
    reflection: 0.1,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 0,
    shader: 'defaults',
    type: 'sphere',
    uAmplitude: 1.4,
    uDensity: 1.1,
    uFrequency: 5.5,
    uSpeed: 0.1,
    uStrength: 0.4,
    uTime: 0,
    wireframe: false,
  };

  if (!mounted) {
    return (
      <div className="absolute inset-0 w-full h-full hero-glow pointer-events-none z-0" />
    );
  }

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      <ShaderGradientCanvas
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
      >
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        <ShaderGradient {...(shaderProps as any)} />
      </ShaderGradientCanvas>

      {/* Subtle blend vignette to maintain legibility while letting the shader sphere shine */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFFDF6]/40 dark:from-black/40 via-transparent to-[#FFFDF6] dark:to-[#0A0A0A] pointer-events-none" />
    </div>
  );
}
