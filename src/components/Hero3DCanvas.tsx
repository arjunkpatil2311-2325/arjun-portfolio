import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Hero3DCanvas: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for mouse parallax rotation
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Central Abstract Glass Polyhedron (Icosahedron / Octahedron with wireframe glass look)
    const glassGeometry = new THREE.IcosahedronGeometry(1.65, 0);
    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x16122c,
      roughness: 0.12,
      metalness: 0.15,
      transmission: 0.85, // Glass effect
      ior: 1.5,
      thickness: 1.2,
      reflectivity: 0.9,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      wireframe: false
    });
    const centralMesh = new THREE.Mesh(glassGeometry, glassMaterial);
    mainGroup.add(centralMesh);

    // Glowing wireframe cage over the glass core
    const wireframeGeometry = new THREE.IcosahedronGeometry(1.68, 0);
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x9B7BFF,
      wireframe: true,
      transparent: true,
      opacity: 0.35
    });
    const wireframeMesh = new THREE.Mesh(wireframeGeometry, wireframeMaterial);
    centralMesh.add(wireframeMesh);

    // 2. Inner Glowing Core
    const coreGeometry = new THREE.OctahedronGeometry(0.75, 2);
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0x42D9FF,
      emissive: 0x42D9FF,
      emissiveIntensity: 0.8,
      roughness: 0.2,
      metalness: 0.8
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    centralMesh.add(coreMesh);

    // 3. Metallic Outer Orbital Rings
    const ringMaterialViolet = new THREE.MeshStandardMaterial({
      color: 0x9B7BFF,
      metalness: 0.9,
      roughness: 0.2,
      emissive: 0x9B7BFF,
      emissiveIntensity: 0.25
    });

    const ringMaterialCyan = new THREE.MeshStandardMaterial({
      color: 0x42D9FF,
      metalness: 0.95,
      roughness: 0.15,
      emissive: 0x42D9FF,
      emissiveIntensity: 0.2
    });

    // Ring 1 (Violet)
    const ring1Geometry = new THREE.TorusGeometry(2.4, 0.035, 16, 100);
    const ring1 = new THREE.Mesh(ring1Geometry, ringMaterialViolet);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 6;
    mainGroup.add(ring1);

    // Ring 2 (Cyan)
    const ring2Geometry = new THREE.TorusGeometry(2.8, 0.03, 16, 100);
    const ring2 = new THREE.Mesh(ring2Geometry, ringMaterialCyan);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.y = -Math.PI / 4;
    mainGroup.add(ring2);

    // Ring 3 (Outer subtle thin ring)
    const ring3Geometry = new THREE.TorusGeometry(3.1, 0.018, 16, 100);
    const ring3Material = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.25
    });
    const ring3 = new THREE.Mesh(ring3Geometry, ring3Material);
    ring3.rotation.z = Math.PI / 2.5;
    mainGroup.add(ring3);

    // Small satellite nodes on rings
    const satelliteGeo = new THREE.SphereGeometry(0.08, 16, 16);
    const satelliteMat = new THREE.MeshBasicMaterial({ color: 0x42D9FF });
    const sat1 = new THREE.Mesh(satelliteGeo, satelliteMat);
    sat1.position.set(2.4, 0, 0);
    ring1.add(sat1);

    const sat2 = new THREE.Mesh(satelliteGeo, new THREE.MeshBasicMaterial({ color: 0x9B7BFF }));
    sat2.position.set(0, 2.8, 0);
    ring2.add(sat2);

    // 4. Floating Particles (Starfield / Stardust)
    const particleCount = 220;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const colorViolet = new THREE.Color(0x9B7BFF);
    const colorCyan = new THREE.Color(0x42D9FF);
    const colorWhite = new THREE.Color(0xF5F5F7);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 14;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 10;

      const mixedColor = Math.random() > 0.5 ? colorViolet : Math.random() > 0.5 ? colorCyan : colorWhite;
      particleColors[i * 3] = mixedColor.r;
      particleColors[i * 3 + 1] = mixedColor.g;
      particleColors[i * 3 + 2] = mixedColor.b;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // 5. Lighting Setup for rich cinematic glow
    const ambientLight = new THREE.AmbientLight(0x0e111a, 2.2);
    scene.add(ambientLight);

    const lightViolet = new THREE.PointLight(0x9B7BFF, 3.5, 20);
    lightViolet.position.set(4, 3, 4);
    scene.add(lightViolet);

    const lightCyan = new THREE.PointLight(0x42D9FF, 3.2, 20);
    lightCyan.position.set(-4, -2, 3);
    scene.add(lightCyan);

    const backRimLight = new THREE.DirectionalLight(0xffffff, 1.2);
    backRimLight.position.set(0, 5, -5);
    scene.add(backRimLight);

    // Mouse Tracking for Smooth Parallax
    let targetRotationX = 0;
    let targetRotationY = 0;
    let currentRotationX = 0;
    let currentRotationY = 0;

    const onPointerMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth) * 2 - 1;
      const y = -(e.clientY / innerHeight) * 2 + 1;

      targetRotationY = x * 0.45;
      targetRotationX = -y * 0.35;
    };

    window.addEventListener('mousemove', onPointerMove, { passive: true });

    // Handle Window Resize
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        // Central geometry subtle continuous rotation
        centralMesh.rotation.x = elapsedTime * 0.22;
        centralMesh.rotation.y = elapsedTime * 0.28;
        coreMesh.rotation.y = -elapsedTime * 0.4;

        // Rings rotation at independent velocities
        ring1.rotation.z = elapsedTime * 0.3;
        ring1.rotation.y = Math.PI / 6 + Math.sin(elapsedTime * 0.4) * 0.15;

        ring2.rotation.z = -elapsedTime * 0.25;
        ring2.rotation.x = -Math.PI / 4 + Math.cos(elapsedTime * 0.35) * 0.15;

        ring3.rotation.y = elapsedTime * 0.15;

        // Floating hover motion
        mainGroup.position.y = Math.sin(elapsedTime * 0.8) * 0.18;

        // Particle subtle drift
        particles.rotation.y = elapsedTime * 0.03;

        // Mouse Parallax Damping / Lerp
        currentRotationX += (targetRotationX - currentRotationX) * 0.05;
        currentRotationY += (targetRotationY - currentRotationY) * 0.05;

        mainGroup.rotation.x = currentRotationX;
        mainGroup.rotation.y = currentRotationY;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('resize', handleResize);

      // Dispose resources
      glassGeometry.dispose();
      glassMaterial.dispose();
      wireframeGeometry.dispose();
      wireframeMaterial.dispose();
      coreGeometry.dispose();
      coreMaterial.dispose();
      ring1Geometry.dispose();
      ringMaterialViolet.dispose();
      ring2Geometry.dispose();
      ringMaterialCyan.dispose();
      ring3Geometry.dispose();
      ring3Material.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-full relative cursor-grab active:cursor-grabbing pointer-events-auto"
      aria-label="Interactive 3D Glass Sculpture with metallic orbital rings"
      title="Drag to rotate and explore"
    />
  );
};

