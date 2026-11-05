import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Hero3DCanvas: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      42,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 7.2);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    // Main rotating group
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 2. Sculptural Geometric Core (Faceted Polyhedron with E-Ink Paper Material)
    const baseGeometry = new THREE.IcosahedronGeometry(1.6, 0);

    // Matte Paper Facets
    const paperMaterial = new THREE.MeshStandardMaterial({
      color: 0xF9F8F4,
      roughness: 0.85,
      metalness: 0.05,
      flatShading: true
    });
    const sculptureMesh = new THREE.Mesh(baseGeometry, paperMaterial);
    mainGroup.add(sculptureMesh);

    // Crisp Ink Wireframe Cage
    const wireframeGeometry = new THREE.IcosahedronGeometry(1.61, 0);
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x111111,
      wireframe: true,
      transparent: true,
      opacity: 0.6
    });
    const wireframeMesh = new THREE.Mesh(wireframeGeometry, wireframeMaterial);
    sculptureMesh.add(wireframeMesh);

    // 3. Inner Ink Black Geometric Core with Violet Accent
    const innerGeometry = new THREE.OctahedronGeometry(0.85, 0);
    const innerMaterial = new THREE.MeshStandardMaterial({
      color: 0x111111,
      roughness: 0.35,
      metalness: 0.2,
      flatShading: true
    });
    const innerMesh = new THREE.Mesh(innerGeometry, innerMaterial);
    sculptureMesh.add(innerMesh);

    // Electric Violet Central Accent Node
    const violetAccentGeo = new THREE.SphereGeometry(0.25, 16, 16);
    const violetAccentMat = new THREE.MeshBasicMaterial({
      color: 0x7555FF
    });
    const violetNode = new THREE.Mesh(violetAccentGeo, violetAccentMat);
    innerMesh.add(violetNode);

    // 4. Fine Tactile Orbital Rings (E-Ink Black Hairlines)
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x111111,
      wireframe: false
    });

    const ringVioletMaterial = new THREE.MeshBasicMaterial({
      color: 0x7555FF
    });

    // Ring 1 (Thin Black Orbital)
    const ring1Geo = new THREE.TorusGeometry(2.35, 0.015, 16, 120);
    const ring1 = new THREE.Mesh(ring1Geo, ringMaterial);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 5;
    mainGroup.add(ring1);

    // Small Satellite Notch on Ring 1
    const notchGeo = new THREE.BoxGeometry(0.08, 0.08, 0.08);
    const notch1 = new THREE.Mesh(notchGeo, ringMaterial);
    notch1.position.set(2.35, 0, 0);
    ring1.add(notch1);

    // Ring 2 (Outer Ring with Violet indicator)
    const ring2Geo = new THREE.TorusGeometry(2.75, 0.012, 16, 120);
    const ring2 = new THREE.Mesh(ring2Geo, new THREE.MeshBasicMaterial({ color: 0xC9C8C0 }));
    ring2.rotation.x = -Math.PI / 3.5;
    ring2.rotation.y = -Math.PI / 4;
    mainGroup.add(ring2);

    const notch2 = new THREE.Mesh(new THREE.SphereGeometry(0.06, 12, 12), ringVioletMaterial);
    notch2.position.set(0, 2.75, 0);
    ring2.add(notch2);

    // 5. Stipple / Fine Ink Dust Particles
    const particleCount = 140;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 11;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 9;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x73736D,
      size: 0.035,
      transparent: true,
      opacity: 0.65
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 6. Tactile Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xFFFFFF, 1.6);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xFFFFFF, 2.0);
    keyLight.position.set(4, 5, 5);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xF2F1EB, 1.2);
    rimLight.position.set(-4, -3, -3);
    scene.add(rimLight);

    // Mouse Parallax & Movement Tracking
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const onPointerMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth) * 2 - 1;
      const y = -(e.clientY / innerHeight) * 2 + 1;
      targetY = x * 0.4;
      targetX = -y * 0.3;
    };

    window.addEventListener('mousemove', onPointerMove, { passive: true });

    // Handle Resize
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
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        // Continuous slow rotation
        sculptureMesh.rotation.x = elapsed * 0.18;
        sculptureMesh.rotation.y = elapsed * 0.22;
        innerMesh.rotation.y = -elapsed * 0.35;

        ring1.rotation.z = elapsed * 0.22;
        ring2.rotation.z = -elapsed * 0.16;

        // Subtle floating movement
        mainGroup.position.y = Math.sin(elapsed * 0.9) * 0.12;

        // Damped Parallax Lerp
        currentX += (targetX - currentX) * 0.06;
        currentY += (targetY - currentY) * 0.06;

        mainGroup.rotation.x = currentX;
        mainGroup.rotation.y = currentY;

        particles.rotation.y = elapsed * 0.02;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('resize', handleResize);

      baseGeometry.dispose();
      paperMaterial.dispose();
      wireframeGeometry.dispose();
      wireframeMaterial.dispose();
      innerGeometry.dispose();
      innerMaterial.dispose();
      violetAccentGeo.dispose();
      violetAccentMat.dispose();
      ring1Geo.dispose();
      ringMaterial.dispose();
      ring2Geo.dispose();
      ringVioletMaterial.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-full relative cursor-grab active:cursor-grabbing"
      aria-label="Interactive 3D E-Ink Kinetic Sculpture"
      title="Hover and drag to interact"
    />
  );
};
