import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "./App.css";

function ShirtModel() {
  const [color, setColor] = useState("#8e44ad");

  const handlePointerOver = () => setColor("#f39c12");
  const handlePointerOut = () => setColor("#8e44ad");
  const handleClick = () => setColor("#2ecc71");

  return (
    <mesh
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      onClick={handleClick}
    >
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

function Product3DModel() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#3498db" />
    </mesh>
  );
}

function HeroSection() {
  return (
    <section className="hero-section">
      <h1 className="hero-title">Premium Clothing for Modern Style</h1>
      <p className="hero-description">
        Discover timeless fashion pieces crafted with quality and elegance.
      </p>
      <button className="explore-button">Explore Collection</button>
    </section>
  );
}

function ThreeDSection() {
  return (
    <section className="three-d-section">
      <h2 className="section-title">Interactive 3D Clothing Model</h2>
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 5]} intensity={1} />
        <ShirtModel />
        <OrbitControls enableZoom={true} />
      </Canvas>
    </section>
  );
}

function ProductSection() {
  return (
    <section className="product-section">
      <h2 className="section-title">Our Products</h2>
      <p className="section-description">
        Experience our latest premium collection with interactive 3D previews.
      </p>
      <div className="product-3d-container">
        <Canvas camera={{ position: [2, 2, 2] }}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[3, 3, 5]} intensity={1} />
          <Product3DModel />
          <OrbitControls enableZoom={true} />
        </Canvas>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="about-section">
      <h2 className="section-title">About Us</h2>
      <p className="section-description">
        We are a premium clothing brand committed to delivering stylish and comfortable
        apparel. Our pieces are designed with sophistication and made from high-quality
        fabrics to ensure a luxurious experience for our customers.
      </p>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">© 2025 Premium Clothing. All rights reserved.</p>
    </footer>
  );
}

export default function App() {
  return (
    <div className="app-container">
      <HeroSection />
      <ThreeDSection />
      <ProductSection />
      <AboutSection />
      <Footer />
    </div>
  );
}
