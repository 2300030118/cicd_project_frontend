import React, { useState } from "react";
import "../styles/Students.css";
import { FaDownload } from "react-icons/fa";
import VideoPlayer from "./VideoPlayer";

// =========================
// Courses & Lessons Data
// =========================

const higherCourses = {
  "6": {
    "1st Language": ["Lesson 1", "Lesson 2", "Lesson 3"],
    "2nd Language": ["Lesson 1", "Lesson 2", "Lesson 3"],
    "3rd Language": ["Lesson 1", "Lesson 2"],
    Maths: ["Lesson 1", "Lesson 2", "Lesson 3"],
    Science: ["Lesson 1", "Lesson 2"],
    Social: ["Lesson 1", "Lesson 2"],
  },
  "7": {
    "1st Language": ["Lesson 1", "Lesson 2"],
    "2nd Language": ["Lesson 1", "Lesson 2"],
    "3rd Language": ["Lesson 1", "Lesson 2"],
    Maths: ["Lesson 1", "Lesson 2", "Lesson 3"],
    Science: ["Lesson 1", "Lesson 2"],
    Social: ["Lesson 1", "Lesson 2"],
  },
  "8": {
    "1st Language": ["Lesson 1", "Lesson 2"],
    "2nd Language": ["Lesson 1", "Lesson 2"],
    "3rd Language": ["Lesson 1", "Lesson 2"],
    Maths: ["Lesson 1", "Lesson 2", "Lesson 3"],
    Science: ["Lesson 1", "Lesson 2"],
    Social: ["Lesson 1", "Lesson 2"],
  },
  "9": {
    "1st Language": ["Lesson 1", "Lesson 2"],
    "2nd Language": ["Lesson 1", "Lesson 2"],
    "3rd Language": ["Lesson 1", "Lesson 2"],
    Maths: ["Lesson 1", "Lesson 2", "Lesson 3", "Lesson 4"],
    Science: ["Lesson 1", "Lesson 2", "Lesson 3"],
    Social: ["Lesson 1", "Lesson 2"],
  },
  "10": {
    "1st Language": ["Lesson 1", "Lesson 2", "Lesson 3"],
    "2nd Language": ["Lesson 1", "Lesson 2", "Lesson 3"],
    "3rd Language": ["Lesson 1", "Lesson 2"],
    Maths: ["Lesson 1", "Lesson 2", "Lesson 3", "Lesson 4"],
    Science: ["Lesson 1", "Lesson 2", "Lesson 3"],
    Social: ["Lesson 1", "Lesson 2", "Lesson 3"],
  },
};

const interCourses = {
  MPC: {
    "1st Year": {
      Maths: ["Algebra", "Calculus", "Geometry"],
      Physics: ["Mechanics", "Thermodynamics", "Waves"],
      Chemistry: ["Organic", "Inorganic", "Physical"],
    },
    "2nd Year": {
      Maths: ["Vectors", "Probability", "Matrices"],
      Physics: ["Optics", "Electromagnetism", "Modern Physics"],
      Chemistry: ["Analytical", "Electrochemistry", "Organic"],
    },
  },
  BiPC: {
    "1st Year": {
      Botany: [
        "Cell Biology",
        "Plant Physiology",
        "Genetics",
        "Plant Kingdom",
        "Cell: The Unit of Life",
        "Photosynthesis and Respiration",
      ],
      Zoology: [
        "Animal Anatomy",
        "Ecosystem",
        "Chemical Coordination",
        "Locomotion",
        "Neural Control",
        "Breathing and Exchange of Gases",
      ],
      Physics: [
        "Work Power Energy",
        "Motion in a Straight Line",
        "Motion in a Plane",
        "Laws of Motion",
        "Systems of Particles",
        "Gravitation",
      ],
      Chemistry: [
        "Structure of Atom",
        "Classification of Elements and Periodicity in Properties",
        "Chemical Bonding and Molecular Structure",
        "Thermodynamics",
        "Equilibrium",
        "Organic",
       "Inorganic"
      ],
    },
    "2nd Year": {
      Botany: [
        "Plant Genetics",
        "Ecology",
        "Plant Anatomy",
        "Sexual Reproduction in Flowering Plants",
        "Molecular Basis of Inheritance",
        "Biotechnology and Its Applications",
      ],
      Zoology: [
        "Animal Physiology",
        "Reproduction",
        "Evolution",
        "Genetics",
        "Human Reproduction",
        "Principles of Inheritance and Variation",
      ],
      Physics: [
        "Electromagnetism",
        "Thermodynamics",
        "Optics",
        "Electric Charges and Fluids",
        "Electrostatic Potential and Capacitance",
        "Current Electricity",
        "Moving Charges and Magnetism",
        "Magnetism and Matter",
        "Electromagnetic Induction",
        "Alternating Currents",
        "Electromagnetic Waves",
      ],
      Chemistry: [
        "Electrochemistry",
        "Surface Chemistry",
        "The Solid State",
        "Solutions",
        "Chemical Kinetics",
        "The Periodic Table",
        "p-Block Elements",
        "d- and f-Block Elements",
        "Coordination Compounds",
        "Haloalkanes and Haloarenes",
        "Alcohols, Phenols and Ethers",
        "Aldehydes, Ketones and Carboxylic Acids",
        "Organic Compounds Containing Nitrogen",
        "Biomolecules",
        "Polymers",
        "Chemistry in Everyday Life",
      ],
    },
  },
};

