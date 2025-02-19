import { useRef } from 'react'

export default function VideoPlayer({
  publicId,
  poster,
  autoplayBoolean,
  controlsBoolean,
  loopBoolean,
}) {
  const videoRef = useRef()

  return (
    <div className="overflow-hidden rounded-2xl">
      <video
        ref={videoRef}
        src={publicId}
        poster={poster}
        autoPlay={autoplayBoolean}
        controls={controlsBoolean}
        loop={loopBoolean}
        playsInline
        muted
        className="w-full"
      />
    </div>
  )
}
