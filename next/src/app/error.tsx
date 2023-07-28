"use client";

import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <Button className="errorPageHomebutton">Home</Button>
      <div className="error">Something went wrong . . .</div>
      <br />
      <br />

      <style>
        {`
        @import url(https://fonts.googleapis.com/css?family=Gilda+Display);

        html {
          color: black;
          overflow: hidden;
          height: 100%;
          user-select: none;
        }
        
        .errorPageHomebutton{
            margin: 10px 0 0 15px
        }

        .error {
          text-align: center;
          font-family: 'Gilda Display', serif;
          font-size: 18px;
          font-style: italic;
          text-align: center;
          width: 220px;
          height: 60px;
          line-height: 60px;
          margin: auto;
          position: absolute;
          top: 0;
          bottom: 0;
          left: -60px;
          right: 0;
          animation: noise 2s linear infinite;
          overflow: default;
        }
        
        .error:after {
          content: 'Something went wrongv. . .';
          font-family: 'Gilda Display', serif;
          font-size: 18px;
          font-style: italic;
          text-align: center;
          width: 220px;
          height: 60px;
          line-height: 60px;
          margin: auto;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          opacity: 0;
          color: blue;
          animation: noise-1 .2s linear infinite;
        }
        
        .info {
          text-align: center;
          font-family: 'Gilda Display', serif;
          font-size: 15px;
          font-style: italic;
          text-align: center;
          width: 200px;
          height: 60px;
          line-height: 60px;
          margin: auto;
          position: absolute;
          top: 140px;
          bottom: 0;
          left: 0;
          right: 0;
          animation: noise-3 1s linear infinite;
        }
        
        .error:before {
          content: 'Somthing went wrong . . .';
          font-family: 'Gilda Display', serif;
          font-size: 18px;
          font-style: italic;
          text-align: center;
          width: 220px;
          height: 60px;
          line-height: 60px;
          margin: auto;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          opacity: 0;
          color: red;
          animation: noise-2 .2s linear infinite;
        }
        
        @keyframes noise-1 {
          0%, 20%, 40%, 60%, 70%, 90% {opacity: 0;}
          10% {opacity: .1;}
          50% {opacity: .5; left: -6px;}
          80% {opacity: .3;}
          100% {opacity: .6; left: 2px;}
        }
        
        @keyframes noise-2 {
          0%, 20%, 40%, 60%, 70%, 90% {opacity: 0;}
          10% {opacity: .1;}
          50% {opacity: .5; left: 6px;}
          80% {opacity: .3;}
          100% {opacity: .6; left: -2px;}
        }
        
        @keyframes noise {
          0%, 3%, 5%, 42%, 44%, 100% {opacity: 1; transform: scaleY(1);}  
          4.3% {opacity: 1; transform: scaleY(1.7);}
          43% {opacity: 1; transform: scaleX(1.5);}
        }
        
        @keyframes noise-3 {
          0%,3%,5%,42%,44%,100% {opacity: 1; transform: scaleY(1);}
          4.3% {opacity: 1; transform: scaleY(4);}
          43% {opacity: 1; transform: scaleX(10) rotate(60deg);}
        }
        `}
      </style>
    </div>
  );
}