const btechCourses = {
  CSE: {
    "Mathematics for Computing": ["Lesson 1", "Lesson 2"],
    "Data Structures": ["Arrays", "Linked List", "Stack & Queue"],
    Algorithms: ["Sorting", "Searching", "Graph Algorithms"],
    "Operating Systems": ["Processes", "Threads", "Scheduling"],
    "AI & ML": ["Regression", "Classification", "Clustering"],
    "Web Development": ["HTML", "CSS", "JS Basics"],
    "Database Management": ["SQL Basics", "Joins", "Normalization"],
    "Computer Networks": ["OSI Model", "TCP/IP", "Routing"],
    DevOps: ["CI/CD", "Docker", "Kubernetes"],
    "Software Engineering": ["SDLC", "UML", "Testing"],
  },
  ECE: {
    "Mathematics for Electronics": ["Lesson 1", "Lesson 2"],
    Electronics: ["Diodes", "Transistors", "Amplifiers"],
    "Communication Systems": ["AM/FM", "Modulation", "Demodulation"],
    "Signal Processing": ["FFT", "Filters", "Sampling"],
    Microprocessors: ["8085", "8086", "Applications"],
    "Embedded Systems": ["Microcontrollers", "RTOS", "Projects"],
  },
  Mechanical: {
    "Engineering Mathematics": ["Lesson 1", "Lesson 2"],
    Thermodynamics: ["Laws", "Cycles", "Applications"],
    "Fluid Mechanics": ["Continuity", "Bernoulli", "Pipe Flow"],
    "Strength of Materials": ["Stress", "Strain", "Beams"],
    "CAD/CAM": ["2D CAD", "3D CAD", "CAM Basics"],
    "Manufacturing Processes": ["Casting", "Forging", "Welding"],
  },
};

// =========================
// Students Component
// =========================

