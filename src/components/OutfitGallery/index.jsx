
import { useState } from 'react';
import './index.css';

const outfitData = [
  {
    id: 1,
    name: 'Elegant Kurti',
    category: 'Kurti',
    description: 'Simple and elegant everyday design.',
    icon: '👗',
    color: '#E8D2BC'
  },
  {
    id: 2,
    name: 'Designer Lehenga',
    category: 'Lehenga',
    description: 'Traditional outfit with beautiful details.',
    icon: '👘',
    color: '#E9C5C5'
  },
  {
    id: 3,
    name: 'Designer Blouse',
    category: 'Blouse',
    description: 'Stylish blouse with unique patterns.',
    icon: '👚',
    color: '#D9C9B5'
  },
  {
    id: 4,
    name: 'Anarkali Dress',
    category: 'Anarkali',
    description: 'Graceful traditional Anarkali style.',
    icon: '👗',
    color: '#D8C8E5'
  },
  {
    id: 5,
    name: 'Party Wear Gown',
    category: 'Gown',
    description: 'A beautiful design for special occasions.',
    icon: '👗',
    color: '#E7D4A9'
  },
  {
    id: 6,
    name: 'Modern Dress',
    category: 'Western',
    description: 'A stylish modern outfit design.',
    icon: '👗',
    color: '#C8D9D0'
  }
];

const categories = [
  'All',
  'Kurti',
  'Lehenga',
  'Blouse',
  'Anarkali',
  'Gown',
  'Western'
];

const OutfitGallery = () => {

  const [selectedCategory, setSelectedCategory] = useState('All');

 const [selectedOutfits, setSelectedOutfits] = useState(() => {
  const saved = JSON.parse(
    localStorage.getItem('stylecraft-selected-outfits') || '[]'
  );

  return saved.map((outfit) => outfit.id);
});

  const filteredOutfits =
    selectedCategory === 'All'
      ? outfitData
      : outfitData.filter(
          (outfit) => outfit.category === selectedCategory
        );

 
const handleSelect = (id) => {
  const updatedSelection = selectedOutfits.includes(id)
    ? selectedOutfits.filter((item) => item !== id)
    : [...selectedOutfits, id];

  setSelectedOutfits(updatedSelection);

  const selectedItems = outfitData.filter((outfit) =>
    updatedSelection.includes(outfit.id)
  );

  localStorage.setItem(
    'stylecraft-selected-outfits',
    JSON.stringify(selectedItems)
  );
};


  return (
    <div className="outfit-gallery">

      <div className="gallery-heading">

        <p>DISCOVER YOUR STYLE</p>

        <h1>Explore Outfit Designs</h1>

        <span>
          Discover different outfit styles for your fabric.
        </span>

      </div>

      {/* Category Filters */}

      <div className="category-filters">

        {categories.map((category) => (

          <button
            key={category}
            className={
              selectedCategory === category
                ? 'category-btn active'
                : 'category-btn'
            }
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>

        ))}

      </div>

      {/* Selected Outfit Count */}

      
<div className="selection-info">

  <span>
    {selectedOutfits.length} designs selected
  </span>

  {selectedOutfits.length > 0 && (
    <a href="/customize">
      Customize Selected →
    </a>
  )}

</div>


      {/* Outfit Cards */}

      <div className="outfit-grid">

        {filteredOutfits.map((outfit) => (

          <div className="outfit-card" key={outfit.id}>

            <div
              className="outfit-image"
              style={{ backgroundColor: outfit.color }}
            >
              <span>{outfit.icon}</span>
            </div>

            <div className="outfit-details">

              <p className="outfit-category">
                {outfit.category}
              </p>

              <h3>{outfit.name}</h3>

              <p className="outfit-description">
                {outfit.description}
              </p>

              <button
                className={
                  selectedOutfits.includes(outfit.id)
                    ? 'select-outfit selected'
                    : 'select-outfit'
                }
                onClick={() => handleSelect(outfit.id)}
              >
                {selectedOutfits.includes(outfit.id)
                  ? '✓ Selected'
                  : 'Select Design'}
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default OutfitGallery;
