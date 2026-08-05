"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export const Hero3DCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene Setup
    const scene = new THREE.Scene();

    // Camera Setup
    const width = container.clientWidth || 400;
    const height = container.clientHeight || 400;
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 6;

    // Renderer Setup
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for mouse parallax rotation
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Central Metallic Torus Knot Geometry
    const knotGeometry = new THREE.TorusKnotGeometry(1.1, 0.32, 120, 16);
    const knotMaterial = new THREE.MeshStandardMaterial({
      color: 0x091428,
      emissive: 0x0284c7,
      emissiveIntensity: 0.35,
      roughness: 0.2,
      metalness: 0.85,
      wireframe: false,
    });
    const knotMesh = new THREE.Mesh(knotGeometry, knotMaterial);
    mainGroup.add(knotMesh);

    // 2. Wireframe Outer Icosahedron Shell
    const shellGeometry = new THREE.IcosahedronGeometry(2.1, 1);
    const shellMaterial = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const shellMesh = new THREE.Mesh(shellGeometry, shellMaterial);
    mainGroup.add(shellMesh);

    // 3. Orbiting Geometric Rings
    const ringGeometry = new THREE.TorusGeometry(2.6, 0.02, 16, 100);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0xc084fc,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    });
    const ringMesh = new THREE.Mesh(ringGeometry, ringMaterial);
    ringMesh.rotation.x = Math.PI / 3;
    mainGroup.add(ringMesh);

    // 4. 3D Floating Particle Cloud
    const particleCount = 120;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const cyanColor = new THREE.Color(0x38bdf8);
    const purpleColor = new THREE.Color(0xc084fc);

    for (let i = 0; i < particleCount; i++) {
      const radius = 2.8 + Math.random() * 1.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const mixedColor = cyanColor.clone().lerp(purpleColor, Math.random());
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    particleGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(colors, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.06,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
    });
    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    mainGroup.add(particleSystem);

    // Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const cyanPointLight = new THREE.PointLight(0x38bdf8, 3, 20);
    cyanPointLight.position.set(4, 4, 5);
    scene.add(cyanPointLight);

    const purplePointLight = new THREE.PointLight(0xc084fc, 2.5, 20);
    purplePointLight.position.set(-4, -4, 4);
    scene.add(purplePointLight);

    // Interactive Mouse Tracking
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const mouseX = (e.clientX / innerWidth) * 2 - 1;
      const mouseY = -(e.clientY / innerHeight) * 2 + 1;

      targetRotationX = mouseY * 0.4;
      targetRotationY = mouseX * 0.4;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || 400;
      const h = container.clientHeight || 400;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);

      // Continuous 3D Self-Rotations
      knotMesh.rotation.x += 0.005;
      knotMesh.rotation.y += 0.008;

      shellMesh.rotation.x -= 0.003;
      shellMesh.rotation.y -= 0.004;

      ringMesh.rotation.z += 0.006;
      particleSystem.rotation.y += 0.002;

      // Smooth Inertial Mouse Interpolation
      mainGroup.rotation.x += (targetRotationX - mainGroup.rotation.x) * 0.05;
      mainGroup.rotation.y += (targetRotationY - mainGroup.rotation.y) * 0.05;

      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      knotGeometry.dispose();
      knotMaterial.dispose();
      shellGeometry.dispose();
      shellMaterial.dispose();
      ringGeometry.dispose();
      ringMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-[320px] sm:min-h-[420px] flex items-center justify-center relative z-10"
    />
  );
};
