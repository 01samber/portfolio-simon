"use client";

import React, { useRef, useState, useCallback } from "react";
import HTMLFlipBook from "react-pageflip";
import Image from "next/image";

const BLUR_DATA =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMCwsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQVFh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEEA/ALWl6hqF1p1tNcX1zNK8as7vKxZiQCSSSck0pSlVJ//Z";

const FlipBookPage = React.forwardRef<
  HTMLDivElement,
  { src: string; alt: string }
>(({ src, alt }, ref) => (
  <div
    ref={ref}
    className="flipbook-page bg-[var(--surface-dark)] flex items-center justify-center overflow-hidden"
    style={{ backgroundColor: "var(--surface-dark)" }}
  >
    <div className="relative w-full h-full flex items-center justify-center p-2">
      <Image
        src={src}
        alt={alt}
        fill
        placeholder="blur"
        blurDataURL={BLUR_DATA}
        className="object-contain"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  </div>
));

FlipBookPage.displayName = "FlipBookPage";

export function ProjectFlipBook({
  images,
  projectName,
}: {
  images: string[];
  projectName: string;
}) {
  const flipBookRef = useRef<{ pageFlip: () => { flipNext: () => void; flipPrev: () => void; getCurrentPageIndex: () => number; getPageCount: () => number } }>(null);
  const [currentPage, setCurrentPage] = useState(0);

  const onFlip = useCallback((e: { data: number }) => {
    setCurrentPage(e.data);
  }, []);

  const flipNext = () => {
    flipBookRef.current?.pageFlip()?.flipNext?.();
  };

  const flipPrev = () => {
    flipBookRef.current?.pageFlip()?.flipPrev?.();
  };

  const pageCount = images.length;
  const canGoNext = currentPage < pageCount - 1;
  const canGoPrev = currentPage > 0;

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 min-h-[320px] flex items-center justify-center">
        <div className="w-full h-full max-w-md max-h-[420px] mx-auto flipbook-container">
          <HTMLFlipBook
            width={320}
            height={420}
            size="stretch"
            minWidth={200}
            maxWidth={400}
            minHeight={280}
            maxHeight={560}
            startPage={0}
            flippingTime={600}
            maxShadowOpacity={0.5}
            drawShadow={true}
            usePortrait={true}
            startZIndex={0}
            autoSize={true}
            showCover={false}
            mobileScrollSupport={true}
            clickEventForward={true}
            useMouseEvents={true}
            swipeDistance={30}
            showPageCorners={true}
            disableFlipByClick={false}
            onFlip={onFlip}
            ref={flipBookRef}
            className="flipbook"
            style={{}}
          >
            {images.map((src, i) => (
              <FlipBookPage
                key={src + i}
                src={src}
                alt={`${projectName} work sample ${i + 1}`}
              />
            ))}
          </HTMLFlipBook>
        </div>
      </div>
      <div className="flex items-center justify-between gap-4 p-4 border-t border-zinc-800/60">
        <button
          type="button"
          onClick={flipPrev}
          disabled={!canGoPrev}
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-zinc-400 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Prev
        </button>
        <span className="text-sm text-zinc-500">
          {currentPage + 1} / {pageCount}
        </span>
        <button
          type="button"
          onClick={flipNext}
          disabled={!canGoNext}
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-zinc-400 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          Next
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
