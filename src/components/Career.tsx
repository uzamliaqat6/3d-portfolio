import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My Career <span>&</span>
          <br /> Experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Founder</h4>
                <h5>Duovia</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Managing end-to-end video production and social media marketing at Duovia to build high-growth campaigns.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>EurosHub</h4>
                <h5>2+ years · Rawalpindi</h5>
              </div>
              <h3>2024–26</h3>
            </div>
            <p>
              Lead a team of video editors, guiding projects from concept to final delivery.
              Applied modern editing workflows, including AI assisted tools and AI generated 
              video content, to boost productivity and creative output. Collaborated closely 
              with clients and team members to deliver on brand creative solutions for social media, YouTube,
               and marketing campaigns, always on time and at a consistently high standard.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4> Creative Crew </h4>
                <h5>1+ years · Islamabad </h5>
              </div>
              <h3>2023–24</h3>
            </div>
            <p>
              Utilized industry standard tools such as Adobe Premiere Pro, Adobe After Effects,
               CapCut, and Canva to create professional, polished video content. Organized and managed raw 
              footage to streamline the editing workflow and ensure easy project access.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Line Art</h4>
                <h5>6 month · Bahria Town </h5>
              </div>
              <h3>2022-23</h3>
            </div>
            <p>
              Video Editor Intern. Edited and optimized video content for different platforms and formats to
              improve reach and viewer engagement. Supported the team in delivering creative solutions aligned with project goals and client expectations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
