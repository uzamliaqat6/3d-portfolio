import { useState, useCallback, useRef } from "react";
import "./styles/Work.css";
import { MdArrowBack, MdArrowForward, MdPlayArrow } from "react-icons/md";

const projects = [
  {
    title: "Effectudio",
    category: "Video Editing & Motion Graphics",
    tools: "Motion Graphics, Visual Effects, Transitions, Color Grading",
    video: "/EFFECTUDIO TEST.mp4",
  },
  {
    title: "Restaurant Commercial",
    category: "AI-Generated Advertisement",
    tools: "AI Generation, Cinematic Visuals, Product Showcasing",
    video: "/resturant ad.mp4",
  },
  {
    title: "Juice Land TV Ad",
    category: "AI-Generated TV Commercial",
    tools: "Product Visualization, Cinematic Scenes, Sound Design",
    video: "/juice land ad .mp4",
  },
  {
    title: "Explainer Video",
    category: "Motion Graphics & Animated Explainer",
    tools: "Motion Graphics, 2D Animation, Visual Storytelling",
    video: "/explainer video.mp4",
  },
];

interface WorkVideoProps {
  videoSrc: string;
  title: string;
}

const WorkVideo = ({ videoSrc, title }: WorkVideoProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.error("Video playback error:", err));
    }
  };

  return (
    <div className="work-video-container" onClick={togglePlay}>
      <video
        ref={videoRef}
        src={videoSrc}
        controls={isPlaying}
        playsInline
        preload="metadata"
        className="work-video-element"
        onEnded={() => setIsPlaying(false)}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
        aria-label={title}
      />
      {!isPlaying && (
        <div className="video-play-overlay">
          <div className="video-play-button">
            <MdPlayArrow />
          </div>
        </div>
      )}
    </div>
  );
};

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkVideo
                        videoSrc={project.video}
                        title={project.title}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${
                  index === currentIndex ? "carousel-dot-active" : ""
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;