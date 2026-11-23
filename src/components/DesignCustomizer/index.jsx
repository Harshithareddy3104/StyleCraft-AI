
import { useState } from 'react';
import './index.css';

const designOptions = {
  neck: [
    'Round Neck',
    'V-Neck',
    'Square Neck',
    'Boat Neck'
  ],

  sleeves: [
    'Sleeveless',
    'Short Sleeves',
    'Three-Quarter Sleeves',
    'Full Sleeves'
  ],

  length: [
    'Short',
    'Knee Length',
    'Ankle Length',
    'Floor Length'
  ],

  embroidery: [
    'Simple',
    'Floral',
    'Traditional',
    'Heavy Embroidery'
  ],

  border: [
    'Plain Border',
    'Golden Border',
    'Embroidered Border',
    'Designer Border'
  ]
};

const DesignCustomizer = () => {

  const selectedOutfits = JSON.parse(
    localStorage.getItem('stylecraft-selected-outfits') || '[]'
  );

  const [selectedOutfitId, setSelectedOutfitId] = useState(
    selectedOutfits[0]?.id || ''
  );

  const [design, setDesign] = useState({
    neck: 'Round Neck',
    sleeves: 'Short Sleeves',
    length: 'Ankle Length',
    embroidery: 'Simple',
    border: 'Plain Border'
  });

  const [message, setMessage] = useState('');

  const activeOutfit = selectedOutfits.find(
    (outfit) => outfit.id === Number(selectedOutfitId)
  );

  const handleChange = (category, value) => {
    setDesign((previous) => ({
      ...previous,
      [category]: value
    }));

    setMessage('');
  };

  const saveDesign = () => {

    if (!activeOutfit) {
      setMessage('Please select an outfit first.');
      return;
    }

    const customizedDesign = {
      id: Date.now(),
      outfit: activeOutfit,
      customization: design,
      createdAt: new Date().toISOString()
    };

    const existingDesigns = JSON.parse(
      localStorage.getItem('stylecraft-customized-designs') || '[]'
    );

    localStorage.setItem(
      'stylecraft-customized-designs',
      JSON.stringify([...existingDesigns, customizedDesign])
    );

    setMessage('Your customized design has been saved successfully!');
  };

  return (
    <div className="customizer-page">

      <div className="customizer-heading">
        <p>MAKE IT YOUR OWN</p>
        <h1>Customize Your Outfit</h1>
        <span>
          Choose the details that match your style.
        </span>
      </div>

      {selectedOutfits.length === 0 ? (

        <div className="no-outfits">
          <h2>No outfits selected</h2>
          <p>
            Please go to Explore Designs and select an outfit first.
          </p>
          <a href="/designs">Explore Designs</a>
        </div>

      ) : (

        <div className="customizer-container">

          <div className="customizer-left">

            <h2>Selected Outfit</h2>

            <select
              value={selectedOutfitId}
              onChange={(event) =>
                setSelectedOutfitId(event.target.value)
              }
            >
              {selectedOutfits.map((outfit) => (
                <option key={outfit.id} value={outfit.id}>
                  {outfit.name}
                </option>
              ))}
            </select>

            {activeOutfit && (
              <div
                className="customizer-preview"
                style={{
                  backgroundColor: activeOutfit.color
                }}
              >
                <span>{activeOutfit.icon}</span>
                <h3>{activeOutfit.name}</h3>
                <p>Design customization options</p>
              </div>
            )}

          </div>

          <div className="customizer-right">

            <h2>Design Preferences</h2>

            {Object.entries(designOptions).map(
              ([category, options]) => (

                <div className="custom-option" key={category}>

                  <h3>
                    {category === 'neck' && 'Neck Design'}
                    {category === 'sleeves' && 'Sleeve Design'}
                    {category === 'length' && 'Dress Length'}
                    {category === 'embroidery' && 'Embroidery'}
                    {category === 'border' && 'Border Design'}
                  </h3>

                  <div className="option-list">

                    {options.map((option) => (

                      <button
                        key={option}
                        className={
                          design[category] === option
                            ? 'option-btn active'
                            : 'option-btn'
                        }
                        onClick={() =>
                          handleChange(category, option)
                        }
                      >
                        {option}
                      </button>

                    ))}

                  </div>

                </div>

              )
            )}

            <button
              className="save-customization"
              onClick={saveDesign}
            >
              Save Customized Design
            </button>

            {message && (
              <p className="save-message" role="status">
                {message}
              </p>
            )}

          </div>

        </div>

      )}

    </div>
  );
};

export default DesignCustomizer;
