export default function Loading() {
  return (
    <>
      <style>{`
        html, body {
          height: 100%;
          width: 100%;
          margin: 0;
          padding: 0;
          font-size: 100%;
          background: white;
          text-align: center;          
        }

        h1 {
          margin: 0;
          padding: 0;
          font-family: 'Arial Narrow', sans-serif;
          font-weight: 100;
          font-size: 1.1em;
          color: #black;
          margin-top: 10%;
        }

        span {
          position: relative;
          top: 0.63em;
          display: inline-block;
          text-transform: uppercase;
          opacity: 0;
          transform: rotateX(-90deg);
          margin: 0 3px;
          font-weight: bold;
          font-size: 18px;
        }

        .let1 {
          animation: drop 1.2s ease-in-out infinite;
          animation-delay: 1.2s;
        }

        .let2 {
          animation: drop 1.2s ease-in-out infinite;
          animation-delay: 1.3s;
        }

        .let3 {
          animation: drop 1.2s ease-in-out infinite;
          animation-delay: 1.4s;
        }

        .let4 {
          animation: drop 1.2s ease-in-out infinite;
          animation-delay: 1.5s;
        }

        .let5 {
          animation: drop 1.2s ease-in-out infinite;
          animation-delay: 1.6s;
        }

        .let6 {
          animation: drop 1.2s ease-in-out infinite;
          animation-delay: 1.7s;
        }

        .let7 {
          animation: drop 1.2s ease-in-out infinite;
          animation-delay: 1.8s;
        }
       
        @keyframes drop {
          10% {
            opacity: 0.5;
          }
          20% {
            opacity: 1;
            top: 3.78em;
            transform: rotateX(-360deg);
          }
          80% {
            opacity: 1;
            top: 3.78em;
            transform: rotateX(-360deg);
          }
          90% {
            opacity: 0.5;
          }
          100% {
            opacity: 0;
            top: 6.94em;
          }
        }

        

      `}</style>

      <h1>
        <span className="let1">l</span>
        <span className="let2">o</span>
        <span className="let3">a</span>
        <span className="let4">d</span>
        <span className="let5">i</span>
        <span className="let6">n</span>
        <span className="let7">g</span>
      </h1>
    </>
  );
}
