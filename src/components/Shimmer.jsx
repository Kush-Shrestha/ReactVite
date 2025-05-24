import React from 'react';

const skeletonCards = Array(20).fill(0);

const shimmerKeyframes = `
  @keyframes shimmer {
    0% {
      background-position: -468px 0;
    }
    100% {
      background-position: 468px 0;
    }
  }
`;

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill,minmax(250px,1fr))',
    gap: '20px',
    padding: '20px',
    backgroundColor: '#f5f7fa',
    minHeight: '100vh',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  },
  card: {
    background: '#fff',
    borderRadius: '12px',
    padding: '15px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
    overflow: 'hidden',
  },
  shimmerWrapper: {
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: '#e0e0e0',
    borderRadius: '8px',
  },
  shimmer: {
    animation: 'shimmer 1.5s infinite linear',
    background: 'linear-gradient(to right, #e0e0e0 8%, #f3f3f3 18%, #e0e0e0 33%)',
    backgroundSize: '800px 104px',
    height: '100%',
    width: '100%',
  },
  imageSkeleton: {
    width: '100%',
    height: '150px',
    borderRadius: '12px',
    marginBottom: '15px',
  },
  textSkeleton: {
    height: '16px',
    marginBottom: '10px',
    borderRadius: '8px',
  },
  smallTextSkeleton: {
    height: '14px',
    width: '60%',
    marginBottom: '10px',
    borderRadius: '8px',
  },
  buttonSkeleton: {
    height: '36px',
    width: '100%',
    borderRadius: '20px',
    marginTop: '10px',
  }
}

function ShimmerSkeleton({ style }) {
  return (
    <div style={{ ...styles.shimmerWrapper, ...style }}>
      <div style={styles.shimmer}></div>
    </div>
  );
}

export default function EcoEcommerceSkeleton() {
  return (
    <>
      <style>{shimmerKeyframes}</style>
      <div style={styles.container}>
        {skeletonCards.map((_, idx) => (
          <div key={idx} style={styles.card} aria-label="Loading product">
            <ShimmerSkeleton style={styles.imageSkeleton} />
            <ShimmerSkeleton style={{ ...styles.textSkeleton, width: '80%' }} />
            <ShimmerSkeleton style={styles.smallTextSkeleton} />
            <ShimmerSkeleton style={styles.buttonSkeleton} />
          </div>
        ))}
      </div>
    </>
  );
}