export default function Students() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSub, setSelectedSub] = useState(null);
  const [selectedSubSub, setSelectedSubSub] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);

  const getSubOptions = () => {
    if (selectedCategory === "Higher") return Object.keys(higherCourses);
    if (selectedCategory === "Inter") return Object.keys(interCourses);
    if (selectedCategory === "BTech") return Object.keys(btechCourses);
    return [];
  };

  const getSubSubOptions = () => {
    if (selectedCategory === "Inter" && selectedSub)
      return Object.keys(interCourses[selectedSub]);
    return [];
  };

  const getSubjects = () => {
    if (selectedCategory === "Higher")
      return Object.keys(higherCourses[selectedSub] || {});
    if (selectedCategory === "Inter" && selectedSub && selectedSubSub)
      return Object.keys(interCourses[selectedSub][selectedSubSub] || {});
    if (selectedCategory === "BTech")
      return Object.keys(btechCourses[selectedSub] || {});
    return [];
  };

  const getLessons = () => {
    if (selectedCategory === "Higher")
      return higherCourses[selectedSub]?.[selectedSubject] || [];
    if (selectedCategory === "Inter")
      return interCourses[selectedSub]?.[selectedSubSub]?.[selectedSubject] || [];
    if (selectedCategory === "BTech")
      return btechCourses[selectedSub]?.[selectedSubject] || [];
    return [];
  };

  const handleBack = () => {
    if (selectedLesson) setSelectedLesson(null);
    else if (selectedSubject) setSelectedSubject(null);
    else if (selectedSubSub) setSelectedSubSub(null);
    else if (selectedSub) setSelectedSub(null);
    else if (selectedCategory) setSelectedCategory(null);
  };

  const slugify = (text) => text.replace(/\s+/g, "_");

  return (
    <div className="students-container">
      <h1 className="welcome-title">📚 Students Study Platform</h1>
      <p className="welcome-subtitle">Choose your level to explore lessons</p>

      {(selectedCategory ||
        selectedSub ||
        selectedSubSub ||
        selectedSubject ||
        selectedLesson) && (
        <button className="back-btn" onClick={handleBack}>
          ← Back
        </button>
      )}

      {/* Top-level */}
      {!selectedCategory && (
        <div className="bars-container">
          <div
            className="category-bar higher"
            onClick={() => setSelectedCategory("Higher")}
          >
            <h2>Higher</h2>
            <p>Grades 6-10</p>
          </div>
          <div
            className="category-bar inter"
            onClick={() => setSelectedCategory("Inter")}
          >
            <h2>Inter</h2>
            <p>MPC & BiPC</p>
          </div>
          <div
            className="category-bar btech"
            onClick={() => setSelectedCategory("BTech")}
          >
            <h2>BTech</h2>
            <p>Engineering Branches</p>
          </div>
        </div>
      )}

      {/* Class/Branch */}
      {selectedCategory && !selectedSub && (
        <div className="bars-container">
          {getSubOptions().map((sub) => (
            <div
              key={sub}
              className="category-bar sub"
              onClick={() => setSelectedSub(sub)}
            >
              <h2>{sub}</h2>
            </div>
          ))}
        </div>
      )}

      {/* 1st/2nd Year for Inter */}
      {selectedCategory === "Inter" && selectedSub && !selectedSubSub && (
        <div className="bars-container">
          {getSubSubOptions().map((year) => (
            <div
              key={year}
              className="category-bar sub"
              onClick={() => setSelectedSubSub(year)}
            >
              <h2>{year}</h2>
            </div>
          ))}
        </div>
      )}

      {/* Subjects */}
      {((selectedCategory === "Higher" && selectedSub) ||
        (selectedCategory === "Inter" && selectedSubSub) ||
        (selectedCategory === "BTech" && selectedSub)) &&
        !selectedSubject && (
          <div className="bars-container">
            {getSubjects().map((subject) => (
              <div
                key={subject}
                className="category-bar sub"
                onClick={() => setSelectedSubject(subject)}
              >
                <h2>{subject}</h2>
              </div>
            ))}
          </div>
        )}

      {/* Lessons */}
      {selectedSubject && !selectedLesson && (
        <div className="videos-container">
          {getLessons().map((lesson) => (
            <div key={lesson} className="video-card">
              <h4>{lesson}</h4>
              <button
                className="watch-btn"
                onClick={() => setSelectedLesson(lesson)}
              >
                ▶ Watch Now
              </button>
              <button className="watch-btn">
                <FaDownload /> Download
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Video Player */}
      {selectedLesson && (
        <div className="video-player-wrapper">
          <h2>{selectedLesson}</h2>
          <VideoPlayer
            src={`/videos/${slugify(selectedLesson)}.mp4`}
            poster="/thumbnail.jpg"
          />
        </div>
      )}
    </div>
  );
}
