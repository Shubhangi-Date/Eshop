import React, { useState } from "react";

import "./Dropdownlist.css";

function DropdownList(props) {
  const [sareeDropdownOpen, setSareeDropdownOpen] = useState(false);
  const [selectedSaree, setSelectedSaree] = useState("");
  const [jacketDropdownOpen, setJacketDropdownOpen] = useState(false);
  const [selectedJacket, setSelectedJacket] = useState("");
  const [pantDropdownOpen, setPantDropdownOpen] = useState(false);
  const [selectedPant, setSelectedPant] = useState("");

  const handleSareeDropdownClick = () => {
    setSareeDropdownOpen(!sareeDropdownOpen);
  };

  const handleSareeItemClick = (item) => {
    setSelectedSaree(item);
    setSareeDropdownOpen(false);
  };

  const handleJacketDropdownClick = () => {
    setJacketDropdownOpen(!jacketDropdownOpen);
  };

  const handleJacketItemClick = (item) => {
    setSelectedJacket(item);
    setJacketDropdownOpen(false);
  };

  const handlePantDropdownClick = () => {
    setPantDropdownOpen(!pantDropdownOpen);
  };

  const handlePantItemClick = (item) => {
    setSelectedPant(item);
    setPantDropdownOpen(false);
  };

  const handleSareeMouseEnter = () => {
    setSareeDropdownOpen(true);
  };

  const handleSareeMouseLeave = () => {
    setSareeDropdownOpen(false);
  };

  const handleJacketMouseEnter = () => {
    setJacketDropdownOpen(true);
  };

  const handleJacketMouseLeave = () => {
    setJacketDropdownOpen(false);
  };

  const handlePantMouseEnter = () => {
    setPantDropdownOpen(true);
  };

  const handlePantMouseLeave = () => {
    setPantDropdownOpen(false);
  };
  return (
    <div className="dropdowns-container">
      <div className="dropdown-container" onMouseEnter={handleSareeMouseEnter}
        onMouseLeave={handleSareeMouseLeave}>
        <div className="dropdown-header" onClick={handleSareeDropdownClick}>
          <span>{selectedSaree || "Saree"}</span>
          <span className={`arrow ${sareeDropdownOpen ? "up" : ""}`}></span>
        </div>
        {sareeDropdownOpen && (
          <div className="dropdown-items">
            <div className="dropdown-item" onClick={() => handleSareeItemClick("Organza Saree")}>
              Organza Saree
            </div>
            <div className="dropdown-item" onClick={() => handleSareeItemClick("Traditional Saree")}>
              Traditional Saree
            </div>
            <div className="dropdown-item" onClick={() => handleSareeItemClick("Party Saree")}>
              Party Saree
            </div>
          </div>
        )}
      </div>
      <div className="dropdown-container" onMouseEnter={handleJacketMouseEnter}
        onMouseLeave={handleJacketMouseLeave}>
        <div className="dropdown-header" onClick={handleJacketDropdownClick}>
          <span>{selectedJacket || "Jacket"}</span>
          <span className={`arrow ${jacketDropdownOpen ? "up" : ""}`}></span>
        </div>
        {jacketDropdownOpen && (
          <div className="dropdown-items">
            <div className="dropdown-item" onClick={() => handleJacketItemClick("Denim Jacket")}>
              Denim Jacket
            </div>
            <div className="dropdown-item" onClick={() => handleJacketItemClick("Leather Jacket")}>
              Leather Jacket
            </div>
          </div>
        )}
      </div>
      <div className="dropdown-container" onMouseEnter={handlePantMouseEnter}
        onMouseLeave={handlePantMouseLeave}>
        <div className="dropdown-header" onClick={handlePantDropdownClick}>
          <span>{selectedPant || "Pant"}</span>
          <span className={`arrow ${pantDropdownOpen ? "up" : ""}`}></span>
        </div>
        {pantDropdownOpen && (
          <div className="dropdown-items">
            <div className="dropdown-item" onClick={() => handlePantItemClick("Jeans")}>
              Jeans
            </div>
            <div className="dropdown-item" onClick={() => handlePantItemClick("Plazzo Pants")}>
              Plazzo Pants
            </div>
          </div>

        )
        }
      </div>
    </div>

  );
}

export default DropdownList;