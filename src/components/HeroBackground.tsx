import React from 'react';

export default function HeroBackground() {
  return (
    <>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://img.freepik.com/free-vector/spherical-data-cloud-visualization-3d-big-data-scientific-processing-futuristic-hud-ui-mainframe-screen-technological-data-clusters-analysis-intricate-information-connections_1217-5931.jpg?t=st=1732785805~exp=1732789405~hmac=2024913977c33b65fca98440e6cf699041f5e1f10d9dfa8fa068bdb334bdecd0&w=1380")',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/40" />
      </div>
      
      {/* Animated Grid Overlay */}
      <div className="absolute inset-0 z-10 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000,transparent)]" />
    </>
  );
}
